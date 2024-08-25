import { Alert, Button, Collapse, IconButton, Stack, TextField } from '@mui/material'
import react, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { validatesim } from '../redux/action'
import { useSelector } from 'react-redux'
import CloseIcon from '@mui/icons-material/Close';
interface Istate {
    customer: {
        movies: any[]
    }
    simvalidate: {
        result: { message: '', action: true }
    }
}

const ValidateSim = () => {
    const [sim, setSim] = useState<string>('')
    const [service, setService] = useState<string>('')
    const [display, setDisplay] = useState<boolean>(false)
    const [open, setOpen] = useState(true);
    const dispatch = useDispatch()


    const { result } = useSelector((state: Istate) => {
        return state.simvalidate
    })


    console.log(result.message)
    return (
        <>
            <div style={{ marginLeft: '20%', marginTop: '5%', padding: '20px' }}>

                <div style={{ display: 'flex', flexDirection: 'column', padding: '10px', gap: '10px', justifyContent: 'center', alignItems: 'center' }}>
                    <h1 style={{ color: 'blue' }}>VALIDATE SIM </h1>
                    <TextField variant='outlined' placeholder='Sim Number' value={sim} onChange={(e) => {
                        setSim(e.target.value)
                    }}></TextField>
                    <TextField variant='outlined' placeholder='Service Number' value={service} onChange={(e) => {
                        setService(e.target.value)
                    }}></TextField>
                    <Button variant='contained' onClick={() => {
                        dispatch(validatesim(sim, service))
                        setDisplay(true)
                    }} style={{ backgroundColor: '#ED6C02' }}>Validate</Button>
                    {
                        display ? (result.action ? <Collapse in={open}>
                            <Alert
                             variant='filled'
                             severity='success'
                                action={
                                    <IconButton
                                        aria-label="close"
                                        color="inherit"
                                        size="small"
                                        onClick={() => {
                                            setOpen(false);
                                        }}
                                    >
                                        <CloseIcon fontSize="inherit" />
                                    </IconButton>
                                }
                                sx={{ mb: 2 }}
                            >
                                {result.message}
                            </Alert>
                        </Collapse> : <Collapse in={open}>
                            <Alert
                                variant='filled'
                                severity='error'
                                action={
                                    <IconButton
                                        aria-label="close"
                                        color="inherit"
                                        size="small"
                                        onClick={() => {
                                            setOpen(false);
                                        }}
                                    >
                                        <CloseIcon fontSize="inherit" />
                                    </IconButton>
                                }
                                sx={{ mb: 2 }}
                            >
                                {result.message}
                            </Alert>
                        </Collapse>) : <h1></h1>
                    }

                </div>


            </div>


        </>
    )
}

export default ValidateSim