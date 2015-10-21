var Router = require('../utils/router'),
    config = {
        templates: {
            index: require('./index.bars')
        }
    };

var App = Router.createElement(config, function App(options) {
    var _ = this;

    _.defineProperties({
        routes: require('./routes'),
        issues: {
            1: {
                id: 1,
                title: 'Should terminally ill patients be allowed to end their lives via assisted suicide?',
                description: 'The former head of Canada\'s answer to the NSA doesn\'t have a very high opinion of his fellow citizens. The former head of Canada\'s answer to the NSA doesn\'t have a very high opinion of his fellow citizens. The former head of Canada\'s answer to the NSA doesn\'t have a very high opinion of his fellow citizens. The former head of Canada\'s answer to the NSA doesn\'t have a very high opinion of his fellow citizens.',
                stances: {
                    1: { id: 1, title: 'Yes.' },
                    2: { id: 2, title: 'No.' },
                    3: { id: 3, title: 'As long as sufficient mental help is provided.' }
                }
            },
            2: {
                id: 2,
                title: 'Should women be allowed to wear a Niqāb, or face veil, to civic ceremonies?',
                description: 'The former head of Canada\'s answer to the NSA doesn\'t have a very high opinion of his fellow citizens. The former head of Canada\'s answer to the NSA doesn\'t have a very high opinion of his fellow citizens. The former head of Canada\'s answer to the NSA doesn\'t have a very high opinion of his fellow citizens. The former head of Canada\'s answer to the NSA doesn\'t have a very high opinion of his fellow citizens.',
                stances: {
                    1: { id: 1, title: 'Monitor all emails and phone calls.' },
                    2: { id: 2, title: 'Never monitor any digital activities.' },
                    3: { id: 3, title: 'Only monitor with a warrant.' }
                }
            },
            3: {
                id: 3,
                title: 'Should prisoners serving life sentences for first degree murder be eligible for a parole hearing after 15 years?',
                description: 'The former head of Canada\'s answer to the NSA doesn\'t have a very high opinion of his fellow citizens. The former head of Canada\'s answer to the NSA doesn\'t have a very high opinion of his fellow citizens. The former head of Canada\'s answer to the NSA doesn\'t have a very high opinion of his fellow citizens. The former head of Canada\'s answer to the NSA doesn\'t have a very high opinion of his fellow citizens.',
                stances: {
                    1: { id: 1, title: 'Monitor all emails and phone calls.' },
                    2: { id: 2, title: 'Never monitor any digital activities.' },
                    3: { id: 3, title: 'Only monitor with a warrant.' }
                }
            },
            4: {
                id: 4,
                title: 'Should the government increase environmental regulations on businesses in Canada?',
                description: 'The former head of Canada\'s answer to the NSA doesn\'t have a very high opinion of his fellow citizens. The former head of Canada\'s answer to the NSA doesn\'t have a very high opinion of his fellow citizens. The former head of Canada\'s answer to the NSA doesn\'t have a very high opinion of his fellow citizens. The former head of Canada\'s answer to the NSA doesn\'t have a very high opinion of his fellow citizens.',
                stances: {
                    1: { id: 1, title: 'Monitor all emails and phone calls.' },
                    2: { id: 2, title: 'Never monitor any digital activities.' },
                    3: { id: 3, title: 'Only monitor with a warrant.' }
                }
            },
            5: {
                id: 5,
                title: 'Should prisoners serving life sentences for first degree murder be eligible for a parole hearing after 15 years?',
                description: 'The former head of Canada\'s answer to the NSA doesn\'t have a very high opinion of his fellow citizens. The former head of Canada\'s answer to the NSA doesn\'t have a very high opinion of his fellow citizens. The former head of Canada\'s answer to the NSA doesn\'t have a very high opinion of his fellow citizens. The former head of Canada\'s answer to the NSA doesn\'t have a very high opinion of his fellow citizens.',
                stances: {
                    1: { id: 1, title: 'Monitor all emails and phone calls.' },
                    2: { id: 2, title: 'Never monitor any digital activities.' },
                    3: { id: 3, title: 'Only monitor with a warrant.' }
                }
            },
            6: {
                id: 6,
                title: 'Should the federal government subsidize the production and consumption of renewable energy sources?',
                description: 'The former head of Canada\'s answer to the NSA doesn\'t have a very high opinion of his fellow citizens. The former head of Canada\'s answer to the NSA doesn\'t have a very high opinion of his fellow citizens. The former head of Canada\'s answer to the NSA doesn\'t have a very high opinion of his fellow citizens. The former head of Canada\'s answer to the NSA doesn\'t have a very high opinion of his fellow citizens.',
                stances: {
                    1: { id: 1, title: 'Monitor all emails and phone calls.' },
                    2: { id: 2, title: 'Never monitor any digital activities.' },
                    3: { id: 3, title: 'Only monitor with a warrant.' }
                }
            },
            7: {
                id: 7,
                title: 'Should the government allow TransCanada to expropriate private property for the construction of the Keystone pipeline?',
                description: 'The former head of Canada\'s answer to the NSA doesn\'t have a very high opinion of his fellow citizens. The former head of Canada\'s answer to the NSA doesn\'t have a very high opinion of his fellow citizens. The former head of Canada\'s answer to the NSA doesn\'t have a very high opinion of his fellow citizens. The former head of Canada\'s answer to the NSA doesn\'t have a very high opinion of his fellow citizens.',
                stances: {
                    1: { id: 1, title: 'Monitor all emails and phone calls.' },
                    2: { id: 2, title: 'Never monitor any digital activities.' },
                    3: { id: 3, title: 'Only monitor with a warrant.' }
                }
            },
            8: {
                id: 8,
                title: 'Should welfare recipients be tested for drugs?',
                description: 'The former head of Canada\'s answer to the NSA doesn\'t have a very high opinion of his fellow citizens. The former head of Canada\'s answer to the NSA doesn\'t have a very high opinion of his fellow citizens. The former head of Canada\'s answer to the NSA doesn\'t have a very high opinion of his fellow citizens. The former head of Canada\'s answer to the NSA doesn\'t have a very high opinion of his fellow citizens.',
                stances: {
                    1: { id: 1, title: 'Monitor all emails and phone calls.' },
                    2: { id: 2, title: 'Never monitor any digital activities.' },
                    3: { id: 3, title: 'Only monitor with a warrant.' }
                }
            },
            9: {
                id: 9,
                title: 'Should the pensions of retired workers be taxed?',
                description: 'The former head of Canada\'s answer to the NSA doesn\'t have a very high opinion of his fellow citizens. The former head of Canada\'s answer to the NSA doesn\'t have a very high opinion of his fellow citizens. The former head of Canada\'s answer to the NSA doesn\'t have a very high opinion of his fellow citizens. The former head of Canada\'s answer to the NSA doesn\'t have a very high opinion of his fellow citizens.',
                stances: {
                    1: { id: 1, title: 'Monitor all emails and phone calls.' },
                    2: { id: 2, title: 'Never monitor any digital activities.' },
                    3: { id: 3, title: 'Only monitor with a warrant.' }
                }
            },
            10: {
                id: 10,
                title: 'Should Canada raise or lower the tax rate for corporations?',
                description: 'The former head of Canada\'s answer to the NSA doesn\'t have a very high opinion of his fellow citizens. The former head of Canada\'s answer to the NSA doesn\'t have a very high opinion of his fellow citizens. The former head of Canada\'s answer to the NSA doesn\'t have a very high opinion of his fellow citizens. The former head of Canada\'s answer to the NSA doesn\'t have a very high opinion of his fellow citizens.',
                stances: {
                    1: { id: 1, title: 'Monitor all emails and phone calls.' },
                    2: { id: 2, title: 'Never monitor any digital activities.' },
                    3: { id: 3, title: 'Only monitor with a warrant.' }
                }
            }
        }
    });

    _.supercreate(options);
});

App.definePrototype({
    loading: function loading() {
        var _ = this;
        _.$element.find('.loading').show();
    },

    unloading: function unloading() {
        var _ = this;
        $('html, body').css('overflow', '');
        _.$element.find('.loading').fadeOut();
    }
});

module.exports = App;
