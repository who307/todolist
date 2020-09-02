import React from 'react';
import './App.css';
import { Typography, List, ListItem, ListItemText } from '@material-ui/core';
import { render } from '@testing-library/react';
import Inputform from './components/Inputform'
import moment from 'moment';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.localStorage = window.localStorage;
    const getItem = localStorage.getItem("todolist_state");
    if(getItem){
      this.state = JSON.parse(getItem);
    }else{
      this.state = {
        todoList:[]
      }
    }
  }

  addTodoList(data){
    const nowList = this.state.todoList;
    nowList.push(data);
    this.setState({
      todoList:nowList,
    },()=>{
      const stringState = JSON.stringify(this.state);
      this.localStorage.setItem("todolist_state", stringState);
    });
  }
  
  

  render() {
    const {todoList} = this.state;
    return (
      <div className="App">
        <div className="header"> TODO LIST</div>
        <Inputform addTodoList={this.addTodoList.bind(this)}></Inputform>
        <div className="list_area"> 
            <List>
              {todoList.map((todoItem, idx) => {
                let {
                  title, content, startDate, startTime, endDate, endTime
                } = todoItem;

                if((typeof startDate)==="string"){
                  startDate = moment(startDate);
                  startTime = moment(startTime);
                  endDate = moment(endDate);
                  endTime = moment(endTime);      
                }

                const checkToday = moment().isBetween(startDate, endDate);
                const checkF = (moment().diff(startDate) <0);
                const checkB = (moment().diff(endDate) >0);
                let fontColor = "black";
                if(checkToday)fontColor="blue";
                if(checkF)fontColor="grey";
                if(checkB)fontColor="red";

              
                
                
                return (
                  <ListItem key={idx} role={undefined} dense button>
                  <ListItemText
                    
                    primary={title}
                    style={{color :fontColor}}
                    secondary={startDate.format('yyyy-MM-DD') +' /' + startTime.format('HH:DD')+' ~ '+endDate.format('yyyy-MM-DD')+' / '+endTime.format('HH:DD')}
                    />
                    </ListItem>
                )
              })}
            </List>
        </div>
            

        <Typography variant="body2" color="textSecondary" align="center">
          {'Copyright ⓒ 문건후(moongunwho)201540209' + new Date().getFullYear() + '.'}
        </Typography>

         
        <div>
        
        {/* <Button variant="contained" color="primary" onClick={this.saveTodoList.bind(this)}>
          SAVE
        </Button> */}
        </div>
      </div>
    );
  }
}

export default App;