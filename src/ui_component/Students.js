function Students({prog}){
    console.log(prog)


  return (
    <div className="row">
        <div className="col-md-10 offset-md-1">
            <table className="table table-striped">
                <thead>
                    <tr> 
                        <th>SN</th>
                        <th>Name</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        prog.map(function(pr, index){
                            return (
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{pr.name}</td>
                                    <td>{pr.score}</td>
                                </tr>

                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    </div>
  )  

}

export default Students