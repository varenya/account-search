import React, {Component} from 'react';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import ConnectSearch from './Search';
import ConnectResults from './Results';
import { Provider } from 'react-redux';
import store from './store';


injectTapEventPlugin();

class App extends Component {

	render(){
		return (
			<MuiThemeProvider>
				<div>
					<AppBar title="Altimetrik" />
					<ConnectSearch />
					<ConnectResults />
				</div>
			</MuiThemeProvider>
		);
	}
}

const Main = <Provider store={store}> 
		<App />
	     </Provider>


render( Main ,document.getElementById('app'));
