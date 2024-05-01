
import "./pokemon.css"
import pokelist from "./pokelist";
import React, {Component} from "react";
class Pokemon extends Component{

    

    render(){

        function pad3zero(number) {
            return String(number).padStart(3, '0');
        }
        
        return(
                
                <div className="poke-list" >
                
                {pokelist.map(x=>
                <div className = "pokemon" >
                        <h1>{x.name}</h1>

                        {/* <img src ={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${x.id}.png`} alt="hey"/> */}

                            <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pad3zero(x.id)}.png`} alt="hey" />
                            
                        <h2>Type: {x.type}</h2>
                        <h2>EXP: {x.base_experience}</h2>
                </div>
                )}
               
                </div>
        );
    }
} 

export default Pokemon;