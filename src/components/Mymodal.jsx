import React from 'react'
import './MyModal.css'

function Mymodal({setShow,getid,data}) {

let ownData = data.filter(ele=>{
    return ele.id===getid
})
console.log(ownData);

  return (
 <div className="modalback">
      {
        ownData && ownData.map(ele=>{
return  <div className='border border-4 p-4 mymodal' >
<h3>Name = {ele.username} </h3>
<h3>Username = {ele.myemail}</h3>
<h3>Password = {ele.mypass}</h3>
<button onClick={()=>setShow(false)} className='btn btn-warning'>CLOSE</button>
</div>
        })
      }
 </div>
  )
}

export default Mymodal