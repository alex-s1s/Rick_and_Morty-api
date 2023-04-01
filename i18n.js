const hoistNonReactStatics = require('hoist-non-react-statics');

module.exports = {
	locales: ['pt-BR'],
	defaultLocale: 'pt-BR',
	staticsHoc: hoistNonReactStatics,
	loadLocaleFrom: (lang, ns) => import(`./src/locales/${lang}/${ns}.json`).then((m) => m.default),
	pages: {
		'*': ['characterData', 'common'],
	},
};
