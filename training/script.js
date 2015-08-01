var Hello = React.createClass({
	display: 'FlashJS',
	render: function() {
		return React.DOM.div(null,
			React.DOM.h1(null,
				"Hello at ", this.props.now)
			)
	}
})


React.render(<Hello now = "The big bang theory" />, document.getElementById('container2'));