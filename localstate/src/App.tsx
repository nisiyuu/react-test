import React, { Component } from 'react';

interface AppState{
  count:number
}

//ジェネリクス第一引数にpropsの型を第二引数にstateの型を記載
class App extends Component<{}, AppState>{
  constructor(props:{}) {
    super(props);
    this.state = { count: 0 };//stateの値は直接書き換えられない=>setStateを使う
  }

  increment() {
    //setStateの引数には今回　(prevState,props) => newState　という形式で書く　※今回はpropsはないので省略
    this.setState(prevState => {
      return { count: prevState.count + 1 }//objectを返す
    })
  }

  decrement = () => {
    this.setState(prevState => {
      return { count: prevState.count - 1 }
    })
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        <h1>{count}</h1>
        <button onClick={() => { this.increment() }}>+1</button>
        <button onClick={this.decrement}>-1</button>
      </div>
    )
  }
}

export default App