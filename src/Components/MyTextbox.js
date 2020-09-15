import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
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
    
    return <Alert variant="success" show={this.state.show}> 
  <Alert.Heading>! ZooMate ברוך הבא ל </Alert.Heading>
  <h6>?איך לפתוח קבוצת למידה חדשה </h6>
  <p>
  לחץ על שם הקורס בו אתה מעוניין לפתוח קבוצה חדשה, בחר תאריך ולחץ על הכפתור
   .open ne group 
   לאחר מכן מלא את הפרטים ולחץ 
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
          <Button onClick={() => this.setState({show:false})} variant="outline-success">
            המשך
          </Button>
        </div>
</Alert>};
  
}
  export default MyTextbox;