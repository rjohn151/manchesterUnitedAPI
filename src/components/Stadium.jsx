import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './Stadium.css'

const Stadium = () => {

    const [stats, setStats] = useState([])
    const [stadium, setStadium] = useState("https://api-football-v1.p.rapidapi.com/v3/venues")
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        let cancel;
        axios.get(stadium, {
            headers: {
                "X-RapidAPI-Key" : "ed5f66bf66msh3195b0687e916c5p11ad30jsndeaa1680f030",
                "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com"
            },
            params: {id: '556', name: 'Old Trafford'},

        },{
            cancelToken: new axios.CancelToken(c => cancel = c)
        })
            .then(response => {
                setLoading(false)

            console.log(response.data.response)
            setStats(response.data.response)
        }).catch((error) => {
            console.log(error)
        })

        return () => cancel()
    }, [stadium])

  return (
    <div className='stadium'>
        <h1 className='stadium-title'>The Theatre of Dreams</h1>
        {stats.map(item => (

<div className='' key={item.id}>
   <h2>{item.name}</h2>
   <h2>{item.address}</h2>
   <h2>{item.city},{item.country}</h2>
   <h2>Capacity: {item.capacity}</h2>
   <img className='stadium-picture' src={item.image} alt="" />
    
    
    <div className="fixture"> 
        
    </div>
</div>

))}
    </div>
  )
}

export default Stadium