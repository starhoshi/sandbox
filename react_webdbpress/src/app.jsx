var React = require('react');
var mdparser = require('markdown').markdown;

var App = React.createClass({
  getInitialState: function() {
    return {markdown: ""};
  },

  updateMarkdown: function(markdown) {
    this.setState({markdown: markdown});
  },

  saveMessage: function(message) {
    var messages = this.state.savedMessages.concat(message);
    this.setState({savedMessages: messages});
  },

  render: function() {
    console.log("render", this);
    return (
      <div>
        <TextInput onChange={this.updateMarkdown}/>
        <Markdown markdown={this.state.markdown}/>
      </div>
    );
  }
});

var TextInput = React.createClass({
  propTypes: {
    onChange: React.PropTypes.func.isRequired
  },

  _onChange: function(e) {
    this.props.onChange(e.target.value);
  },

  render: function() {
    return <input type="text" onChange={this._onChange}/>;
  }
});

var Markdown = React.createClass({
  propTypes: {
    markdown: React.PropTypes.string.isRequired
  },

  render: function() {
    var html = mdparser.toHTML(this.props.markdown)
    return (
      <div dangerouslySetInnerHTML={{
        __html: html
      }}></div>
    );
  }
});

React.render(<App/>, document.getElementById('app-container'));
