import "../css/Form.scss"
import useFormState from "../hooks/useFormState";
import { getFormDataFeed } from "../service/FormDataFeed";
import FormDescription from "./FormDescription";
import FormSummary from "./FormSummary";
import AddOnInputs from "./Inputs/AddonsInputs";
import PersonalInfoInput from "./Inputs/InfoInputs";
import PlanInputs from "./Inputs/PlanInputs";

type FormProps = {
    activeStep: Step
}

const formDataFeed = getFormDataFeed();

export default function Form(props: FormProps){
    const { activeStep } = props;
    const { formData, setFormInfo } = useFormState();

    return <div className="form_wrapper">
        <FormDescription description={formDataFeed.descriptions[activeStep - 1]}/>
        {
            activeStep === 1 && 
            <PersonalInfoInput 
                name={formData.name} 
                email={formData.email} 
                phone={formData.phoneNumber}
                updateInfoForm={setFormInfo}
            />
        }
        
        {
            activeStep === 2 && 
            <PlanInputs
                plan={formData.plan} 
                planBilling={formData.planBillingFrequency}
                planFeed={formDataFeed.plan[formData.planBillingFrequency]} 
                updatePlanForm={setFormInfo}
            />
        }

        {
            activeStep === 3 && 
            <AddOnInputs 
                addOns={formData.addOns}
                addOnFeed={formDataFeed.addOns[formData.planBillingFrequency]} 
                updateAddonForm={setFormInfo}
            />
        }

        {
            activeStep === 4 && 
            <FormSummary
                form={formData}
                dataFeed={formDataFeed}
            /> 
        }
    </div>
}