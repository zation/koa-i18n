var app = require('koa')();
var locale = require('koa-locale'); //  detect the locale
var views = require('koa-views');
var i18n = require('..');

// Required! 
locale(app);

app.use(views(__dirname, 'jade', {
  ext: 'html'
}));

app.use(i18n(app, {
  directory: __dirname + '/locales',
  locales: ['zh-cn', 'en'],       //  `zh-CN` defualtLocale
  query: true                     //  optional detect querystring - `/?lang=en-US`
}));

app.use(function *(next) {
  yield this.render('index')
});

app.listen(3000);
