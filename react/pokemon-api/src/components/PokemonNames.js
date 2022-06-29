import React, {useState, useEffect} from "react";

const PokemonNames = (props) => {
    const [state, setState] = useState([]);

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/?limit=901")
        .then(response => response.json())
        .then(response => setState({pokemon: response.results}))
    }, []);

    return (
        <div>
            <p>All Current 901 Pokemon</p>
            {state.pokemon ? state.pokemon.map((item, index)=>{
                return(<div key={index}>{item.name}</div>)
            }):null}
        </div>
    );

}



export default PokemonNames;