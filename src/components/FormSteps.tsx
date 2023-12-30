import "../css/FormSteps.scss"

export default function FormSteps(props: {currentStep: number}){
    return <div className="form__steps">
        <div className="step --selected">1</div>
        <div className="step">2</div>
        <div className="step">3</div>
        <div className="step">4</div>
    </div>
}