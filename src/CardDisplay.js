import {useState, useEffect} from 'react'
import Card from './Card'
import axios from 'axios'

function CardDisplay() {

    const [deck,setDeck] = useState('')

    useEffect(()=>{
        
        axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1') 
            .then((deckId)=>{
                
                setDeck(deckId.data.deck_id)})
            

    },[])

    return <div>
        <Card deckId = {deck}/>
    </div>
}

export default CardDisplay

