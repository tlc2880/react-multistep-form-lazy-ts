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
      <p>Email: {data.email}</p>
      <p>Phone: {data.phone}</p>
    </FormWrapper>
  )
}
