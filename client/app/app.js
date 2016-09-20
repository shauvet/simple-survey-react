var React = require('react');

var App = React.createClass({
	componentDidMount: function () {
		console.log('DidMount');
	},
	componentWillMount: function () {
		console.log('Going to mount');
	},
	render: function () {
		console.log('Render');
		return <div>Hello! XW</div>
	}
});

module.exports = App;