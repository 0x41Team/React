(function(){
	
var posts = {
	title: 'The big bang theory',
	description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, accusamus.',
	comments: ['Sheldon','Penny']
}


var Post = React.createClass({
	render: function() {
		return <div>
					<h1>{this.props.data.title}</h1>
					<p>{this.props.data.description}</p>
					<h3>Comments</h3>

					{this.props.data.comments.map(function(b) {
						return <Comment content={b} />
					})}
				</div>
	}
})

var Comment = React.createClass({
	render: function() {
		return <ul><li>{this.props.content}</li></ul>
	}
})

React.render(<Post data={posts}/>, document.getElementById('container3'))

})();