require('node-jsx').install({harmony: true});

var fs = require('fs');
var React = require('react');
var App = require('../../client/app/app');
var router = require('express').Router({caseSensitive: true, strict: true});

var template = fs.readFileSync(_dirname + '../../client/app.html', {encoding: 'utf-8'});

function renderToHtml (router, callback) {
	var body = React.renderComponentToString(App());
	var html = template.replace(/<\/body>/, body + '</body>');

	process.nextTick(function () {
		callback(null, html);
	});
}

router.get('*', function (req, res) {
	renderToHtml(req.url, function (err, html) {
		res.send(html);
	});
});

module.exports = router;