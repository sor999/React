import React from 'react';
import Hello from './Hello';
import Todo from './Todo';
import './App.css';

class App extends React.Component { // props와 state를 이용해 매개변수 처리하기
  constructor(props){ // 매개변수 props 생성자. constructor키워드로 생성
    super(props); // pros 초기화
    this.state = { // item 에 item.id, item.title, item.done 이름과 값 할당
      item :{id:0, title:"Hello World 1 ", done:true},
    };
  }

  render(){
    return ( // 매개변수 item에 변수명/ 값 전달 
      <div className="App">
        <Todo item={this.state.item}/> 
      </div> // 컴포넌트 불러올 때 파일 이름 써주면 됨(Todo)
    );
  }
}

export default App;