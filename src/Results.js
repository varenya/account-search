import React, {Component} from 'react';
import {List, ListItem} from 'material-ui/List';
import { connect } from 'react-redux';
import _ from 'underscore';

class SearchResults extends Component {

	constructor(props){
		super(props);
		this.searchResults = this.searchResults.bind(this);
	}

	searchResults(){
		const { results } = this.props;
		return _.map(results,function(result){
			//let text = result.name + "    " + result.accountNo;
			let text = `Name : ${result.name}         Account Number : ${result.accountNo}`;
			return ( <ListItem primaryText={text} /> );
		});
	}
	render(){
		return (
			<div>
				<List>
					{this.searchResults()}
				</List>
			</div>
		)
	}
}

function mapStatetoProps(state){
	return state;
}

const ConnectResults = connect(mapStatetoProps)(SearchResults);

export default ConnectResults;
