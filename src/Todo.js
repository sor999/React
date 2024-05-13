import React from 'react';
//2. 매개변수를 활용하는 예제 
class Todo extends React.Component{
    constructor(props){
        super(props);
        this.state = { item: props.item}; // 매개변수 item 의 변수/값을 item에 대입 
    }
    render(){
        return (
            <div className = "Todo">
                <input // 체크박스 type
                    type="checkbox"
                    id={this.state.item.id} // item.id 값을 렌더링하라는 의미(JSX)
                    name={this.state.item.id}
                    checked={this.state.item.done} // item.done 값으로 렌더링하라는 의미 
                />
                <label htmlFor={this.state.item.id}>{this.state.item.title}</label>

            </div>
        );
    }
}

export default Todo;