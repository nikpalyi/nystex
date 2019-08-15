import React from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Routes />
      </Router>
    </Provider>
  );
};

export default App;
