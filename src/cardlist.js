import React from "react";
import Card from "./card";
import { robots } from "./robot";
const Cardlist =()=>{
    const cardComponent= robots.map((user,i)=>{
        return <Card key={i} id={robots[i].id} name={robots[i].name} username={robots[i].username} email={robots[i].email}/>
    }
    )
    return(
        <div>
 
        {cardComponent}

        </div>
    );
}
export default Cardlist;