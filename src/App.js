import React, { PureComponent } from 'react';
import { BrowserRouter, Route, Switch, NavLink, Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './App.scss';
import AboutPage from './containers/AboutPage';
import HomePage from './containers/HomePage';
import NotFound from './containers/NotFound';
import ContactPage from './containers/ContactPage';
import ProductListPage from './containers/ProductListPage';
import AddEditProductPage from './containers/AddEditProductPage';
import ProductDetailPage from './containers/ProductDetailPage';
import GlobalContext from './contexts/globalContext';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { increaseCounter, decreaseCounter, increaseCounterAsync } from './actions/counter';
import { addHero, setActiveHero, getHeroList } from './actions/hero';

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

  componentDidMount() {
    this.props.getHeroList();
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

  handleIncreaseClick = () => {
    // this.props.increaseCounter();
    this.props.increaseCounterAsync();
  }

  handleDecreaseClick = () => {
    this.props.decreaseCounter();
  }

  handleAddHeroClick = () => {
    const randomId = 1000 + Math.trunc(Math.random() * 9000);
    const newHero = {
      id: randomId,
      name: 'Thor',
      power: randomId,
    };
    this.props.addHero(newHero);
  }

  handleHeroClick = (hero) => {
    this.props.setActiveHero(hero);
  }

  render() {
    const { heroList, heroLoading, heroError, activeHero, count } = this.props;
    console.log('REDUX State: ', { heroList, activeHero, count });

    // const { initialState } = this.state;


    return (
      <div className="App">
        {/* <h1>COUNTER: {count}</h1>
        <button onClick={this.handleDecreaseClick}>Decrease</button>
        <button onClick={this.handleIncreaseClick}>Increase</button>
        <button onClick={this.handleAddHeroClick}>Add hero</button>

        {heroLoading && <div>Loading ...</div>}
        {heroError && <p className="error-message">{heroError}</p>}

        <ul>
          {heroList.map(hero => {
            const heroClasses = classnames({
              'hero-item': true,
              active: hero.id === activeHero.id,
            });

            return (
              <li
                key={hero.id}
                className={heroClasses}
                onClick={() => this.handleHeroClick(hero)}
              >
                {hero.name} - {hero.power}
              </li>
            )
          })}
        </ul> */}


        {/* <button onClick={this.handleClick}>Change context value</button> */}

        <GlobalContext.Provider value={{}}>
          <BrowserRouter>
            <Link to="/">Go back to Home</Link>

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

App.propTypes = {
  heroList: PropTypes.array.isRequired,
  heroLoading: PropTypes.bool.isRequired,
  heroError: PropTypes.string.isRequired,
  activeHero: PropTypes.object.isRequired,
  count: PropTypes.number.isRequired,

  increaseCounter: PropTypes.func.isRequired,
  decreaseCounter: PropTypes.func.isRequired,
  addHero: PropTypes.func.isRequired,
  setActiveHero: PropTypes.func.isRequired,
  increaseCounterAsync: PropTypes.func.isRequired,
  getHeroList: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  heroList: state.hero.list,
  heroLoading: state.hero.loading,
  heroError: state.hero.error,
  activeHero: state.hero.activeHero,
  count: state.counter,
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    increaseCounter,
    decreaseCounter,
    addHero,
    setActiveHero,
    increaseCounterAsync,
    getHeroList,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

// - HOC
// - withRouter
// - withTranslation
// - ...


// HomePage
//  - Header
//  - Hero
//  - ProductList

// AboutPage
//  - Header
//  - Hero