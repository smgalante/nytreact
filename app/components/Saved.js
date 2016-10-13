// Include React and React-Router dependencies
var React = require('react');
var Router = require('react-router')

// Include the Helper (for the saved recall)
var helpers = require('../utils/helpers');

// Create the Main component
var Main = React.createClass({

	getInitialState: function(){
		return {
			// Code
		}
	},

	componentDidMount: function(){

		// Code

	},

	// /*This code handles the sending of the search terms to the parent Search component*/
	handleClick: function(item, event){
		console.log("CLICKED");
		console.log(item);

		// Delete the list!

			// Get the revised list!


	},

	render: function(){

		if (this.state.savedArticles == "") {
			return(

				<li className="list-group-item">

					<h3>
					  	<span><em>Save your first article...</em></span>
					</h3>

			  	</li>

			)
		}

		else {

			// Show saved articles

		}


		return(
			<div className="main-container">
				<div className="row">
					<div className="col-lg-12">

						<div className="panel panel-primary">
							<div className="panel-heading">
								<h1 className="panel-title"><strong><i className="fa fa-download" aria-hidden="true"></i> Saved Articles</strong></h1>
							</div>
							<div className="panel-body">
								<ul className="list-group">
								   {/* this is a comment, display articles
										 {articles}
										 */}
								</ul>
							</div>
						</div>

					</div>
				</div>


			</div>

		)
	}
});

// Export the module back to the route
module.exports = Main;
