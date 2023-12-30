import "../css/Form.scss"
import FormDescription from "./FormDescription";
import AddOnInputs from "./Inputs/AddonsInputs";
import PersonalInfoInput from "./Inputs/InfoInputs";
import PlanInputs from "./Inputs/PlanInputs";

export default function Form(){
    return <div className="form_wrapper">
        <FormDescription/>
        <PersonalInfoInput/>
        {/* <PlanInputs/>
        <AddOnInputs/> */}
    </div>
}