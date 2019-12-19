import React, { Component } from "react";

export default class todo extends Component {
  state = {
    task: "",
    todotab: [],
    
  };

  handleChange = event => {
    this.setState({
      task: event.target.value
    });
  };

  handleClick = () => {
    this.setState({
      todotab: [...this.state.todotab, {input:this.state.task}],
      task : ""
    }
    )
  };
  completee =(i) =>{
    this.setState({
      todotab:this.state.todotab.map((el,z)=>z===i? {...el,complete : !el.complete}:el)
})
}

  delete = (i) => {
    this.setState({
      todotab:this.state.todotab.filter((el,z)=> z!==i)
    })
  };

  render() {
    return (
      <div>
        <div className="container container-style">
          <div className="row">
            <div className="col-8"></div>
            <div className="col-4">
              <h1>To-Do App!</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-8"></div>
            <div className="col-4">
              <h5>Add New To-Do</h5>
            </div>
          </div>
          <form className="row">
            <div className="form-group col-12">
              <input
                type="text"
                className="form-control"
                id="input"
                placeholder="Enter new task"
                onChange={this.handleChange}
                value={this.state.task}
              />
            </div>
          </form>
          <div className="row">
            <div className="col-8"></div>
            <div className=" col-4">
              <button
                type="button"
                className="btn btn-primary"
                id="addbtn"
                onClick={this.handleClick}>
                Add
              </button>
            </div>
          </div>
        </div>

        <div className="txt">
          <h1>Let's get some work done!</h1>
        </div>
        <div className="container">
          <ul className="myul">
            {this.state.todotab.map((el,i) => (
              <li>
                <button type="button" className="btn btn-outline-primary" onClick={()=>this.completee(i)}>
                  {el.complete ? 'Undo':'Complete'}
                </button>
                <button type="button" className="btn btn-outline-danger" onClick={()=>this.delete(i)}>
                  Delete
                </button>
                <span style = {{textDecoration : el.complete? 'line-through' : 'none'}}>{el.input}</span>
            
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
