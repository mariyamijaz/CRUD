import React, { useState } from 'react'

export default function PostData() {
    const[name, setName]= useState('');
    const [price, setPrice]=useState('');
    const [Dep, setDep]=useState('');
    const [color, setColor]=useState('');
    const [Des, setDes]=useState('');
    
    const handleSubmit=()=>{
        console.log(name)
        console.log(price)
        console.log(Des)
        console.log(Dep)
        console.log(color);
        const data= {name,price,Dep,color,Des}
        fetch("https://usman-recipes.herokuapp.com/api/products",{
            method: 'POST',
            headers: {"Content-type": "application/json"},
            body:JSON.stringify(data)
        }).then(()=>{
                 console.log('Data Added')

            })
      
    }
    return (
        <div>
         <div className="mx-auto">
        <h1>Add List</h1>
      <div className="mb-3 ">
        <label for="formGroupExampleInput" class="form-label">
         Name
        </label>
        <input
          onChange={(e)=>setName(e.target.value)}
          type="text"
          className="form-control"
          id="formGroupExampleInput"
          placeholder="Enter name"
        />
      </div>
      <div className="mb-3 ">
        <label for="formGroupExampleInput" class="form-label">
         Price
        </label>
        <input
          onChange={(e)=>setPrice(e.target.value)}
          type="text"
          className="form-control"
          id="formGroupExampleInput"
          placeholder="Enter Price"
        />
      </div>
      <div className="mb-3 ">
        <label for="formGroupExampleInput" className="form-label">
         Color
        </label>
        <input
          onChange={(e)=>setColor(e.target.value)}
          type="text"
          className="form-control"
          id="formGroupExampleInput"
          placeholder="Enter Color"
        />
      </div>
      <div className="mb-3">
        <label for="formGroupExampleInput2" class="form-label">
          Department
        </label>
        <input
        onChange={(e)=>setDep(e.target.value)}
          type="text"
          className="form-control"
          id="formGroupExampleInput2"
          placeholder="Enter Department"
        />
      </div>
      <div className="mb-3">
        <label for="formGroupExampleInput2" class="form-label">
          Description
        </label>
        <input
          onChange={(e)=>setDes(e.target.value)}
          type="text"
          className="form-control"
          id="formGroupExampleInput2" 
          placeholder="Task description"
        />
      </div>
      <button id="submit" onClick={handleSubmit}>Submit</button>
    </div>
        </div>
    )   
}
