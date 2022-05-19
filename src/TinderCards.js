import React, { useState } from 'react'
import './TinderCards.css'
import TinderCard from 'react-tinder-card'
function TinderCards() {
    const[people,setPeople]=useState([
        {
            name:"ritish",
            url:"https://media.gettyimages.com/photos/spacex-owner-and-tesla-ceo-elon-musk-arrives-on-the-red-carpet-for-picture-id1229892421?k=20&m=1229892421&s=612x612&w=0&h=eFlKyAeV4io4nTmsE0BbI4fKXeCLCYduf0oYt338_wQ="
        },
        {
            name:"mark",
            url:"https://media.gettyimages.com/photos/facebook-ceo-mark-zuckerberg-speaks-about-the-new-facebook-news-at-picture-id1178141599?k=20&m=1178141599&s=612x612&w=0&h=xPWvI-BENETm8JK9MGFf15MVX3zJTIL_8alwz1MJzz0="
        }
    ])
    const swiped=(direction,nameToDelete)=>{
        console.log("removing:",nameToDelete);
        // setLastDirection(direction);
    };
    const outOfFrame=(name)=>{
       console.log(name+"left the screen");
    };
    return (
    <div className="tinder_cards">
        <div className="tinderCards_cardContainer">
           {people.map((person)=>(
               <TinderCard
                className="swipe"
                key={person.name} 
                preventSwipe={["up","down"]}
                onSwipe={(dir)=>swiped(dir,person.name)}
                onCardLeftScreen={()=>outOfFrame(person.name)}
               >
                   <div className="card" style={{backgroundImage:`url(${person.url})`}} >
                       {/* <h3 className="cardContent">{person.name}</h3> */}
                   </div>
               </TinderCard>
           ))}
        </div>
    </div>
  )
}

export default TinderCards