import React from "react";

export default function Select({currentCharacter, changeCharacter}) {

   
    return(
    <div className="container w-100">
        <div className="row border">
            <button id="writer" onClick={()=>changeCharacter("Writer")} className="col-sm border">
                Writer
            </button>
            <button id="coder" onClick={()=>changeCharacter("Coder")} className="col-sm border">
                Coder
            </button>
            <button id="coordinator" onClick={()=>changeCharacter("Coordinator")} className="col-sm border">
                Coordinator
            </button>


        </div>
        
        
        
        
        
        
        
        
    </div>


    )
}