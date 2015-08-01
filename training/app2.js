(function(){
	var posts = {
		title: 'The big bang theory',
		content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, molestias!',
		comments: ['I love Sheldon','Penny is petty girl','Raj handsome']
	}


	var Post = React.createClass({
		render: function() {
			return <div>
				<h1>Film: {this.props.data.title}</h1>
				<p>Description: {this.props.data.content}</p>
				<h2>Comments</h2>

				<Comment content={this.props.data.comments[0]} />
				<Comment content={this.props.data.comments[1]} />
				<Comment content={this.props.data.comments[2]} />
			</div>
		}
	})

	var Comment = React.createClass({
		render: function() {
			return <div>{this.props.content}</div>
		}
	})

	React.render(<Post data={posts} />, document.getElementById('container3'));
})();