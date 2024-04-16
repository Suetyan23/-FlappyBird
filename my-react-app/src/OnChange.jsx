import {useState} from "react";

function OnChange () {
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');
    const [payment, setPayment] = useState('');
    const [shipping, setShipping] = useState('');
    const [color, setColor] = useState('');

    function handleNameChange(event){
        setName(event.target.value);
    }
    function handleCommentChange(event){
        setComment(event.target.value);
    }
    function handlePaymentChange(event){
        setPayment(event.target.value);
    }
    function handleShippingChange(event){
        setShipping(event.target.value);
    }
    function handleColorChange(event){
        setColor(event.target.value);
    }

return (
    <>

   <input className="input" value={name} onChange={handleNameChange}/>
   <p>Name: {name}</p>

   <input className="input" value={comment} onChange={handleCommentChange} placeholder="Enter delivery instructions"/>
   <p>Comment: {comment}</p>

   <select className="input" value={payment} onChange={handlePaymentChange}>
        <option value="">Select an option</option>
        <option value="Visa">Visa</option>
        <option value="FPX">FPX</option>
        <option value="TNG">Touch N Go</option>
    </select>
    <p>Payment: {payment}</p>

    <label>
            <input type="radio" value="Pick Up" 
            checked={shipping === "Pick Up" }
            onChange={handleShippingChange}/>
        Pick Up
    </label><br />

    <label>
            <input type="radio" value="Delivery" 
            checked={shipping === "Delivery" }
            onChange={handleShippingChange}/>
        Delivery
    </label>
    <p>Shipping: {shipping}</p>

    <h2>Color Picker</h2>
    <div style={{ backgroundColor: color}}>
        <p>Selected Color: {color}</p>
    </div>
    <label>Select a color</label>
    <input type="color" value={color} onChange={handleColorChange}/>
   </>  
  );
}

export default OnChange