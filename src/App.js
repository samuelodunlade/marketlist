import Balance from "./bank_components/Balance";
import Broke from "./bank_components/Broke";
import Deposit from "./bank_components/Deposit";
import Rich from "./bank_components/Rich";
import Withdraw from "./bank_components/Withdraw";
import {useState} from "react";


function App () {
    // const balance = 2500; dont do this. Since balance changes, use hook useState to manage
            //useState(): import
       const [balance, setBalance]  = useState(0); //syntax for managing state
        // setBalance(1000)   Dont update a state like this
        // setBalance(balance + 1000): this should be activated by an event
        //handle withdrawal function
        function handleWithdraw(amount){
            //check if they are eligible to withdraw
            if(balance >= amount){
                setBalance(balance - amount)
            }else{
                alert("your balance is too low")
            }
        }
        //handle deposit function
        function handleDeposit(amount){

            setBalance(balance + amount);
        }

    return (
        <div className="container"> 
            <h1> Bank App </h1>
            {/* displaying components based on conditions */}
           
            {
                balance > 1000 ? <Rich/> : <Broke/>
            }

            <Balance bal = {balance}/>
            <Withdraw bal = {balance}  abc = {handleWithdraw}/>
            <Deposit bal = {balance} xyz={handleDeposit}/>
        </div>
    )

}


export default App;