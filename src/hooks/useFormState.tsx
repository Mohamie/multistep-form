import { useReducer } from "react"

const initialForm: Form = {
    name: "",
    email: "",
    phoneNumber: "",
    plan: "ARCADE",
    planBillingFrequency: "MONTHLY",
    addOns: [],
}

export default function useFormState(){
    const [formData, setFormInfo] = useReducer(formReducer, initialForm);

    return { formData, setFormInfo }
}

function formReducer(state: Form, action: FormAction): Form{
     
    switch(action.type){
        case "NAME":
            return {...state, name: action.value}
        
        case "EMAIL":
            return {...state, email: action.value}
        
        case "PHONE":
            return {...state, phoneNumber: action.value}
       
        case "PLAN":
            return {...state, plan: action.value}
        
        case "BILL_FREQUENCY":
            return {...state, planBillingFrequency: action.value}
        
        case "ADDONS":
            const alreadyAdded = Boolean(state.addOns.find(addon => addon === action.value));
            let addOnList = state.addOns;
            
            if(alreadyAdded && addOnList.length){
                addOnList = addOnList.filter(addon => addon !== action.value);
            }else{
                addOnList.push(action.value)
            }

            return {...state, addOns: addOnList}

        default:
            return {...state}
    }
}