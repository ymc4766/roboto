import React from 'react';
import Card from './Card';
// import robots from "./robots";



const CardList = ({robots}) => {
    return (
        <div>
      {
          robots.map((user ,i)=> {
            return  (

              <Card 
               key ={i}
               name={robots[i].name}
               image ={robots[i].image}
               email={robots[i].email}

              />

            );
          })
        
      }
        </div>
    )
}

export default CardList;