import react from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {fetchuser} from '../redux/action'
import { useSelector } from 'react-redux'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import TableData from './TableData'
interface Istate {
    customer:{
        movies:any[]
    }
    simvalidate:{
        result:[]
    }
}

const CustomerDetails = ()=>{
    const dispatch = useDispatch()
    const {movies} = useSelector((state:Istate)=>{
        return state.customer
    })

    useEffect(() => {
        dispatch(fetchuser())
    }, [])

    
    return (
       <>
       <div style={{marginLeft:'20%',marginTop:'5%',padding:'20px'}} >
        <h1> Customers</h1>
       <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow style={{backgroundColor:'#FEA900'}}>
                            <TableCell align="center" sx={{fontWeight:'bolder'}}>ID</TableCell>
                            <TableCell align="center" sx={{fontWeight:'bolder'}}>NAME</TableCell>
                            <TableCell align='center' sx={{fontWeight:'bolder'}}>EMAIL</TableCell>
                            <TableCell align="center" sx={{fontWeight:'bolder'}}>AADHAAR</TableCell>
                            <TableCell align='center' sx={{fontWeight:'bolder'}}>SIM</TableCell>
                            <TableCell align="center" sx={{fontWeight:'bolder'}}>STATE</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {movies.map((movie) => {
                            return <TableData {...movie}  key={movie.id} />
                        })}
                    </TableBody>
                </Table>
            </TableContainer>

       </div>
       </>
    )
}
export default CustomerDetails