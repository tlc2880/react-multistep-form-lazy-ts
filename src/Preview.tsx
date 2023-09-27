import { FormWrapper } from "./FormWrapper"
import { FormData } from "./form.type"

type PreviewFormProps = {
  data: FormData
}

export default function Preview({
    data
}: PreviewFormProps) {
  return (
    <FormWrapper title="Preview">
      <h4>Personal Details:</h4>
      <h5>First: {data.firstName}</h5>
      <h5>Last: {data.lastName}</h5>
      <h5>Age: {data.age}</h5>
      <br />
      <h4>Contact Details:</h4>
      <h5>Email: {data.email}</h5>
      <h5>Phone: {data.phone}</h5>
      <br />
      <h4>Address Details:</h4>
      <h5>Street: {data.street}</h5>
      <h5>City: {data.city}</h5>
      <h5>State: {data.state}</h5>
      <h5>Zip: {data.zip}</h5>
    </FormWrapper>
  )
}