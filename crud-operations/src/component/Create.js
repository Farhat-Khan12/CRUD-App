import React,{useState} from 'react';
import { Button, FormControl, FormGroup, Input, InputLabel, makeStyles, Typography } from '@material-ui/core';
import {useNavigate} from 'react-router'
import {Container, Row} from 'react-bootstrap';
import NavBarDashBoard from './NavBar';
import '../components/AddTask.css';
import { addTask } from '../services/api';
const useStyle = makeStyles({
    container:{
      width: '50%',
      margin: '5% 0 0 25%',
      '& > *':{
        marginTop : '25px'
      }
    }
})

const initialValues ={
  name: "",
  username: "",
  email: "",
  phone: ""
}

export default function Create() {
  const navigate= useNavigate();
  const [task,setTask] = useState(initialValues);
  const {name,username,email,phone}=task;
  const classes = useStyle();

  const onValueChange = (e) =>{
    console.log(e.target.value);
    setTask({...task, [e.target.name]: e.target.value})
    console.log(task);
  }

  function addTaskDetails(){
     addTask(task);
     navigate("/alltask")
  }


  return (
    <>
        <Container>
            <NavBarDashBoard/>
            <Row>
              <div className='inputdiv'>
              <FormGroup className={classes.container}>
                  <Typography variant="h4">Add Task</Typography>
                 <FormControl>
                 <InputLabel>Name</InputLabel>
                  <Input onChange={(e)=> onValueChange(e)} name='name' value={name}/>
                 </FormControl>
                 <FormControl>
                 <InputLabel>Username</InputLabel>
                  <Input onChange={(e)=> onValueChange(e)} name='username' value={username}/>
                 </FormControl>
                 <FormControl>
                 <InputLabel>Email</InputLabel>
                  <Input onChange={(e)=> onValueChange(e)} name='email' value={email}/>
                 </FormControl>
                 <FormControl>
                 <InputLabel>Phone</InputLabel>
                  <Input onChange={(e)=> onValueChange(e)} name='phone'value={phone}/>
                 </FormControl>
                 <Button variant="contained" onClick={addTaskDetails} color="primary">Add Task</Button>
                </FormGroup>
              </div>
            </Row>
        </Container>
    </>
  );
}
