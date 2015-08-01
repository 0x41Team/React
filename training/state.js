(function(){
	var ShowState = React.createClass({
		getInitialState: function() {
			var state = {count: 1}
			setInterval(function() {
				this.setState({count: this.state.count + 1});
			}.bind(this), 10);

			return state;
		},
		render: function() {
			return <div>My state is {this.state.count}</div>
		}
	})

	React.render(<ShowState />, document.getElementById('container4'))
})();