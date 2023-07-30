import React from "react"
import { useState } from "react"
import Select from "./Select"
import Writer from "./Writer"
import None from "./None"
import Coder from "./Coder"
import Coordinator from "./Coordinator"

export default function PortfolioContainer(){
const [currentCharacter, setCurrentCharacter] = useState("None")

const renderCharacter = () =>{
    if(currentCharacter === "None"){
        return <None/>
    }
    if(currentCharacter === "Writer"){
        return <Writer/>
    }
    if(currentCharacter === "Coder"){
        return <Coder/>
    }
    if(currentCharacter === "Coordinator"){
        return <Coordinator/>
    }
}

const changeCharacter = (character) => setCurrentCharacter(character)

return(
    <body id="body">
    <h1 id="title">Choose Your Fighter!</h1>
    <Select currentCharacter={currentCharacter} changeCharacter={changeCharacter}/>
    {renderCharacter()}
    </body>
)

}

