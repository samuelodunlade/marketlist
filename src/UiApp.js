import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./ui_component/Header";
import Navbar from "./ui_component/Navbar";
import PageContent from "./ui_component/PageContent";
import Footer from "./ui_component/Footer";
import  "./main.css"; 
import Students from "./ui_component/Students";
function UiApp(){
  let amount = 2000;
  let cartCount = 2;
  let programmers = [
    {name: 'John', score: 48},
    {name: 'Ola', score: 30},
    {name: 'Yemi', score: 45},
    {name: 'Sule', score: 23},
    {name: 'Goke', score: 15},
    {name: 'Yemisi', score: 49}
 ]
  let students = ["Sule", "Oyin", "Kamo", "Bimbo"];
  //every functional component must return a jsx
  return (
      <div className="container">
         <Header  amt = {amount}  cc={cartCount}   />
         <Navbar xyz = {amount} cartCount={cartCount}/>
         <PageContent students={students}/>
         <Students prog = {programmers}  />
         <Footer/>
      </div>
  )


}

export default UiApp;