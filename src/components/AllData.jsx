import React, { useEffect, useState } from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import { useDispatch, useSelector } from 'react-redux';
import { deleteusers, getusers } from '../store/thunk/fetchUsers';
import Mymodal from './Mymodal';
import { useNavigate } from 'react-router-dom';


function AllData() {
let [show,setShow]= useState(false)
let [getid,setgetid] = useState(null)

let dispatch =useDispatch()

let {isLoading,data,error} = useSelector(state=>state.usersData)
// console.log(data,isLoading,error);

useEffect(()=>{
  dispatch(getusers())
},[dispatch])


let navigate = useNavigate()
let navToUpdate =(para)=>{
navigate(`/update/${para.id}`)
}

let deletehandler =(para)=>{
console.log(para);
dispatch(deleteusers(para))
}

  return (
    <>
    
    {
      show ?
      <Mymodal setShow={setShow} getid={getid} data={data}/>
      :
<ListGroup>
{
  data && data.map(ele=>(
    <ListGroup.Item key={ele.id} >
    <div className="w-50 m-auto border border-success border-5 p-3 rounded-4">
    <h1 className='text-center'>Name - {ele.username}</h1>
     <h2 className='text-center'>Email - {ele.myemail}</h2>
     <h3 className='text-center'>Password - {ele.mypass} </h3>
   <div className="w-50 mt-3 m-auto">
   <a className='mx-3 ' href="#" onClick={()=>navToUpdate(ele)}>Edit</a>
     <a  className='mx-3 ' href="#" onClick={()=>[setShow(true),setgetid(ele.id)]}>View</a>
     <a  className='mx-3 ' href="#" onClick={()=>deletehandler(ele)}>Delete</a>
   </div>
    </div>
 </ListGroup.Item>
  ))
}
    </ListGroup>
    }
 
    
    </>
  )
}

export default AllData