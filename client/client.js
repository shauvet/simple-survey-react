require('es5-shim/es5-shim');
require('es5-shim/es5-sham');

var React = require('react');
var App = require(./app/app);

React.renderComponent(<App/>, document.body);

window.React = React;