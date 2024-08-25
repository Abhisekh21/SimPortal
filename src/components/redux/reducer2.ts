const reducer2 = (state = { result:{message:'',action:true}}, action: any) => {

    switch (action.type) {
        case 'sim-validate':
            return { ...state, result: action.payload }
        case 'validate-customer':
            return {...state,result:action.payload}
        case 'validate-customer-details':
            return {...state,result:action.payload}
        case 'special-offer':
            return {...state,result:action.payload}
        default:
            return state;
    }
}




export default reducer2;