(function(){
	var Hello = React.createClass({
		render: function() {
			return <div>
						<h1>Hello {this.props.now}</h1>
					</div>
		}
	})
	React.render(<Hello now = {new Date().toString()} />, document.getElementById('container'));
})();