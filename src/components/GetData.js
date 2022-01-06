import React, { useEffect, useState } from 'react'


export default function GetData() {
    
    const [Data, setData]=useState([]);
    useEffect(()=>{
        fetch('https://usman-recipes.herokuapp.com/api/products').then((result)=>{
            result.json().then((resp)=>{
                console.log("result", resp);
            
            })
        })
    },[])
    const refreshData=()=>{
           fetch('https://usman-recipes.herokuapp.com/api/products').then((result)=>{
               result.json().then((resp)=>{
                   setData(resp);
               })
           })
    }
   
    const deleteData=(name)=>{
          fetch("https://usman-recipes.herokuapp.com/api/products/&{name}",{
                 method: 'DELETE',    
          }).then((result)=>{
              result.json().then((res)=>{
                  console.log('Data deleted')
                  refreshData();
              })
          })
    }
    return (
        <div>
            <h1>Get API DATA</h1>
            <table className='table'>
            <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Day</th>
      <th scope="col">Description</th>
      <th scope="col">Department</th>
      <th scope="col">Color</th>
    </tr>
  </thead>
  <tbody >
  {Data.map((dataitem)=> {
  {console.log(dataitem)} 
  return( 
     
     <tr key={dataitem.name}>
   <th scope="row">{dataitem.id}</th>
   <td >{dataitem.name}</td>
   <td>{dataitem.price}</td>
   <td>{dataitem.description}</td>
   <td>{dataitem.department}</td>   
   <td>{dataitem.color}</td>
   <td><button onClick={deleteData} >Delete</button></td>
   {console.log(dataitem.name)}

 </tr>

    )})} 
     
 
  </tbody>
  
</table>
    <div>
        <input type="text "/>  <br /><br/>
        <input type="text "/>  <br/><br/>
        <input type="text"/>  <br/><br/>
        <input type="text "/>  <br/><br/>
        <input type="text "/>  <br/><br/>
        <button>Update Button</button>
    </div>

        </div>
    )

}

