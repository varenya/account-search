import _ from 'underscore';
function search(state = { results : [] },action){
	switch(action.type){
		case 'SEARCH':
			return {...state, results : filter(state.results,action.text) };
		default:
			return state;
	}
}

function filter(results,text){
	return _.filter(results,function(result){
		return result['accountNo'].toString().indexOf(text) != -1;
	});
}

export default search;
