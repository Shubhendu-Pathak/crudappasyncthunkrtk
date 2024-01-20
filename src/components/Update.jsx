import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { putusers } from '../store/thunk/fetchUsers';



function Update() {

// state to have editable dta
let [edit,setEdit]= useState(null)

    let handleChange=(e)=>{
        setEdit(
            {...edit,[e.target.name]:e.target.value}
        )
    }

    // to get id from path url
    let {id} = useParams()
    console.log(id);

//to get all data
let alldatas = useSelector(state=>state.usersData.data)
console.log(alldatas);


let dispatch =useDispatch()

useEffect(()=>{
  if(id){
    let singleUser = alldatas.filter(ele=>ele.id===id)
    setEdit(singleUser[0])
  }
},[])

let navigate = useNavigate()

let handleSubmit=(e)=>{
  e.preventDefault(0)
dispatch(putusers(edit))
navigate('/alldata')
}

  return (
    <Form onSubmit={handleSubmit} className='bg-info p-4'>
        <h1 className='text-bg-danger'>UPDATE DATA</h1>
        <hr />
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
      <Form.Label>Username</Form.Label>
      <Form.Control
       type="text" 
       placeholder="username..." 
       name='username'
       value={edit && edit.username}
       onChange={handleChange}
       />
    </Form.Group>
      <Form.Label>Email address</Form.Label>
      <Form.Control
       type="email" 
       placeholder="name@example.com"
       value={edit && edit.myemail}
       name='myemail'
       onChange={handleChange}
       />
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
      <Form.Label>password</Form.Label>
      <Form.Control 
      type="text" 
      placeholder="password"
      value={edit && edit.mypass}
      name='mypass'
      onChange={handleChange}
      />
    </Form.Group>
    <Button type='submit'>Submit</Button>
  </Form>
  )
}

export default Update