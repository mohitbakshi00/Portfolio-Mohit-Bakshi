import React from 'react'
import { useState } from 'react'

 const counter = () => {
    // const count, setcount = useState()

    let a=0;

    function incr(a){
       a= a+1;
    }

    function decr(a){
        a= a-1;
    }

    function res(a){
        a= 0;
    }
    
  return (
    <div className="height-[500px]">
     <div className= 'mx-10 my-20'>counter App</div>
     
     <div className= 'mx-5 px-5'>

     <div> {a} </div>   
     <button onClick={incr(a)} className= 'mx-10 '>Increment</button>
     <button onClick={decr(a)} className= 'mx-10'>decrement</button>
     <button onClick={res(a)} className= 'mx-10' >reset</button>
     </div>
     
    </div>
   
  )

}

export default counter;
