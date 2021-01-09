import React from 'react';

const Card=(props)=>{
return (
  <div>
     <div className="card">
    <img src={props.image} alt={props.name} style= {{width: 100}}/>
    <div className="container">
      <h4><b>{props.name}</b></h4> 
      <p>{props.email}</p>
      <p>{props.profession}</p> 
    </div>
  </div>
  
  </div>
)

}

export default Card;
