# S6 - Nested routing


Products

- List: /products
- Add : /products/add,
- Edit: /products/:productId/edit, 
- Detail: /products/:productId

https://abc.com/products --> show list of products 
https://abc.com/products/1234 --> show product detail page

Product detail 

- /products/:productId/description: 
- /products/:productId/additional:
- /products/:productId/reviews: 

--> Nested routing

- Share UI
- Split component into smaller pieces



Passing data between nested routing 
- React Context API: built-in features of React
- Redux: setup --> understand flow of redux 


NewArrivals (single filter)
  - Menu
  - ProductList 

ProductSearch
  - PriceRange (react-slider): min-max price 
  - Sorting: 
  - Limit
  - Page
  - ProductList 

ProductSearch 

```js
class ProductSearch extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      filters: { 
        _page: 1, 
        _limit: 12, 
        _sort: 'originalPrice',
        _order: 'asc',
        salePrice_gte: 1000000,
        salePrice_lte: 2000000,
      },
    }
  }

  componentDidMount() {
    productApi.getAll(this.state.filters);
  }

  handlePageChange = (newPage) => {
    const newFilters = {
      ...prevState.filters,
      _page: newPage,
    }
  }
}
```