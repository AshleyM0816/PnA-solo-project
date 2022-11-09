import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
import { Link } from "react-router-dom";

const Display = () => {
    const [pokemonList, setPokemonList] = useState([]);

useEffect(() => {
    axios
    .get("http://localhost:8000/api/pokemon")
    .then((response) => {
        console.log(response.data);
        setPokemonList(response.data);
    })
    .catch((err) => {
        console.log(err);
    });
}, []);

const deleteHandler = (idFromBelow) => {
    axios
    .delete(`http://localhost:8000/api/pokemon/${idFromBelow}`)
    .then((response) => {
        console.log("success!");
        console.log(response);
        const filteredList = pokemonList.filter((pokemon) => {
        return pokemon._id !== idFromBelow;
        });
        setPokemonList(filteredList);
    })
    .catch((err) => {
        console.log("error!", err);
    });
};

return (
    <>
        <h1 style={{marginLeft:"5%"}}>Pokemon/Teams</h1>

        <div style={{height:"300px", overflowY:"scroll", width:"90vw", margin:"20px auto"}}>
            <table
            style={{tableLayout:"fixed", border:"2px solid black", width:"100%", wordWrap:"break-word"}}>
                <thead>
                    <tr>
                        <th style={{border:"1px solid black", }}>Pokemon Name</th>
                        <th style={{border:"1px solid black", }}>Move 1</th>
                        <th style={{border:"1px solid black", }}>Move 2</th>
                        <th style={{border:"1px solid black", }}>Move 3</th>
                        <th style={{border:"1px solid black", }}>Move 4</th>
                        <th style={{border:"1px solid black", }}>Held Item</th>
                        <th style={{border:"1px solid black", }}>Name of Run Team</th>
                        <th style={{border:"1px solid black", }}>Completion Date</th>
                        <th style={{border:"1px solid black", }}>Game Run was Completed in</th>
                    </tr>
                </thead>
                <tbody>
                {
                    pokemonList.map((pokemon, index)=> (
                        <tr key={index}
                        style={{border:"1px solid black, "}}>
                            <td style={{border:"1px solid black", }}>
                                {pokemon.name}
                            </td>
                            <td style={{border:"1px solid black", }}>
                                {pokemon.move_1}
                            </td>
                            <td style={{border:"1px solid black", }}>
                                {pokemon.move_2}
                            </td>
                            <td style={{border:"1px solid black", }}>
                                {pokemon.move_3}
                            </td>
                            <td style={{border:"1px solid black", }}>
                                {pokemon.move_4}
                            </td>
                            <td style={{border:"1px solid black", }}>
                                {pokemon.held_item}
                            </td>
                            <td style={{border:"1px solid black", }}>
                                {pokemon.team_name}
                            </td>
                            <td style={{border:"1px solid black", }}>
                                {pokemon.completion_date}
                            </td>
                            <td style={{border:"1px solid black", }}>
                                {pokemon.game}
                            </td>
                            <td>
                            <Link 
                                className='nav-link'
                                exact
                                to={`/edit/${pokemon._id}`}>
                                <button className="btn btn-primary">Edit</button>
                            </Link>
                                <button onClick={()=>deleteHandler(pokemon._id)}>Delete</button>
                            </td>
                        </tr>
                    ))
                 }

                </tbody>
            </table>
        </div>

    </>
)
};

export default Display;