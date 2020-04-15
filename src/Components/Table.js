import React from 'react'

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Number oF Visits</th>
                <th>Date</th>
                <th>Items Ordered</th>
            </tr>
        </thead>
    )
}




const TableBody = props => {
    
   
    const rows = props.userData.map((row, index) => {

        return (

            <div>
                
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.numOfVisits === '0' ? 'Today is your First Visit' :
                     row.numOfVisits === '1' ? 'This is your 2nd Visit}' :
                     row.numOfVisits === '2' ? 'This is your 3rd Visit}' :              
                     row.numOfVisits}</td>
                
                <td>{row.date}</td>
                <td>{row.dishName}</td>
           
                </tr>        
                
            </div>

        )
        
    })
    return <tbody>{rows}</tbody>

}
    

const Table = props =>{
    const {userData} = props;

    
    return (
        <table>
            <TableHeader />
        <TableBody userData={userData}  />
        
        </table>
    )
}

export default Table