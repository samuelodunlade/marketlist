import AddItem from "./lister_component/AddItem"
import Header from "./lister_component/Header"
import Content from "./lister_component/Content"
import Footer from "./lister_component/Footer"
import { useState } from "react"

const Lister = () => {

    const initialList = [
        {name: "1liter greek yogurt parfait", price: "250000", id:100},
        {name: "Iphone 16", price: "2500000", id:200},
        {name: "Mac Laptop", price: "5500000", id:300},
        {name: "Plate of peppersoup", price: "10000", id:400},
    ];

   
   
    const [list, setList] = useState([]);
    //this function receives product and add it to list state
    function addNewProduct(product){
        setList([product, ...list]);
    }

    //a function that accept id of product to delete and then delete
    function deleteItem(id){
        // filter the current state and filter out product that has the id that was passed
        const filteredProduct = list.filter(function(li){
            return li.id !== id;
        })
        setList(filteredProduct)
    }


  return (
    <div className="container">
        <Header lists={list}/>
        <AddItem addNewProduct={addNewProduct}/>
        <Content  lists={list} deleteItem={deleteItem}/>
        <Footer/>
    </div>
  )
}

export default Lister