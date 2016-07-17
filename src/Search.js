import React, {Component} from 'react';
import { render } from 'react-dom';
import TextField from 'material-ui/TextField';
import { connect } from 'react-redux';
import { searchText } from './actions';


/*
 *
 * Higher Order function that takes in a component and adds functionality to validate input field
 *
 */


function withValidation(TextComponent){

	return React.createClass({

		getInitialState : function(){
			return { search_text : "" , error_text : ""};
		},

		handleTextChange : function(e){
			if(this.validateAccount(e.target.value)){
				console.log('Valid');
				this.setState({search_text:e.target.value,error_text:""});
			}
			else{
				this.setState({search_text:e.target.value,error_text:"Invalid Account Number"});
			}
		},

		handleEnter : function(e){
			if(e.keyCode == 13){
				let text = this.state.search_text.trim();
				console.log("text",text);
				if(!text){
					return;
				}
				const { dispatch } = this.props;
				dispatch(searchText(text));
			}
		},

		validateAccount(input){

			let regex = /^[0-9]+$/;

			console.log("REGEX",input.match(regex));
			console.log("Length",input.length);

			return ( input.match(regex) && input.length >= 10 );
		},

		render : function(){
			let error = this.state.error_text || false;
			if(error){
				return (
					<div>
						<label htmlFor='search'> Account Number </label>
						<TextComponent hintText="Enter Account Number" value={this.state.search_text} errorText={this.state.error_text} id={'search'} onChange={this.handleTextChange} />
					</div>
				);
			}
			else{
				return (
					<div>
						<label htmlFor='search'> Account Number </label>
						<TextComponent hintText="Enter Account Number" value={this.state.search_text} id={'search'} onChange={this.handleTextChange} onKeyDown={this.handleEnter}/>
					</div>
				);
			}
		}
	});

}


const SearchText = withValidation(TextField);

const ConnectSearch = connect()(SearchText);

export default ConnectSearch;

