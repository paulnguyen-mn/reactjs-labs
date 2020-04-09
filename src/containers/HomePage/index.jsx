import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import TodoList from '../../components/TodoList';
import Countdown from '../../components/Countdown';
import './HomePage.css';
import TodoForm from '../../components/TodoForm';
import ProductList from '../../components/ProductList';

class HomePage extends PureComponent {
  constructor(props) {
    super(props);

    console.log('HOME PAGE: constructor');
    this.state = {
      activeTodoId: 1,
      todoList: [
        { id: 1, title: 'Học ko đau đâu nha! :P' },
        { id: 2, title: 'Hk đau chết liền =))' },
      ],

      productList: [
        { id: 1, title: 'Aó thun nam', price: 150000 },
        { id: 2, title: 'Váy đầm xinh', price: 175000 },
        { id: 3, title: 'Nón thời trang', price: 200000 },
      ],

      cart: [
        // {product, quantity}
        // {}
      ],
      cartTotal: 0,

      showProductList: true,
      categories: [],
      products: [],
    };
  }

  async componentDidMount() {
    console.log('HOME PAGE: did mount');
    try {
      const url = 'http://js-post-api.herokuapp.com/api/categories?_page=1&_limit=5';
      const categories = await this.fetchData(url);

      this.setState({ categories });
      console.log(categories);
    } catch (error) {
      console.log('Failed to fetch data: ', error.message);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('HOME PAGE: did update');
  }

  fetchData = async (url) => {
    const response = await fetch(url);
    const responseJSON = await response.json();
    return responseJSON.data;
  }

  handleTodoClick = (todo) => {
    this.setState({ activeTodoId: todo.id });
  };

  handleTodoFormSubmit = (formValues) => {
    console.log('Form submit: ', formValues);
    this.setState(prevState => {
      const newTodoList = [...prevState.todoList];
      const newTodo = {
        id: newTodoList.length + 1, // fake id
        title: formValues.value,
      };
      newTodoList.push(newTodo);

      return {
        todoList: newTodoList,
      };
    })
  };

  handleProductClick = (product) => {
    // console.log({ product });
    // Check cart:
    // If exists, increase quantity
    // Otherwise, add new product to cart
    this.setState(prevState => {
      const newCart = [...prevState.cart];
      const productIndex = newCart.findIndex(x => x.product.id === product.id);

      // Not existed 
      if (productIndex < 0) {
        const cartItem = {
          product,
          quantity: 1,
        };

        newCart.push(cartItem);
      } else {
        // Just increase quantity
        // newCart[productIndex].quantity++;
        newCart[productIndex] = {
          ...newCart[productIndex],
          quantity: newCart[productIndex].quantity + 1,
        };
      }

      const newCartTotal = prevState.cartTotal + product.price;

      return {
        cart: newCart,
        cartTotal: newCartTotal,
      };
    });
  };

  hideProductList = () => {
    this.setState({ showProductList: false });
  };

  handleCategoryChange = async (category) => {
    // fetch products
    try {
      const url = `https://js-post-api.herokuapp.com/api/products?categoryId=${category.id}&_page=1&_limit=12`;
      const products = await this.fetchData(url);

      this.setState({ products });
      console.log({ products });
    } catch (error) {
      console.log('Failed to fetch products: ', error.message);
    }
  };

  render() {
    console.log('HOME PAGE: render');

    const { todoList, activeTodoId, productList, cart, cartTotal } = this.state;

    // Calculate total
    console.log(cart);
    // const cartTotal = cart.reduce(
    //   (total, item) => total + (item.product.price * item.quantity),
    //   0
    // );
    const { showProductList, categories, products } = this.state;

    return (
      <div className="home-page">
        <ul>
          {categories.map(category => (
            <li key={category.id} onClick={() => this.handleCategoryChange(category)}>
              {category.name}
            </li>
          ))}
        </ul>

        <ul>
          {products.map(product => (
            <li key={product.id}>{product.name} - {product.originalPrice}</li>
          ))}
        </ul>



        {/* <button onClick={this.hideProductList}>Hide Product List</button> */}

        {/* {showProductList && (
          <ProductList
            productList={productList}
            onProductClick={this.handleProductClick}
          />
        )} */}

        {/* <p>TOTAL: {cartTotal} VND</p> */}

        {/* <TodoList
          todoList={todoList}
          activeTodoId={activeTodoId}
          onActiveItemChange={this.handleTodoClick}
        /> */}

        {/* <TodoForm onSubmit={this.handleTodoFormSubmit} /> */}

        {/* <Countdown seconds={30} /> */}
      </div>
    );
  }
}

HomePage.propTypes = {

};

export default HomePage;