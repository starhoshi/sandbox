(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var App = React.createClass({displayName: "App",
  getInitialState: function() {
    return {message: "", savedMessages: []};
  },

  updateMessage: function(message) {
    this.setState({message: message});
  },

  saveMessage: function(message) {
    var messages = this.state.savedMessages.concat(message);
    this.setState({savedMessages: messages});
  },

  render: function() {
    return (
      React.createElement("div", null, 
        React.createElement(MessageInput, {onChange: this.updateMessage, onSave: this.saveMessage}), 
        React.createElement(Message, {message: this.state.message, savedMessages: this.state.savedMessages})
      )
    );
  }
});

var MessageInput = React.createClass({displayName: "MessageInput",
  _onChange: function(e) {
    this.props.onChange(e.target.value);
  },

  _onKeyDown: function(e) {
    if (e.keyCode === 13) {
      this.props.onSave(e.target.value);
      e.target.value = "";
    }
  },

  render: function() {
    return React.createElement("input", {type: "text", onChange: this._onChange, onKeyDown: this._onKeyDown});
  }
});

var Message = React.createClass({displayName: "Message",
  render: function() {
    var key = 0;
    var messages = this.props.savedMessages.map(function(message) {
      return React.createElement("li", {key: key++}, message);
    });
    return (
      React.createElement("div", null, 
        React.createElement("p", null, this.props.message), 
        React.createElement("ul", null, messages)
      )
    );
  }
});

React.render(React.createElement(App, null), document.getElementById('app-container'));

},{}]},{},[1]);
