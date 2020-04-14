import React from 'react';
import { BrowserRouter, Route, Switch, NavLink, Link, Redirect } from 'react-router-dom';

import './App.scss';
import AboutPage from './containers/AboutPage';
import HomePage from './containers/HomePage';
import NotFound from './containers/NotFound';
import ContactPage from './containers/ContactPage';
import ProductListPage from './containers/ProductListPage';
import AddEditProductPage from './containers/AddEditProductPage';
import ProductDetailPage from './containers/ProductDetailPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <h2>Nav link</h2>
        <ul className="nav">
          <li>
            <NavLink
              exact
              to="/"
              className="nav__link"
              activeClassName="nav__link--active"
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              className="nav__link"
              activeClassName="nav__link--active"
            >
              About
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className="nav__link"
              activeClassName="nav__link--active"
            >
              Contact
            </NavLink>
          </li>
        </ul>

        <h2>Link</h2>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul> */}

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
    </div>
  );
}

export default App;


// HomePage
//  - Header
//  - Hero
//  - ProductList

// AboutPage
//  - Header
//  - Hero