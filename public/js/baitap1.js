var Hello = React.createClass({
  getInitialState(){
    return{
      mang : ["aaa","bbb","ccc"]
    }
  },
  render(){
    return (
      <lu>
        {this.state.mang.map((hello)=><li key={hello.toString()}>{hello}</li>)}
      </lu>
    );
  }
});

const element = <Hello/>
ReactDOM.render(
  element,
  document.getElementById("root")
);
