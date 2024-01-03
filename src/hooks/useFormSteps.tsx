import { useState } from "react";

export default function useFormSteps(){
    const [currentStep, setStep] = useState<Step>(1);
    
    function nextStep(){
        if(currentStep === 4) return
        setStep(prevStep => prevStep + 1);
    }
    
    function prevStep(){
        if(currentStep === 1) return;

        setStep(prevStep => prevStep - 1)
    }

    return { currentStep, nextStep, prevStep }

} 