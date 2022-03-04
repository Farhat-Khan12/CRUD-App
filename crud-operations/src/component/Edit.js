import React,{useEffect, useState} from 'react';
import { Button, FormControl, FormGroup, Input, InputLabel, makeStyles, Typography } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import {useNavigate} from 'react-router'
import {Container, Row} from 'react-bootstrap';
import NavBarDashBoard from './NavBar';
import '../components/AddTask.css';
import { editTask, GetTasks } from '../services/api';
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

export default function Edit() {
  const navigate= useNavigate();
  const {id} = useParams();
  const [task,setTask] = useState(initialValues);
  const {name,username,email,phone}=task;
  const classes = useStyle();

  useEffect(()=>{
      loadTaskData();
  },[])

  const loadTaskData = async() =>{
    const response = await GetTasks(id);
    setTask(response.data);
  }

  const onValueChange = (e) =>{
    console.log(e.target.value);
    setTask({...task, [e.target.name]: e.target.value})
    console.log(task);
  }

  function editTaskDetails(){
     editTask(id,task);
     navigate("/alltask")
  }


  return (
    <>
        <Container>
            <NavBarDashBoard/>
            <Row>
              <div className='inputdiv'>
              <FormGroup className={classes.container}>
                  <Typography variant="h4">Edit Task</Typography>
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
                 <Button variant="contained" onClick={editTaskDetails} color="primary">Edit Task</Button>
                </FormGroup>
              </div>
            </Row>
        </Container>
    </>
  );
}
