import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { postusers } from '../store/thunk/fetchUsers';


function Createdata() {

    let[val,setval]=useState({
        username:'',myemail:'',mypass:''
    })
    let handleChange=(e)=>{
        setval(
            {...val,[e.target.name]:e.target.value}
        )
    }

let dispatch = useDispatch()

let handleSubmit=(e)=>{
  e.preventDefault(0)
dispatch(postusers(val))
setval({username:'',myemail:'',mypass:''})
}

  return (
    <Form onSubmit={handleSubmit}>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
      <Form.Label>Username</Form.Label>
      <Form.Control
       type="text" 
       placeholder="username..." 
       name='username'
       value={val.username}
       onChange={handleChange}
       />
    </Form.Group>
      <Form.Label>Email address</Form.Label>
      <Form.Control
       type="email" 
       placeholder="name@example.com"
       value={val.myemail}
       name='myemail'
       onChange={handleChange}
       />
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
      <Form.Label>password</Form.Label>
      <Form.Control 
      type="text" 
      placeholder="password"
      value={val.mypass}
      name='mypass'
      onChange={handleChange}
      />
    </Form.Group>
    <Button type='submit'>Submit</Button>
  </Form>
  )
}

export default Createdata