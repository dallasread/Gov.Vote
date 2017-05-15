var yfm = require('yaml-front-matter'),
    fs = require('fs'),
    path = require('path');

function getDirectories(path) {
    return fs.readdirSync(path).filter(function (file) {
        return fs.statSync(path + '/' + file).isDirectory();
    });
}

function getFiles(path) {
    return fs.readdirSync(path).filter(function (file) {
        return !fs.statSync(path + '/' + file).isDirectory();
    });
}

function strip(filename) {
    return filename.replace(/\..+$/, '');
}

function parse(file) {
    var data = yfm.loadFront( fs.readFileSync(file) );
    if (data.__content.length) data.content = data.__content.trim();
    delete data.__content;
    return data;
}

var root = path.resolve(__dirname, '../i18n'),
    sites = getDirectories(root),
    data = {},
    langs, lang, issues, issue, stances, stance,
    s, l, i, n;

for (s = sites.length - 1; s >= 0; s--) {
    site = data[sites[s]] = {};
    site.permalink = sites[s];
    site.langs = {};
    langs = getDirectories(root + '/' + site.permalink);

    for (l = langs.length - 1; l >= 0; l--) {
        lang = parse(root + '/' + site.permalink + '/' + langs[l] + '/index.md');
        if (!lang.published) continue;
        lang.permalink = langs[l];
        site.langs[lang.permalink] = lang;
        lang.issues = {};
        issues = getDirectories(root + '/' + site.permalink + '/' + lang.permalink + '/issues');

        for (i = issues.length - 1; i >= 0; i--) {
            issue = parse(root + '/' + site.permalink + '/' + lang.permalink + '/issues/' + issues[i] + '/index.md');
            if (!issue.published) continue;
            issue.permalink = issues[i];
            lang.issues[issue.permalink] = issue;
            issue.stances = {}
            if (!fs.existsSync(root + '/' + site.permalink + '/' + lang.permalink + '/issues/' + issue.permalink + '/stances')) continue;
            stances = getFiles(root + '/' + site.permalink + '/' + lang.permalink + '/issues/' + issue.permalink + '/stances');

            for (n = stances.length - 1; n >= 0; n--) {
                stance = parse(root + '/' + site.permalink + '/' + lang.permalink + '/issues/' + issue.permalink + '/stances/' + stances[n]);
                if (!stance.published) continue;
                stance.permalink = strip(stances[n]);
                issue.stances[stance.permalink] = stance;
            }
        }
    }
}


if (!module.parent) {
    console.log(JSON.stringify(data, null, 4));
}

module.exports = data;
