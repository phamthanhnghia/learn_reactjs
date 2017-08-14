class Note extends React.Component{
  constructor (props) {
    super(props);
    this.state = {
    };
  }
  render(){
    return(
      <div className="div-note">
          {this.props.children}
      </div>
    );
  }
}

class List extends React.Component{
  constructor (props) {
    super(props);
    this.themMang = this.themMang.bind(this);
    this.state = {
      mang : ["nghia","nodejs","reactjs"],
      so : 8
    };
  }
  themMang(number){

    //this.setState({mang : this.state.mang.concat(number)});
    //this.setState({mang});
  }
  render(){
    return(
      <div>
        <div id="send"></div>
        {this.state.mang.map((index)=><Note key={index.toString()}>{index}</Note>)}
        <p>{this.state.so}</p>
      </div>
    );
  }
}

class InputDiv extends React.Component{
  constructor (props) {
    super(props);
    this.send = this.send.bind(this);
    this.state = {};
  }
  send(){
    //list.setState({mang : list.state.mang.concat(this.refs.txt.value)});
    //list.setState(mang : list.state.mang.concat(this.refs.txt.value));
    var list = new List();
    list.setState({so : this.refs.txt.value});
    //list.themMang(this.refs.txt.value);
    //list.setState({ mang : list.state.mang.concat(this.refs.txt.value)});
    //console.log(this.refs.txt.value);
  }
  render(){
    return(
      <div>
        <input type="text" ref="txt"/>
        <button onClick={this.send.bind(this)}>Send</button>
      </div>
    );
  }
}
class From extends React.Component{
  constructor(props){
    super(props);
  }
  addbutton(){
    ReactDOM.render(
      <InputDiv/>,document.getElementById("send")
    );
  }
  render(){
    return(
      <div className="div-from">
        <button onClick={this.addbutton}>Thêm</button>
        <List/>
      </div>
    );
  }
}
let element = <From/>;

function run(){
  ReactDOM.render(
    element,
    document.getElementById("root")
  );
}


setInterval(run,1000);
