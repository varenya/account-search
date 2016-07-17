import { createStore } from 'redux';
import search from './reducers';


const initialState = {
	results : [
		{name: 'test1' , accountNo : 1000213010},
		{name: 'test2' , accountNo : 1000213011},
		{name: 'test3' , accountNo : 1000213012},
		{name: 'test4' , accountNo : 1000213013},
		{name: 'test5' , accountNo : 1000213014},
		{name: 'test6' , accountNo : 1000213015},
		{name: 'test7' , accountNo : 1000213016},
		{name: 'test8' , accountNo : 1000213017},
		{name: 'test9' , accountNo : 1000213018},
		{name: 'test10' , accountNo : 1000213019},
		{name: 'test11' , accountNo : 1000213020},
		{name: 'test12' , accountNo : 1000213021},
		{name: 'test13' , accountNo : 1000213022},
		{name: 'test14' , accountNo : 1000213023},
		{name: 'test15' , accountNo : 1000213024},
		{name: 'test16' , accountNo : 1000213025},
		{name: 'test17' , accountNo : 1000213026},
		{name: 'test18' , accountNo : 1000213027},
		{name: 'test19' , accountNo : 1000213028},
		{name: 'test20' , accountNo : 1000213029},
		{name: 'test21' , accountNo : 1000213030},
		{name: 'test22' , accountNo : 1000213031},
		{name: 'test23' , accountNo : 1000213032},
		{name: 'test24' , accountNo : 1000213033},
		{name: 'test25' , accountNo : 1000213034},
	]
}
let store = createStore(search,initialState);

export default store;


