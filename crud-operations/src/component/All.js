import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import NavBarDashBoard from './NavBar';
import { GetTasks, deleteTask  } from "../services/api"
import {Link} from 'react-router-dom';
import { Table, TableHead, TableRow, TableCell, TableBody, Button, makeStyles } from '@material-ui/core';

const useStyle = makeStyles({
  table: {
    width: '90%',
    margin: '50px 0 0 px'
  },
  thead:{
    '& > *':{
      background: 'black',
      color: 'white',
      fontSize: 20
    }
  },
  row:{
    '& > *':{
      fontSize: 20
    }
  }

})
export default function All() {
  const [tasks, setTasks] = useState([]);
  const classes = useStyle();

  useEffect(() => {
    getAllTasks();
  }, [])

  const getAllTasks = async () => {
    const response = await GetTasks();
    console.log(response.data);
    setTasks(response.data);
  }

  const deleteTaskData = async (id) =>{
    await deleteTask(id);
    getAllTasks();
  }
  return (
    <>
      <Container>
        <NavBarDashBoard />
        <Row>
          <h1>All User</h1>
          <Table className={classes.table}>
            <TableHead>
              <TableRow className={classes.thead}>
                <TableCell>id</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>UserName</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                tasks.map(user => (
                  <TableRow className={classes.row}>
                    <TableCell>{user.id}</TableCell>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.username}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.phone}</TableCell>
                    <TableCell>
                      <Button variant="contained" color="primary" style={{margin: '5px'}} component={Link} to={`/edit/${user.id}`}>Edit</Button>
                      <Button variant="contained" color="secondary" onClick={()=>deleteTaskData(user.id)}>Delete</Button>
                    </TableCell>
                  </TableRow>
                ))
              }
            </TableBody>
          </Table>
        </Row>
      </Container>
    </>
  );
}
