//inline : background-color  backgroundColor, padding-left: paddingLeft
//inline styling 
const Header = (props) => {
    
    

    return (
        <div className="row">
            <div className="col">
                <h1 className="text-center" style={ { color:"white",backgroundColor: "green", minHeight: "20vh" } }> Header </h1>
                <p className="text-center"> Total Amount: {props.amt}  </p>
                <p> Number of cart Element: {props.cc}</p>
            </div>
        </div>
    )

}
export default Header; 