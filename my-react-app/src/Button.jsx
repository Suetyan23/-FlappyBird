function Button () {

    const handleClick = (e) => e.target.textContent ="Ouch !";
    
  return (
   <button className="button" onClick={(e) => handleClick(e)}
   >Click Me </button>
  );
}

export default Button

