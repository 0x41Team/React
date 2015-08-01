(function(){
	var posts = {
		title: 'The big bang theory',
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, natus.',
		comments: ['Penny is crazy','Sheldon genius','Raj stupid']
	}

	var Post = React.createClass({
		render: function() {
			return <div>
						<h1 className="well text-center">Flim: {this.props.data.title}</h1>
						<p>Description: {this.props.data.description}</p>
						<h4>Comment</h4>

						<Comment content={this.props.data.comments[0]} />
						<Comment content={this.props.data.comments[1]} />
						<Comment content={this.props.data.comments[2]} />


						{this.props.data.comments.map(function(comment) {
							return <Comment content = {comment} />
						})}
					</div>
		}
	})

	var Comment = React.createClass({
		render: function() {
			return <ul><li>{this.props.content}</li></ul>
		}
	})

	React.render(<Post data={posts} />, document.getElementById('container3'));
})();