import React, { PureComponent, Suspense } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect, NavLink } from 'react-router-dom';
import NotFound from '../NotFound';
import GlobalContext from '../../contexts/globalContext';
import { withUnloadConfirmation } from '../../hocs/withUnloadConfirmation';

// import Description from '../../components/Product/Description';
// import Information from '../../components/Product/Information';
// import Reviews from '../../components/Product/Reviews';

// Lazy load: https://reactjs.org/docs/code-splitting.html#reactlazy
const Description = React.lazy(() => import('../../components/Product/Description'));
const Information = React.lazy(() => import('../../components/Product/Information'));
const Reviews = React.lazy(() => import('../../components/Product/Reviews'));

class ProductDetailPage extends PureComponent {
  handleChangeThemeClick = () => {
    if (!this.context.setTheme) return;

    this.context.setTheme('dark');
  }

  // Solution 1
  // static contextType = GlobalContext;
  render() {
    const { match, power } = this.props;
    // console.log(match);
    console.log('Product detail - power: ', power);

    return (
      <div className="product">
        <h1>Product detail page</h1>

        <button onClick={this.handleChangeThemeClick}>Set theme to dark</button>

        <section>
          Product details
        </section>

        <ul className="nav">
          <li>
            <NavLink
              exact
              to={`${match.url}/description`}
              className="nav__link"
              activeClassName="nav__link--active"
            >
              Description
            </NavLink>
          </li>

          <li>
            <NavLink
              to={`${match.url}/information`}
              className="nav__link"
              activeClassName="nav__link--active"
            >
              Additional Information
            </NavLink>
          </li>

          <li>
            <NavLink
              to={`${match.url}/reviews`}
              className="nav__link"
              activeClassName="nav__link--active"
            >
              Reviews
            </NavLink>
          </li>
        </ul>

        <section className="product__tab-content">
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route path="/products/:productId/description" component={Description} />
              <Route path="/products/:productId/information" component={Information} />
              <Route path="/products/:productId/reviews" component={Reviews} />

              <Redirect from="/products/:productId" to="/products/:productId/description" />
              <Route component={NotFound} />
            </Switch>
          </Suspense>
        </section>
      </div>
    );
  }
}

// Solution 2
ProductDetailPage.contextType = GlobalContext;

ProductDetailPage.propTypes = {
  match: PropTypes.object.isRequired,
  power: PropTypes.number,
};

export default withUnloadConfirmation(ProductDetailPage);