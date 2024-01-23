import React, {useState} from "react";



const App =()=>{
    const [version, setVersion] = useState(16)
    const [kilasy, setKilasy] = useState("m2")
    const [filiere, setFiliere] = useState("")

const handleClick = () =>{
    setVersion( version => version + 1)
} 


return(
    <div>
        <button onClick={handleClick}>cliquer ici</button>
        <label> kilasy:<input type="text" value={kilasy} 
            onChange={(e) => setKilasy(e.target.value)}
        /></label>
        <label>filiere:<input type="text" value={filiere} 
            onChange={(e) => setFiliere(e.target.value)}
        />
      </label>

        <p>votre version react est: {version}</p>
        <p>votre classe est de: {kilasy}</p>
        <p>votre classe est de: {filiere}</p>
    </div>
)
    
}

   


export default App;
