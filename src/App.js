import React from 'react';
import Todo from './Todo';
import AddTodo from './AddTodo';
import { Paper, List, Container } from '@material-ui/core';
import './App.css';



class App extends React.Component { // props와 state를 이용해 매개변수 처리하기
  constructor(props){ // 매개변수 props 생성자. constructor키워드로 생성
    super(props); // pros 초기화
    this.state = { // item 에 item.id, item.title, item.done 이름과 값 할당
      items :[ 
        {id:"todo0", title:"Todo 1 ", done:true},
        {id:"todo1", title:"Todo 2 ", done:false}, 
      ],
    };
  }
  //add 추가
  add = (item) => {
    const thisItems = this.state.items;
    item.id = "ID-" + thisItems.length; 
    item.done = false;
    thisItems.push(item);
    this.setState({ items: thisItems });
    console.log("items:", this.state.items);
  }
  // delete
  delete = (item) => {
    const thisItems = this.state.items;
    const newItems = thisItems.filter(e => e.id !== item.id);
    this.setState({ items: newItems }, () => {
      console.log("Updated Items: ", this.state.items);
    });
  }

  render() {
    var todoItems = this.state.items.length > 0 && (
      <Paper style={{ margin: 16 }}>
        <List>
          {this.state.items.map((item, idx) => (
            <Todo item={item} key={item.id} delete={this.delete} />
          ))}
        </List>
      </Paper>
    );

    return (
      <div className="App">
        <Container maxWidth="md">
          <AddTodo add={this.add} />
          <div className="TodoList">{todoItems}</div>
        </Container>
      </div>
    );
  }
}

export default App;