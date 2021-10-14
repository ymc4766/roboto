import React from "react";


const Card = (props) =>{
  return (
   <div className="bg-light-blue dib br2 pa2 ma2 grow  shadow">
    <img src={props.image} alt="sawir" />
    <div>
  <h2 className=" athelas ph3 ph0-l">{props.name}</h2>
  <p>{props.email}</p>
   </div>
 </div>
  );

}

export default Card;
