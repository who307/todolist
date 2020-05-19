import React from 'react';
import './App.css';
import { TextField, Typography, Paper } from '@material-ui/core';
import { KeyboardTimePicker, KeyboardDatePicker } from '@material-ui/pickers';
import { render } from '@testing-library/react';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      title: "",
      content: "",
      startDate: null,
      startTime: null,
      endDate: null,
      endTime: null 
    } 
  }

  Changetext = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    })
  }
  //시작날짜
  ChangeStartDate = (event) => {
    this.setState({
      startDate : event._d
    })
  }
  //시작시간
  ChangeStartTime = (event) => {
    this.setState({
      StartTime : event._d
    })
  }
  //끝난날짜
  ChangeEndDate = (event) => {
    this.setState({
      endDate : event._d
    })
  }
  //끝난시간
  ChangeEndTime = (event) => {
    this.setState({
      endTime : event._d
    })
  }



render() {
  

  
  console.log(this.state.title);
  console.log(this.state.content);
  console.log(this.state.startDate)
  console.log(this.state.starTime)
  console.log(this.state.endDate)
  console.log(this.state.endTime)



  return (
    <div className="App">
      <div className="header"> TODO LIST</div>
      <Paper className="input_area" variant="outline" style={{padding: '10px'}}>
      
        <TextField label="제목" placeholder="제목을 입력해 주세요" size="normal" margin="normal" fullWidth required 
         onChange={this.Changetext} value={this.state.title} name="title"/>
        <TextField label="상세내용" size="normal" margin="normal" fullWidth multiline 
         onChange={this.Changetext} value={this.state.content} name="content"/>

        <KeyboardDatePicker
            disable="inline"
            format="yyyy/MM/DD/dd"
            margin="normal"
            label="시작 예정일"
            onChange={this.ChangeStartDate}
            style={{ width: '50%' }}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
          <KeyboardTimePicker
            margin="normal"
            label="시작시간"
            variant="inline"
            onChange={this.ChangeStartTime}
            style={{ width: '50%' }}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />

          <KeyboardDatePicker
            disable="inline"
            format="yyyy/MM/DD/dd"
            margin="normal"
            label="끝난 날짜"
            onChange={this.ChangeEndDate}
            style={{ width: '50%' }}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
          <KeyboardTimePicker
            margin="normal"
            label="끝날 예정일"
            variant="inline"
            onChange={this.ChangeEndTime}
            style={{ width: '50%' }}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />

      </Paper>
      <div className="list_area"> 리스트 영역</div>
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright ⓒ 201540209문건후' +new Date().getFullYear()+'.'}
      </Typography>
    </div>
  );
}
}

export default App;