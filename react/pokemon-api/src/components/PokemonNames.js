import React, { useState, useEffect } from "react";
import axios from "axios";

const PokemonNames = (props) => {
    const [pokeData, setPokeData] = useState([]);

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon/?limit=901")
            .then((response) => {
                console.log(response.data.results);
                setPokeData(response.data.results);
            })
            .catch((err) => console.log(err));
        // fetch("https://pokeapi.co/api/v2/pokemon/?limit=901")
        // .then(response => response.json())
        // .then(response => setResponseData({pokemon: response.results}))
    }, []);

    return (
        <div>
            <h2>All Current 901 Pokemon with Axios</h2>
                {pokeData.map((pokemon, index) => (
                    <div key={index}>
                    <p >{pokemon.name}</p>
                    </div>
                ))}
            {/* {responseData.pokemon ? responseData.pokemon.map((item, index)=>{
                return(<div key={index}>{item.name}</div>)
            }):null} */}
        </div>
    );

}



export default PokemonNames;