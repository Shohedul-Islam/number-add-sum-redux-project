import React from 'react';
import './App.css';
import {Provider} from 'react-redux'
import store from './store/index'
import Count from './components/count'
import Control from './components/control'

function App() {
  return (
    <Provider store={store}>
    <div className="App">
     <h1>hello</h1>
     <Count/>
     <Control/>
    </div>
    </Provider>
  );
}

export default App;
