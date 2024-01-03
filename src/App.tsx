import './css/App.scss'
import FormSteps from './components/FormSteps'
import FooterButtons from './components/FooterButtons'
import Form from './components/Form'
import useFormSteps from './hooks/useFormSteps'

function App() {
  const { currentStep, nextStep, prevStep } = useFormSteps();
  
  return (
    <>
      <FormSteps currentStep={currentStep}/>
      <Form activeStep={currentStep}/>
      <FooterButtons 
        currentStep={currentStep} 
        nextStep={nextStep} 
        prevStep={prevStep}
      />
    </>
  )
}

export default App
