var $ = require('jquery');
var React = require('react');

var Login = require('./Login.jsx');
var Dashboard = require('./Dashboard.jsx');

var App = React.createClass({
  getInitialState: function() {
    return {};
  },
  
  componentDidMount: function() {
    $.get('/user', function(result) {
      if (result.error) return;
      this.setState({
        user: result
      });
    }.bind(this));
  },

  render: function() {
    var page;
    if (!this.state.user) {
      page = <Login />;
    } else {
      page = <Dashboard user={this.state.user} />;
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h1 id="logo">GitHub Followers</h1>
            <p className="subtitle">Follow and get GitHub followers.</p>
          </div>
        </div>
        {page}
      </div>
    );
  }
});

module.exports = App;
