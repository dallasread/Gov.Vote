var CustomElement = require('generate-js-custom-element'),
    BrowserRouter = require('browser-app-router'),
    marked = require('marked'),
    $ = require('jquery');

var App = CustomElement.createElement({
    template: require('./index.html'),
    partials: {
        issue: require('./partials/issue.html'),
        header: require('./partials/header.html'),
        sidebar: require('./partials/sidebar.html'),
        stances: require('./partials/stances.html'),
        stance: require('./partials/stance.html'),
        issues: require('./partials/issues.html')
    },
    transforms: {
        any: function any(obj) {
            return typeof obj === 'object' && Object.keys(obj).length;
        },
        empty: function empty(obj) {
            return typeof obj !== 'object' || !Object.keys(obj).length;
        },
        md: function md(content) {
            return marked(content);
        }
    }
}, function App(options) {
    var _ = this,
        isMobile = $(window).width() <= 640;

    CustomElement.call(_, options || {});

    var $el = $(_.element),
        router = new BrowserRouter({
            mode: 'hash'
        });

    router.set404({
        title: 'Gov.Vote',
        handler: function (req) {
            var params = req.fullPath.split(/\//);

            _.setSite((params[1] + '').replace(/^#/, ''), (params[2] + '').replace(/^#/, ''));

            var issue = _.get('site.issues.' + params[3]) || _.get('site');

            _.set('issue', issue);

            if (issue.stances && issue.stances[params[4]]) {
                _.set('stance', issue.stances[params[4]]);
            } else {
                _.unset('stance');
            }

            document.body.scrollTop = 0;
        }
    });

    router.start();

    $el.on('click', '.toggle-sidebar', function() {
        if (!isMobile) return;

        if (parseInt($('sidebar').css('left'))) {
            $('sidebar').animate({ left: 0 }, 150);
        } else {
            $('sidebar').animate({ left: '-100%' }, 150);
        }

        return false;
    });

    $el.on('click', '[href][href!="#"]', function() {
        router.go( $(this).attr('href').replace(/^#/, '') );

        if ($(this).closest('sidebar').length) {
            if (parseInt($(this).closest('sidebar').css('width')) !== 280) {
                $('sidebar').animate({ left: '-100%' }, 150);
                return false;
            }
        }
    });
});

App.definePrototype({
    setSite: function setSite(lang, permalink) {
        var _ = this,
            site = _.get(permalink + '.langs.' + lang);

        if (!site) {
            _.setSite('en', 'global');
        } else {
            _.set('site', site);
            _.set('prefix', '/' + lang + '/' + permalink);
        }
    },
});

module.exports = App;
