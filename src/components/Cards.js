import React from "react"
import { useState } from "react"
import Card from "./Card"
import all1 from "../img/all1.jpg"
import all2 from "../img/all2.jpg"
import all3 from  "../img/all3.jpg"
import all4 from  "../img/all4.jpg"
import bb1 from "../img/bb1.jpg"
import bb2 from "../img/bb2.jpg"
import corvina1 from "../img/corvina1.jpg"
import corvina2 from "../img/corvina2.jpg"
import cyborg1 from "../img/cyborg1.jpg"
import cyborg2 from "../img/cyborg2.jpg"
import kiss1 from "../img/kiss1.jpg"
import kiss2 from "../img/kiss2.jpg"
import robin1 from "../img/robin1.jpg"
import robin2 from "../img/robin2.jpg"
import stella1 from "../img/stella1.jpg"
import stella2 from "../img/stella2.jpg"

function Cards(){
const [items, setItems] = useState([
    { id: 1, img: all1,  stat: ""},
    { id: 1, img: all2, stat: ""},
    { id: 2, img: all3, stat: ""},
    { id: 2, img: all4, stat: ""},
    { id: 3, img: bb1, stat: ""},
    { id: 3, img: bb2, stat: ""},
    { id: 4, img: corvina1, stat: ""},
    { id: 4, img: corvina2, stat: ""},
    { id: 5, img: cyborg1, stat: ""},
    { id: 5, img: cyborg2, stat: ""},
    { id: 6, img: kiss1, stat: ""},
    { id: 6, img: kiss2, stat: ""},
    { id: 7, img: robin1, stat: ""},
    { id: 7, img: robin2, stat: ""},
    { id: 8, img: stella1, stat: ""},
    { id: 8, img: stella2, stat: ""}
 ].sort(() => Math.random() - 0.5))
//  Al refresh cambiano posizione


const [prev, setPrev] = useState(-1)


function check(current) {
    if (items[current].id === items[prev].id) {
      items[current].stat = "correct";
      items[prev].stat = "correct";
      setItems([...items]);
      setPrev(-1);
    } else {
      items[current].stat = "wrong";
      items[prev].stat = "wrong";
      setItems([...items]);
      setTimeout(() => {
        items[current].stat = "";
        items[prev].stat = "";
        setItems([...items]);
        setPrev(-1);
      }, 
      5);
    }
  }
  
//  Per far riconoscere id
function handleClick(id){
    if(prev === -1){
        items[id].stat = "active"
        setItems([...items])
        setPrev(id)
    }else{
        check(id)
    }
}
    return (
        <div className="container">
            { items.map((item, index) => (
                <Card key= {index} item={item} id={index} handleClick={handleClick}/>
            ))}
        </div>
    )
}

export default Cards