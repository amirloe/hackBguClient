
import React from 'react';
import Calendar from 'react-calendar';
import BryntumScheduler from './Components/BryntumScheduler';
import GroupInfo from './Components/GroupInfo';
import OpenGroupForm from './Components/OpenGroupForm';

import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './zoomate.jpeg';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      date: new Date(),
      show:false,
      showhours:false,
      courses:["לוגיקה ותורת הקבוצות","אלגברה","חדווא 1","מבוא למדעי המחשב"]
    }
  }
  

  onChange = date => {
    let x = new Date(new Date(date).setHours(6));
    this.setState({ date:x })
  }


//3. render the scheduler component, mind that the Scheduler component should be placed in a DragDropContext(father or ancestor).


render(){
 
  const showH =this.state.showhours?
  <div className='mu-2'>
  <GroupInfo groups={[{id:123,maxNum:5,groupSize:2,courseName:"חדווא",Description:"בואו לסבול איתנו",startTime:new Date(2020,9,9,12),zoomUrl:"zoom.com"},
  {id:123,maxNum:5,groupSize:2,courseName:"חדווא",Description:"בואו לסבול איתנו",startTime:new Date(2020,9,9,12),zoomUrl:"zoom.com"}]}></GroupInfo>
  <Button className='mx-auto'>Open new Group</Button>
  </div>
:
<h1>Choose day please</h1>

var buttons = this.state.courses.map(
  (name,x)=><Button key={x} className='m-3'  onClick={()=>this.setState({show:true})}>{name}</Button>)

  const x = this.state.show?  <div>  
                              <Calendar
                            className="c1"
                            onChange={this.onChange}
                            value={this.state.date}
                            calendarType="Hebrew"
                            onClickDay={()=>{this.setState({showhours:true})}}
                            />
                            {showH}
                          <Button className="text-center" onClick={()=>this.setState({show:false, showhours:false})}>back</Button>
                            </div> 
                            : <div>
                            {buttons}
                              </div>;

  return (
    <main>
      <OpenGroupForm></OpenGroupForm>


        <img src={logo} className='center' alt="Zoomate" ></img>
      <div className='center'>
      <h1>Zoomate 1.0</h1>
      {x}
   </div>

    </main>
  );

  }
}

export default App;
