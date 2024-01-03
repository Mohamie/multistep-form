import '../css/FooterButtons.scss'

type FooterButtonsProps = {
    currentStep: Step,
    nextStep: () => void,
    prevStep: () => void,
}

export default function FooterButtons(props: FooterButtonsProps){
    const { currentStep, nextStep, prevStep } = props;

    return <div className="footer__buttons">
        <button className={`btn --previous ${currentStep === 1 ? '--hidden' : ''}`} onClick={prevStep}>Go Back</button>
        <button className={`btn --next ${currentStep === 4 ? '--confirm' : ''}`} onClick={nextStep}>
           {currentStep === 4 ? <>Confirm</>: <>Next Step</>}
        </button>
    </div>
}