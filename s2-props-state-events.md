# Props State and Events 

Component 

Container - Smart component 
- Quản lý, xử lý dữ liệu.
- Không quan tâm render ntn
- Dữ liệu của productList
- Có thể chứa components hoặc container

Component - Dumb component
- Chỉ quan tâm render ntn.
- Không cần biết dữ liệu từ đâu ra.
- Cho gì render cái đó.
- Render standard tags, component con


## Container

HomePage
- Props
- State: posts
- Render
  - Header
  - Banner
  - PostList: posts 
  - Pagination


## Component 
- Header
- Banner
- PostList: posts
- Pagination



## Functional vs Class component

Props 
- Thuộc tính được truyền từ component Cha 
- Immutable (ko thay đổi được)

State 
- Được tạo ra và quản lý bởi component hiện tại
- Mutable (thay đổi được)

Countdown 
  - Props: seconds
  - State: currentSecond
  - Render
    - currentSecond






---------

App


HomePage: Container
- Props 
- State 
- Render 
  - TodoList: todoList

TodoList
- Props: todoList
- State: N/A
- Render: ul > li todo



