import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {CLIENT_URL} from '../Constants'
import Pokemon from './Pokemon'

const Pokelist = () => {

    const [pokemon, setPokemon] = useState([]);
    
    useEffect(() => {

        const fetchData = async () => {
            try{
                const res = await axios.get(CLIENT_URL);
                console.log(res)
                const {results } = res.data;
                setPokemon(results);
            } catch (error) {
                console.log(error)
            }
        }
        fetchData();
    },[]);

    return (
        <div>
            <ul className="container collection with-header" style={{marginTop: 25}}>
                {pokemon.map((pokemon, i)=>{
                    const {name, url} = pokemon;
                    return <Pokemon name={name} url={url} id={i}/>
                })}
            </ul>
        </div>
    )
}

export default Pokelist;