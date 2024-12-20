import "./pagecontent.css"; //external styling
import xyz from "../hajia.jpg"

const PageContent = ({students}) => {
   
    return (
        <div className="row content">
            <div className="col">
                <h1 className="text-center"> Page Content </h1>
                <div className="row">
                    <div className="col-md-6">
                        <p>Image located Inside src folder</p>
                        <img  src={xyz} className="img-fluid" alt="an"/>
                    </div>
                    <div className="col-md-6">
                        <p>Image located Inside public folder</p>
                        <img  src="/goodlife.jpg" className="img-fluid" alt="good life" />
                    </div>
                </div>

                <div className="row">
                    {
                      students.map((student, index)=>{
                        return(
                            <div className="col-md-3 p-3 bg-primary">
                                <p> {student} </p>
                            </div>
                        )

                      })  
                    }      


                </div>
            </div>
        </div>
    )

}
export default PageContent; 