import { useState } from "react";

const AddItem = ({addNewProduct}) => {

    const [name, setName] = useState("");
    const[price, setPrice] = useState("");
    function handleSumit(e){
        e.preventDefault();
        // validation
        if(name === "" || price === ""){
            alert("All fields are required")
        }else{
            //generate a random number to serve as the id
            const id = Math.random(1, 100000000)+ Date.now() //generate a random number
            //form an object with it and send it to a function that will insert it into our state
            const item = {
                name: name, //the first name is the key expected by the state, value is what the user typed in the form
                price: price,
                id: id
            }
            addNewProduct(item)
        }
    }

  return (
    <div className="row">
        <div className="col-md-8 offset-md-2">
            <form onSubmit={handleSumit}>
                <input type="text" placeholder="product name" value={name} 
                onChange={ (e)=>{setName(e.target.value) } }/>

                <input type="number" placeholder="product price" value={price} onChange={ function(e){ setPrice(e.target.value)} } />

                <button className="btn btn-primary">Add Item To List</button>
            </form>
             
        </div>
    </div>
  )
}

export default AddItem