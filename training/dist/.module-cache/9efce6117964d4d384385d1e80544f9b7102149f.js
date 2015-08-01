(function(){
	var ShowState = React.createClass({displayName: "ShowState",
		getInitialState: function() {
			var state = {count: 1}
			setInterval(function() {
				this.setState({count: this.state.count + 1});
			}.bind(this), 10);

			return state;
		},
		render: function() {
			return React.createElement("div", null, "My state is ", this.state.count)
		}
	})

	React.render(React.createElement(ShowState, null), document.getElementById('container4'))
})();