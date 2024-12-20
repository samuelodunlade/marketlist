
const Navbar = ({xyz, cartCount}) => {
    // xyz = 1000; props are immutable
    //internal styling
    const styleH1 = {
        color: 'green',
        backgroundColor: "ghostwhite",
        padding: "20px",
        minHeight: "10vh"
    }

    return (
        <div className="row">
            <div className="col">
                <h1 className="text-center" style={styleH1}> Navbar </h1>
                <p> Total Amount : {xyz} </p>
                <p> Total Amount : {cartCount} </p>
            </div>
        </div>
    )

}
export default Navbar; 