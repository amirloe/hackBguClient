import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';
// import './App.css';
class MyTextbox extends React.Component {
  constructor(props){
    super(props);
    this.state={
      show:true
    }
  }
   
  render(){
    
    return <div>
      <Alert className='center' variant="success" show={this.state.show}  style={{textAlign:'right'}}> 
    <Alert.Heading>! ZooMate ברוכים הבאים ל </Alert.Heading>
    <h6>?איך לפתוח קבוצת למידה חדשה </h6>
    <p style={{textAlign:'right'}}>
    לחץ על שם הקורס בו אתה מעוניין לפתוח קבוצה חדשה, בחר תאריך ולחץ על הכפתור
    </p>
    <p>
    .open new group 
    </p>
    <p>
    לאחר מכן מלא את הפרטים ולחץ 
    </p>
    <p>
    submit
    </p>
    <hr />
    <h6>?איך להצטרף לקבוצת למידה קיימת</h6>
    <p className="mb-0">
      לחץ על שם הקורס בו אתה מעוניין להצטרף לקבוצה קיימת, בחר תאריך ולאחר מכן בחר באחת הקבוצות מתוך הרשימה
    </p>
    <hr />
    
    <p className="mb-0">
    (: בהצלחה
    </p>

    <div className="d-flex justify-content-end">
            <Button className='bu-5' onClick={() => this.setState({show:false})} variant="outline-success">
              המשך
            </Button>
          </div>


          
  </Alert>
  <div  className='helpbox'>
  {!this.state.show && <Button variant='danger' onClick={()=>this.setState({show:true})}>Help</Button>}
  </div>
</div>};
  
}
  export default MyTextbox;