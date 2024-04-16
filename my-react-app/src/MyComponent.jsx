import {useState} from "react"

function MyComponent () {
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);


    const updateName = () => {
        setName ("Sponge") 
    }

    const incrementAge = () => {
        setAge (age +1) ;
    }

    const decrementAge = () => {
        setAge (age -1) ;
    }

    const resetAge = () => {
        setAge (0) ;
    }

    const toggleEmployedStatus = () => {
        setIsEmployed (!isEmployed)
    }


  return (
   <div className="my-component">
    <p>Name: {name}</p>
    <button onClick={updateName}>Set Name</button>

    <p>Age: {age}</p>
    <button className="age-button" onClick={incrementAge}>Increment age</button>
    <button className="age-button" onClick={decrementAge}>Decrement age</button>
    <button className="age-button" onClick={resetAge}>Reset</button>

    <p>Is Employed:  {isEmployed ? "Yes" : "No"} </p>
    <button onClick={toggleEmployedStatus}>Toggle Status</button>


   </div>
  )
}

export default MyComponent