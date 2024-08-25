
import { Dispatch } from "redux"
import Axios from 'axios'
import exp from "constants"
import { error } from "console"



function fetchuser():any{
    
    return (dispatch:Dispatch)=>{
        return Axios.get("http://localhost:3000/api/get_customer_details/")
            .then((res)=>{

                console.log(res.data)
                
                dispatch({
                    type:'Movies',
                    payload:res.data
                })
                
                

            }).catch(()=>{
                console.log('failed to fetch data')
            })
        }

}

function validatesim(sim:string,service:string):any{
    return (dispatch:Dispatch)=>{
        return Axios.post("http://localhost:3000/api/validate-sim/",{simNumber:sim,
        serviceNumber:service
        })
            .then((res)=>{

                console.log(res.data)
                
                dispatch({
                    type:'sim-validate',
                    payload:res.data
                })
                

            })
            .catch(()=>{
                console.log('failed to connect to API enpoints')
            })
    }

}
function validatecustomer(email:string,dob:string):any{
    return (dispatch:Dispatch)=>{
        return Axios.post("http://localhost:3000/api/validate-customer/",{email:email,
        dob:dob
        })
            .then((res)=>{

                console.log(res.data)
                
                dispatch({
                    type:'validate-customer',
                    payload:res.data
                })
                

            })
            .catch(()=>{
                console.log('failed to connect to API enpoints')
            })
    }

}
function validatecustomerdetails(first_name:string,last_name:string,email:string):any{
    return (dispatch:Dispatch)=>{
        return Axios.post("http://localhost:3000/api/validate-customer-personal-details/",{first_name:first_name,last_name:last_name,confirm_email:email
        })
            .then((res)=>{

                console.log(res.data)
                
                dispatch({
                    type:'validate-customer-details',
                    payload:res.data
                })
                

            })
            .catch(()=>{
                console.log('failed to connect to API enpoints')
            })
    }

}
function validateid(first_name:string,last_name:string,dob:string,aadhar:string):any{
    return (dispatch:Dispatch)=>{
        return Axios.post(`http://localhost:3000/api/validate-id-proof/${987654321234567}`,{
            aadhar_number:aadhar, first_name:first_name, last_name:last_name, date_of_birth:dob 
        })
            .then((res)=>{

                console.log(res.data)
                
                dispatch({
                    type:'validate-customer-details',
                    payload:res.data
                })
                

            })
            .catch(()=>{
                console.log('failed to connect to API enpoints')
            })
    }

}
function specialoffer(sim:string,service:string):any{
    return (dispatch:Dispatch)=>{
        return Axios.post("http://localhost:3000/api/special-offers/",{simNumber:sim,
        serviceNumber:service
        })
            .then((res)=>{

                console.log(res.data)
                
                dispatch({
                    type:'special-offer',
                    payload:res.data
                })
                

            })
            .catch(()=>{
                console.log('failed to connect to API enpoints')
            })
    }

}

export  {fetchuser,validatesim,validatecustomer,validatecustomerdetails,validateid,specialoffer}
