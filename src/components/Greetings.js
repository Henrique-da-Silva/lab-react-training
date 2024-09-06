import React from "react";

function Greeting ({lang, children}){

    let greeting = ""

    switch (lang){

        case "de":
            greeting = "Hallo";
            break;

        case "en":
            greeting = "Hello";
            break;
            
        case "es":
            greeting = "Hola";
            break;
        
        case "fr":
            greeting = "Bonjour";
            break;   
            
        default:
            greeting = "Hello";    
    }

    return(
        
        <div className="greetings" style={{border: '1px solid #ccc', padding: '10px', margin: '10px'}}>

        {greeting} {children}

        </div>
    );



}

export default Greeting;