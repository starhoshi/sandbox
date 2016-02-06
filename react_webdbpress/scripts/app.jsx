var Hello = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Hello,React</h1>
      </div>
    );
  }
});

React.render(<Hello/>, document.getElementById('app-container'));
