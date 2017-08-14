function getName(name){
  alert(name);
};
var ThanhNghia = React.createClass({
  getInitialState(){
    return {hocvien : parseInt(this.props.hocvien)};
  },
  addstuden(){
    this.state.hocvien = this.state.hocvien +1;
    this.setState(this.state);
  },
  render : function(){
    return(
      <div>
          <h1>Nghia Pham {this.props.ten}</h1>
          <p>{this.props.children}</p>
          <Loi/>
          <p>{this.state.hocvien}</p>
          <button onClick={this.addstuden}>Lên nào</button>
      </div>
    );
  }
});
var Loi = React.createClass({
  render: function(){
    return (
      <h3>chung tay</h3>
    );
  }
});

var InputTag = React.createClass({
  show(){
    var text = this.refs.txt.value;
    alert(text);
  },
  render (){
    return(
      <div>
        <input type="text" ref="txt"/>
        <button onClick={this.show}>Hiển thị</button>
      </div>
    );
  }
});
function tick(){
  const element =
  <div>
    <InputTag/>
    <ThanhNghia ten="Nghia" hocvien="10">Môn học nhập môn</ThanhNghia>
    <h1>Nghia {new Date().toLocaleTimeString()}</h1>
  </div>;

  ReactDOM.render(
    element,
    document.getElementById('root')
  );
};


setInterval(tick, 10);
