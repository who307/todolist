import React from 'react';
import './App.css';
import {Typography, List, ListItem, ListItemText } from '@material-ui/core';
import { render } from '@testing-library/react';
import Inputform from './components/Inpuutform';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      content: "",
      startDate: null,
      startTime: null,
      endDate: null,
      endTime: null,
      todoList:[]
    }
  }

//todoList의 state값을 nowList로 세팅해준다.
  addTodoList(date){
    const nowList = this.state.todoList;
    nowList.push(date);
    this.setState({
      todoList: nowList,
    });
  }

  render() {
    

    return (
      <div className="App">
        <div className="header"> TODO LIST</div>
        
        <Inputform addTodoList ={this.addTodoList.bind(this)}/>
        <div className="list_area"> 리스트 영역
            <List>
              {this.state.todoList.map((todoItem, idx) => {
                const {
                  title, content, startDate, startTime, endDate, endTime
                } = todoItem;
                return (
                  <ListItem key ={idx} role={undefined} dense button>
                    <ListItemText 
                    primary={title}
                    secondary={startDate.format('yyyy-MM-DD')+''+startTime.format('HH:MM')+ endDate.format('yyyy-MM-DD')+''+endTime.format('HH:MM')}
                    />
                  </ListItem>
                )
                })}
            </List>
        </div>

        <Typography variant="body2" color="textSecondary" align="center">
          {'Copyright ⓒ 문건후2015' + new Date().getFullYear() + '.'}
        </Typography>
        </div>
    );
  }
}

export default App;