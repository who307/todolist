import React from 'react';
import { TextField,  Paper, Dialog, DialogContent, DialogContentText, DialogTitle} from '@material-ui/core';
import { KeyboardTimePicker, KeyboardDatePicker } from '@material-ui/pickers';
import { render } from '@testing-library/react';
import Button from '@material-ui/core/Button';
import CAlert from './modal/customAlert';

class inputform extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        title: "",
        content: "",
        startDate: null,
        startTime: null,
        endDate: null,
        endTime: null,
        todoList:[],
        modalOpen: false
      }
    }

    onChangetext = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        })
      }
      //시작날짜
      onChangeStartDate = (event) => {
        this.setState({
          startDate: event
        })
      }
      //시작시간
      onChangeStartTime = (event) => {
        this.setState({
          startTime: event
        })
      }
      //끝난날짜
      onChangeEndDate = (event) => {
        this.setState({
          endDate: event
        })
      }
      //끝난시간
      onChangeEndTime = (event) => {
        this.setState({
          endTime: event
        })
      }
    //   saveTodoList(){
    //     const nowList = this.state.todoList;
    //     const { title, content, startDate, startTime, endDate, endTime} = this.state;
    //     nowList.push({
    //       title, content, startDate, startTime, endDate, endTime
    //     });
    
    //   this.setState({
    //     todoList: nowList,
    //     title: "",
    //     content: "",
    //     startDate: null,
    //     startTime: null,
    //     endDate: null,
    //     endTime: null
    //   })
    // }
    

    addInputData(){
      const data = this.state;
      if(this.checkValidate()){
        this.props.addTodoList(data);
        this.setState({
          title: "",
          content: "",
          startDate: null,
          startTime: null,
          endDate: null,
          endTime: null,
        });
      }else{
        this.setState({
          modalOpen:true
        })
      };
  }
  checkValidate(){
    const {
      title, content, startDate, startTime, endDate, endTime
    } = this.state;

    const data_eng = {
      title,content,startDate,
      startTime,endTime,endDate
    };

      for (const [key, value] of Object.entries(data_eng)) {
        if(!value) return {check: false, target: key}
      }
      return {check : true}
    }
   
  
  modalClose(){
    this.setState({
      modalOpen : false
    }) 
  }

    render(){
      const {
        title, content, startDate, startTime, endDate, endTime, modalOpen
      } = this.state;
  
      console.log(this.state);
      console.log(this.state.title);
      console.log(this.state.content);
      console.log(this.state.startDate)
      console.log(this.state.startTime)
      console.log(this.state.endDate)
      console.log(this.state.endTime)
      
      
        return(

          <Paper className="input_area" variant="outline" style={{ padding: '10px' }}>

          <TextField label="제목" placeholder="제목을 입력해 주세요" margin="normal" fullWidth required
            onChange={this.onChangetext} value={this.state.title} name="title" />
          <TextField label="상세내용" margin="normal" fullWidth multiline
            onChange={this.onChangetext} value={this.state.content} name="content" />

          <KeyboardDatePicker
            disable="inline"
            format="yyyy/MM/DD/dd"
            margin="normal"
            label="시작 예정일"
            value = {startDate}
            onChange={this.onChangeStartDate}
            style={{ width: '50%' }}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
          <KeyboardTimePicker
            margin="normal"
            label="시작 시간"
            variant="inline"
            value = {startTime}
            onChange={this.onChangeStartTime}
            style={{ width: '50%' }}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />

          <KeyboardDatePicker
            disable="inline"
            format="yyyy/MM/DD/dd"
            margin="normal"
            label="종료 예정일"
            value = {endDate}
            onChange={this.onChangeEndDate}
            style={{ width: '50%' }}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
          <KeyboardTimePicker
            margin="normal"
            label="종료 시간"
            variant="inline"
            value = {endTime}
            onChange={this.onChangeEndTime}
            style={{ width: '50%' }}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        <Button variant="outlined" color="primary" onClick={this.addInputData.bind(this)}>
        저장
        </Button>
        <CAlert modalClose={this.modalClose.bind(this)}
        modalOpen={modalOpen}
        message={"에러에요"}
        />
        </Paper>
        )
        }
    }
export default inputform;