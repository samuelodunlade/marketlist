import { createContext, useEffect, useState } from "react"; //useState|useEffect|createContext()
const ListContext = createContext();
//a provider
const ListProvider = ({children}) => {
    //set up the state
    //create a function  check inside localStorage and see if there is any marketList in the localstorage, if it is not there, it will return empty array
    function fetchListFromLocalStorage(){
        const initialList = localStorage.getItem('marketList');
        const realList = initialList ? JSON.parse(initialList) : [];
        return realList;
    }



    const [list, setList] = useState(fetchListFromLocalStorage());
    //set up all  functions  that the components need 

    //useEffect will help us to update localstorage whenever a new list is created or deleted

    useEffect(function(){
        //whenever the list changes, we will update the localstorage
        localStorage.setItem("marketList", JSON.stringify(list));

    }, [list])


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
        <ListContext.Provider value={ {list, addNewProduct, deleteItem} }>
            {children}
        </ListContext.Provider>
    )
}
export {ListContext, ListProvider}
