import { TableCell, TableRow } from "@mui/material"

interface childprops {
    unique_id_number:string ,
    date_of_birth: string,
    first_name: string,
    last_name: string,
    email_address: string,
    aadhar_no: string,
    sim_number: string,
    state: string
  }



function TableData(props:childprops) {
    const {unique_id_number,date_of_birth,first_name,last_name,email_address,aadhar_no,sim_number,state} = props
    return (
        <>
            <TableRow>
                <TableCell align="center">{unique_id_number}</TableCell>
                <TableCell align="center">{first_name+last_name}</TableCell>
                <TableCell align="center">{email_address}</TableCell>
                <TableCell align="center">{aadhar_no}</TableCell>
                <TableCell align="center">{sim_number}</TableCell>
                <TableCell align="center">{state}</TableCell>
        </TableRow >
              
        </>
    )
}

export default TableData