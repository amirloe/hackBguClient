(this["webpackJsonpbgu-client"]=this["webpackJsonpbgu-client"]||[]).push([[0],{23:function(e,t,a){e.exports=a.p+"static/media/zoomate.e431bd55.jpeg"},25:function(e,t,a){e.exports=a(36)},30:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(12),l=a.n(o),s=(a(30),a(8)),c=a(9),i=a(11),u=a(10),m=a(24),h=a(22),p=a(7),d=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){return Object(s.a)(this,a),t.call(this,e)}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props.groups.map((function(e,t){var a=e.groupSize<e.maxNum?"success":"danger",n=e.zoomUrl.startsWith("http")?e.zoomUrl:"http://"+e.zoomUrl;return r.a.createElement("tr",{key:t},r.a.createElement("td",null,e.id),r.a.createElement("td",null,e.groupLeader),r.a.createElement("td",null,e.startTime),r.a.createElement("td",null,e.Description),r.a.createElement("td",null,r.a.createElement("a",{href:n,target:"_blank"},"Zoom Link")),r.a.createElement("td",null,r.a.createElement(p.a,{variant:a,disabled:e.groupSize>=e.maxNum},"click here")))}));return r.a.createElement(h.a,{striped:!0,bordered:!0,hover:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"#"),r.a.createElement("th",null,"Group Leader"),r.a.createElement("th",null,"Time"),r.a.createElement("th",null,"Description"),r.a.createElement("th",null,"Zoom Url"),r.a.createElement("th",null,"Join"))),r.a.createElement("tbody",null,e))}}]),a}(r.a.Component),E=a(6),g=a(13),w=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).maxChange=function(e){n.setState({maxNum:e.target.value})},n.leaderChange=function(e){n.setState({groupLeader:e.target.value})},n.zoomLinkChange=function(e){n.setState({zoomLink:e.target.value})},n.groupDescriptionChange=function(e){n.setState({description:e.target.value})},n.courseNameChange=function(e){n.setState({courseName:e.target.value})},n.dateChange=function(e){n.setState({date:e.target.value})},n.timeChange=function(e){n.setState({time:e.target.value})},n.submitFunc=function(){n.props.setNewRow(n.state.maxNum,n.state.groupLeader,n.state.courseName,n.state.description,n.state.zoomLink,n.state.date,n.state.time)},n.state={maxNum:1,groupSize:1,groupLeader:"",zoomLink:"",description:"",courseName:n.props.courseName,date:n.props.date,time:""},n}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(E.a,{className:!0,onSubmit:function(e){e.preventDefault()}},r.a.createElement(E.a.Row,null,r.a.createElement(E.a.Group,{controlId:"CourseName"},r.a.createElement(E.a.Label,null,"Course Name"),r.a.createElement(E.a.Control,{value:this.props.courseName,disabled:!0,onChange:this.courseNameChange})),r.a.createElement(E.a.Group,{controlId:"GroupLeader"},r.a.createElement(E.a.Label,null,"Group Leader"),r.a.createElement(E.a.Control,{placeholder:"Israel Israeli",onChange:this.leaderChange})),r.a.createElement(E.a.Group,{as:g.a,controlId:"ZoomLink"},r.a.createElement(E.a.Label,null,"Zoom Link"),r.a.createElement(E.a.Control,{type:"link",placeholder:"Enter URL",onChange:this.zoomLinkChange}))),r.a.createElement(E.a.Group,{as:g.a,controlId:"GroupDescription"},r.a.createElement(E.a.Label,null,"Group description"),r.a.createElement(E.a.Control,{type:"text",placeholder:"what's your group goal? ",onChange:this.groupDescriptionChange})),r.a.createElement(E.a.Row,null,r.a.createElement(E.a.Group,{as:g.a,controlId:"Date"},r.a.createElement(E.a.Label,null,"Date"),r.a.createElement(E.a.Control,{value:this.props.date.toDateString(),disabled:!0,onChange:this.dateChange})),r.a.createElement(E.a.Group,{as:g.a,controlId:"MettingStartTime"},r.a.createElement(E.a.Label,null,"Metting Start Time"),r.a.createElement(E.a.Control,{type:"time",onChange:this.timeChange}))),r.a.createElement(E.a.Row,null,r.a.createElement(E.a.Group,{controlId:"Max participants"},r.a.createElement(E.a.Label,null,"Max participants"),r.a.createElement(E.a.Control,{placeholder:"99",onChange:this.maxChange}))),r.a.createElement(p.a,{variant:"info",size:"sm",type:"submit",onClick:this.submitFunc},"Submit"))}}]),a}(r.a.Component),b=a(19),v=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={show:!0},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(b.a,{className:"center",variant:"success",show:this.state.show,style:{textAlign:"right"}},r.a.createElement(b.a.Heading,null,"! Zoomate \u05d1\u05e8\u05d5\u05db\u05d9\u05dd \u05d4\u05d1\u05d0\u05d9\u05dd \u05dc "),r.a.createElement("h6",null,"?\u05d0\u05d9\u05da \u05dc\u05e4\u05ea\u05d5\u05d7 \u05e7\u05d1\u05d5\u05e6\u05ea \u05dc\u05de\u05d9\u05d3\u05d4 \u05d7\u05d3\u05e9\u05d4 "),r.a.createElement("p",{style:{textAlign:"right"}},"\u05dc\u05d7\u05e5 \u05e2\u05dc \u05e9\u05dd \u05d4\u05e7\u05d5\u05e8\u05e1 \u05d1\u05d5 \u05d0\u05ea\u05d4 \u05de\u05e2\u05d5\u05e0\u05d9\u05d9\u05df \u05dc\u05e4\u05ea\u05d5\u05d7 \u05e7\u05d1\u05d5\u05e6\u05d4 \u05d7\u05d3\u05e9\u05d4, \u05d1\u05d7\u05e8 \u05ea\u05d0\u05e8\u05d9\u05da \u05d5\u05dc\u05d7\u05e5 \u05e2\u05dc \u05d4\u05db\u05e4\u05ea\u05d5\u05e8"),r.a.createElement("p",null,".open new group"),r.a.createElement("p",null,"\u05dc\u05d0\u05d7\u05e8 \u05de\u05db\u05df \u05de\u05dc\u05d0 \u05d0\u05ea \u05d4\u05e4\u05e8\u05d8\u05d9\u05dd \u05d5\u05dc\u05d7\u05e5"),r.a.createElement("p",null,"submit"),r.a.createElement("hr",null),r.a.createElement("h6",null,"?\u05d0\u05d9\u05da \u05dc\u05d4\u05e6\u05d8\u05e8\u05e3 \u05dc\u05e7\u05d1\u05d5\u05e6\u05ea \u05dc\u05de\u05d9\u05d3\u05d4 \u05e7\u05d9\u05d9\u05de\u05ea"),r.a.createElement("p",{className:"mb-0"},"\u05dc\u05d7\u05e5 \u05e2\u05dc \u05e9\u05dd \u05d4\u05e7\u05d5\u05e8\u05e1 \u05d1\u05d5 \u05d0\u05ea\u05d4 \u05de\u05e2\u05d5\u05e0\u05d9\u05d9\u05df \u05dc\u05d4\u05e6\u05d8\u05e8\u05e3 \u05dc\u05e7\u05d1\u05d5\u05e6\u05d4 \u05e7\u05d9\u05d9\u05de\u05ea, \u05d1\u05d7\u05e8 \u05ea\u05d0\u05e8\u05d9\u05da \u05d5\u05dc\u05d0\u05d7\u05e8 \u05de\u05db\u05df \u05d1\u05d7\u05e8 \u05d1\u05d0\u05d7\u05ea \u05d4\u05e7\u05d1\u05d5\u05e6\u05d5\u05ea \u05de\u05ea\u05d5\u05da \u05d4\u05e8\u05e9\u05d9\u05de\u05d4"),r.a.createElement("hr",null),r.a.createElement("p",{className:"mb-0"},"(: \u05d1\u05d4\u05e6\u05dc\u05d7\u05d4"),r.a.createElement("div",{className:"d-flex justify-content-end"},r.a.createElement(p.a,{className:"bu-5",onClick:function(){return e.setState({show:!1})},variant:"outline-success"},"\u05d4\u05de\u05e9\u05da"))),r.a.createElement("div",{className:"helpbox"},!this.state.show&&r.a.createElement(p.a,{variant:"danger",onClick:function(){return e.setState({show:!0})}},"Help")))}}]),a}(r.a.Component),f=(a(34),a(23)),N=a.n(f),C=(a(35),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).onChange=function(e){var t=new Date(new Date(e).setHours(6));n.setState({date:t})},n.setNewRow=function(e,t,a,r,o,l,s){var c={id:n.state.id,maxNum:e,groupSize:1,groupLeader:t,courseName:a,Description:r,startTime:s,date:l,zoomUrl:o};console.log(c.Description);var i=n.state.rows.concat(c);alert("Group created!"),n.setState({rows:i,id:n.state.id+1}),n.setState({showhours:!0,showForm:!1})},n.state={id:0,date:new Date,show:!1,showhours:!1,showForm:!1,courseName:"",courses:["\u05dc\u05d5\u05d2\u05d9\u05e7\u05d4 \u05d5\u05ea\u05d5\u05e8\u05ea \u05d4\u05e7\u05d1\u05d5\u05e6\u05d5\u05ea","\u05d0\u05dc\u05d2\u05d1\u05e8\u05d4","\u05d7\u05d3\u05d5\u05d5\u05d0 1","\u05de\u05d1\u05d5\u05d0 \u05dc\u05de\u05d3\u05e2\u05d9 \u05d4\u05de\u05d7\u05e9\u05d1"],rows:[{id:69,maxNum:10,groupSize:5,groupLeader:"Sara",courseName:"\u05d0\u05dc\u05d2\u05d1\u05e8\u05d4",Description:"\u05ea\u05e8\u05d2\u05d9\u05dc \u05d1\u05d9\u05ea \u05de\u05e1 3",startTime:"12:00",date:new Date(2020,8,22),zoomUrl:"www.zoom.com"},{id:70,maxNum:10,groupSize:10,groupLeader:"Michal",courseName:"\u05d0\u05dc\u05d2\u05d1\u05e8\u05d4",Description:"\u05ea\u05e8\u05d2\u05d9\u05dc \u05d1\u05d9\u05ea \u05de\u05e1 2",startTime:"14:00",date:new Date(2020,8,22),zoomUrl:"www.zoom.com"}],about:!1},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this,t=this.state.showhours?r.a.createElement("div",{className:"mu-2"},r.a.createElement(d,{groups:this.state.rows.filter((function(t){return t.date.toDateString()===e.state.date.toDateString()&&t.courseName===e.state.courseName}))}),r.a.createElement(p.a,{className:"m-4",onClick:function(){e.setState({showhours:!1,showForm:!0})}},"Open new Group")):this.state.showForm?r.a.createElement(w,{courseName:this.state.courseName,date:this.state.date,setNewRow:this.setNewRow}):r.a.createElement("h2",null),a=this.state.showhours||this.state.showForm?"":" Choose your date (pun intended) ;)",n=this.state.courses.map((function(t,a){return r.a.createElement("a",{href:"#",class:"myButton",key:a,onClick:function(){return e.setState({show:!0,courseName:t})}},t)})),o=this.state.show?r.a.createElement("main",null,r.a.createElement("h1",{style:{color:"blue",textAlign:"right "}},this.state.courseName),r.a.createElement("h5",{className:"choice-text"},a),r.a.createElement("div",null,r.a.createElement(m.a,{className:"c1",onChange:this.onChange,value:this.state.date,calendarType:"Hebrew",onClickDay:function(){e.setState({showhours:!0})}}),t),r.a.createElement(p.a,{className:"button-center mu-5",onClick:function(){return e.setState({show:!1,showhours:!1,showForm:!1})}},"back")):r.a.createElement("div",null,n);return r.a.createElement("main",{className:"app"},r.a.createElement("img",{src:N.a,className:"logo",alt:"Zoomate"}),r.a.createElement("div",null,r.a.createElement(v,null)),r.a.createElement("div",{className:"center"},o))}}]),a}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[25,1,2]]]);
//# sourceMappingURL=main.cd5ef8d9.chunk.js.map