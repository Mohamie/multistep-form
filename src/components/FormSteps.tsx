import "../css/FormSteps.scss"

export default function FormSteps(props: {currentStep: Step}){
    const { currentStep } = props;

    return <div className="form__steps">
        <div className={`step ${currentStep === 1 ? '--selected' : ''}`}>1</div>
        <div className={`step ${currentStep === 2 ? '--selected' : ''}`}>2</div>
        <div className={`step ${currentStep === 3 ? '--selected' : ''}`}>3</div>
        <div className={`step ${currentStep === 4 ? '--selected' : ''}`}>4</div>
    </div>
}