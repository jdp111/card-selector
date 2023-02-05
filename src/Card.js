import { useEffect, useState, useRef } from "react";
import axios from 'axios'

function Card({deckId}) {
    const [imageURL, setImageURL] = useState('')
    const [paused, setPaused] = useState(true)
    const timerId = useRef();

    useEffect(() =>{
        if (!paused){
        
        timerId.current = setInterval(() => {
            axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
            .then((newDraw) => setImageURL(newDraw.data.cards[0].image));
            
        }, 1000)}
        

        return ()=>{
            console.log("turning off timer")
            clearInterval(timerId.current)}
    },[paused])

    function handleClick() {
        setPaused(!paused)
    }

    
    return <div>
        <img src={imageURL}></img>
        <button onClick={handleClick}>scroll through cards</button>
    </div>

}

export default Card