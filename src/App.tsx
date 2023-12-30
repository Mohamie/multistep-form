import './css/App.scss'
import FormSteps from './components/FormSteps'
import FooterButtons from './components/FooterButtons'
import Form from './components/Form'

function App() {
  
  return (
    <>
      <FormSteps currentStep={1}/>
      <Form/>
      <FooterButtons/>
    </>
  )
}

export default App
