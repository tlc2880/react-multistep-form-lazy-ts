import { FormWrapper } from "./FormWrapper"

type PersonalData = {
  firstName: string
  lastName: string
  age: string
}

type PersonalFormProps = PersonalData & {
  updateFields: (fields: Partial<PersonalData>) => void
}

export default function PersonalForm({
  firstName,
  lastName,
  age,
  updateFields,
}: PersonalFormProps) {
  return (
    <FormWrapper title="Personal Details">
      <label>First Name</label>
      <input
        autoFocus
        required
        type="text"
        value={firstName}
        onChange={e => updateFields({ firstName: e.target.value })}
      />
      <label>Last Name</label>
      <input
        required
        type="text"
        value={lastName}
        onChange={e => updateFields({ lastName: e.target.value })}
      />
      <label>Age</label>
      <input
        required
        min={1}
        type="number"
        value={age}
        onChange={e => updateFields({ age: e.target.value })}
      />
    </FormWrapper>
  )
}
