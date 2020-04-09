import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class ProductList extends PureComponent {
  componentWillUnmount() {
    console.log('PRODUCT LIST: will unmount');
  }

  handleProductClick = (product) => {
    const { onProductClick } = this.props;
    if (onProductClick) {
      onProductClick(product);
    }
  };

  render() {
    const { productList } = this.props;

    return (
      <ul>
        {productList.map(product => {
          return (
            <li
              key={product.id}
              onClick={() => this.handleProductClick(product)}
            >
              {product.title} - {product.price}
            </li>
          );
        })}
      </ul>
    );
  }
}

ProductList.propTypes = {
  productList: PropTypes.array,
  onProductClick: PropTypes.func,
};

ProductList.defaultProps = {
  productList: [],
  onProductClick: null,
};

export default ProductList;