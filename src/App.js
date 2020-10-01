import React from 'react';
// import styles from './App.module.css';
import {Switch, Route} from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Book from './Components/Book/Book';
import routes from './Components/routes';

function App() {
  return (
    <Layout>
      <Switch>
       <Route path={routes.book} exact component={Book} />
      </Switch>
    </Layout>
  );
}

export default App;
