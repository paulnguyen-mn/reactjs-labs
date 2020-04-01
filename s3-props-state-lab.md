# Props state lab


Yêu cầu: 
- Hiện tại mình có render todo list rồi. 
- Khi click thì remove item đó khỏi list. 

Giờ đổi yêu cầu 
Level 1: 
Đầu tiên, các todos đều là chữ màu đen. 
Khi click chọn một todo, thì biến nó thành active item, đơn giản đổi màu chữ thành deeppink 
Tại một thời điểm chỉ có một active item.

TodoList
- Props: 
- State: activeTodoId
- Render: id === active --> pink : black

HomePage
- State: activeTodoId
- Render
  - TodoList:
    - props: todoList 
    - props: activeTodoId
    - props: onActiveItemChange

HomePage: 1
TodoList: 1
TodoList: 2
HomePage: 3 --> TodoList: active: 3

--> Controlled component
- Không dùng state
- Chỉ phụ thuộc duy nhất vào props của thằng cha
- Dùng props function (callback)



Level 2: 
Mới vào, từ HomePage truyền thêm một props activeTodoId để chỉ định todo nào đang active. 
Khi user click item khác, thì chuyển active item thành item mới. 

Happy coding! ❤ 



NewArrivals
  - Props:
  - State: categoryList, activeCategoryId
  - Render
    - CategoryMenu
    - ProductList

CategoryMenu:
  - Props:
    - categoryList
    - activeCategoryId 
    - onSelectedItemChange
  - State: 
  - Render



TodoForm
  - Props: N/A
  - State: todoValue
  - Render: 
    - Input: change (formik, redux form) 
      (controlled component)






