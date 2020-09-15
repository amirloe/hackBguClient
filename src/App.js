
import React from 'react';
import Calendar from 'react-calendar';
import GroupInfo from './Components/GroupInfo';
import OpenGroupForm from './Components/OpenGroupForm';

import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './newim.jpeg';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      id:0,
      date: new Date(),
      show:false,
      showhours:false,
      showForm:false,
      courseName:"",
      courses:["לוגיקה ותורת הקבוצות","אלגברה","חדווא 1","מבוא למדעי המחשב"],
      rows:[],
      about:false,
    }
  }
  

  onChange = date => {
    let x = new Date(new Date(date).setHours(6));
    this.setState({ date:x })
  }


//3. render the scheduler component, mind that the Scheduler component should be placed in a DragDropContext(father or ancestor).
setNewRow=(maxNum,groupLeader,courseName,groupDescription,zoomLink,date,time)=>{
  var row={id:this.state.id,maxNum:maxNum,groupSize:1,groupLeader:groupLeader,courseName:courseName,Description:groupDescription,startTime:time,date:date,zoomUrl:zoomLink}
  var newRow=this.state.rows.concat(row)
  alert("Group created!")
   this.setState({rows:newRow,id:this.state.id+1})
   this.setState({ showhours:true , showForm:false})
}

render(){
 
  const showH =this.state.showhours?
  <div className='mu-2'>

  <GroupInfo groups={this.state.rows.filter((x)=>(x.date===this.state.date)&&(x.courseName===this.state.courseName))}></GroupInfo>
  <Button className='m-4' onClick={()=>{this.setState({showhours:false,showForm:true})}}>Open new Group</Button>
  </div>
: this.state.showForm?
<OpenGroupForm courseName={this.state.courseName} date={this.state.date} setNewRow={this.setNewRow}></OpenGroupForm>
:
<h2></h2>

var chooseText = !this.state.showhours && !this.state.showForm ? " Choose your date (pun intended) ;)" : "";

var buttons = this.state.courses.map(
  (name,x)=><Button key={x} className='m-3'  onClick={()=>this.setState({show:true,courseName:name})}>{name}</Button>)

  const x = this.state.show?  <main>
    <h5 className="choice-text">{chooseText}</h5>
    <div>
                              <Calendar
                            className="c1"
                            onChange={this.onChange}
                            value={this.state.date}
                            calendarType="Hebrew"
                            onClickDay={()=>{this.setState({showhours:true})}}
                            />
                            {showH}
                            </div>
                            <Button className="button-center mu-5" onClick={()=>this.setState({show:false, showhours:false , showForm:false})}>back</Button>
                            
                            </main> 
                            : <div>
                            {buttons}
                              </div>;

  return (
    <main className='app'>


      <img src={logo} className='logo' alt="Zoomate" ></img>
      <div className='center'>
      {x}
   </div>

    </main>
  );

  }
}

export default App;
