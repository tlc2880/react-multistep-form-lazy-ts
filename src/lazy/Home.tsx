import { FormEvent, useState } from "react"
import { Link } from "react-router-dom"
import { useMultistepForm } from "../useMultistepForm"
import PersonalForm from "../PersonalForm"
import ContactForm from "../ContactForm"
import AddressForm from "../AddressForm"
import Preview from "../Preview"
import { FormData } from "../form.type"

const INITIAL_DATA: FormData = {
  firstName: "",
  lastName: "",
  age: "",
  phone: "",
  email: "",
  street: "",
  city: "",
  state: "",
  zip: ""
}

const Home = () => {
  const [data, setData] = useState(INITIAL_DATA)

  function updateFields(fields: Partial<FormData>) {
    setData(prev => {
      return { ...prev, ...fields }
    })
  }

  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      <PersonalForm {...data} updateFields={updateFields} />,
      <ContactForm {...data} updateFields={updateFields} />,
      <AddressForm {...data} updateFields={updateFields} />,
      <Preview data={data} />
    ])

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    if (!isLastStep) return next()
    console.log(data);
    alert("Successful Account Creation")
  }
  return (
    <main className="home">
<div className="form flex-col">
      <form onSubmit={onSubmit}>
        <div style={{ position: "relative", top: ".5rem", right: ".5rem" }}>
          {currentStepIndex + 1} / {steps.length}
        </div>
        {step}
       
        <div
          className="button-container"
          style={{
            marginTop: "1rem",
            display: "flex",
            gap: ".5rem",
            justifyContent: "flex-end",
          }}
        >
          {!isFirstStep && (
            <button 
              className={'button'} 
              type="button" onClick={back}
            >
              Back
            </button>
          )}
          <button 
            className={'button'} 
            type="submit">{isLastStep ? "Submit" : "Next"}</button>
        </div>
      </form>
    </div>
      <h1>
        <Link to="/admin">Go to Admin</Link>
      </h1>
    </main>
  )
}
export default Home
