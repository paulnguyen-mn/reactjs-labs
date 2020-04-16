import React, { PureComponent } from 'react';
import { BrowserRouter, Route, Switch, NavLink, Link, Redirect } from 'react-router-dom';

import './App.scss';
import AboutPage from './containers/AboutPage';
import HomePage from './containers/HomePage';
import NotFound from './containers/NotFound';
import ContactPage from './containers/ContactPage';
import ProductListPage from './containers/ProductListPage';
import AddEditProductPage from './containers/AddEditProductPage';
import ProductDetailPage from './containers/ProductDetailPage';
import GlobalContext from './contexts/globalContext';

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      initialState: {
        loggedInUser: {},
        cart: {},
        theme: 'light',
        setTheme: (newTheme) => {
          // Only allow theme is either light or dark
          if (!['light', 'dark'].includes(newTheme)) return;

          this.setState(prevState => ({
            initialState: {
              ...prevState.initialState,
              theme: newTheme
            }
          }));
        }
      },
    }
  }

  handleClick = () => {
    this.setState(prevState => ({
      initialState: {
        ...prevState.initialState,
        loggedInUser: {
          id: 1,
          name: 'Hau Nguyen',
        }
      }
    }))
  }

  render() {
    const { initialState } = this.state;

    return (
      <div className="App">
        <button onClick={this.handleClick}>Change context value</button>

        <GlobalContext.Provider value={initialState}>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/about" component={AboutPage} />
              <Route path="/contact" component={ContactPage} />

              <Route exact path="/products" component={ProductListPage} />
              <Route path="/products/add" component={AddEditProductPage} />
              <Route path="/products/:productId/edit" component={AddEditProductPage} />
              <Route path="/products/:productId" component={ProductDetailPage} />

              <Redirect from="/reactjs" to="/" />
              <Redirect from="/posts/:postId" to="/new-path/posts/:postId" />
              <Route component={NotFound} />
            </Switch>
          </BrowserRouter>
        </GlobalContext.Provider>
      </div>
    );
  }
}

export default App;


// HomePage
//  - Header
//  - Hero
//  - ProductList

// AboutPage
//  - Header
//  - Hero