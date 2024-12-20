import { useState } from "react"

const Deposit = ({bal, xyz}) => {
    
    const[amount, setAmount] = useState("") //this state will track whatever is type in dep amt

    function handleChange(e){
        // console.log(e.target.value)
        setAmount(e.target.value)
    }

    return (
      <div className="row">
          <div className="col-md-6 offset-md-3">
             
             <input type="number" placeholder="deposit amount" value={amount}  onChange= {handleChange}/>

             <button className="btn btn-primary" onClick={ function(){
                xyz(Number(amount))

             } }>Deposit</button>

             <p> Your current balance is: <strong> {bal} </strong> </p>
          </div>
      </div>
    )
  }
  
  export default Deposit