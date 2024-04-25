// Code Keypad Component Here


function Keypad (){

    function handleChange() {
        console.log('Entering password...')
      }
    return (
        <div>
            <input type="password" onChange={handleChange} placeholder="Enter passwords"></input>
        </div>
    )
}

export default Keypad;