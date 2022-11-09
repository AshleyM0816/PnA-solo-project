import {useState} from "react";
import Form from "../components/Form";
import Display from "../components/Display";

const Main = ()=> {
    const [pokemonList, setPokemonList] = useState([]);
    return(
        <>
            <Display pokemonList={pokemonList} setPokemonList={setPokemonList}/>
            <Form pokemonList={pokemonList} setPokemonList={setPokemonList}/>
        </>
    )
}

export default Main;