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
        placeholder="Joe"
        pattern="([A-Z])[\w+.]{1,}"
        value={firstName}
        onChange={e => updateFields({ firstName: e.target.value })}
      />
      <label>Last Name</label>
      <input
        required
        type="text"
        placeholder="Doe"
        pattern="([A-Z])[\w+.]{1,}"
        value={lastName}
        onChange={e => updateFields({ lastName: e.target.value })}
      />
      <label>Age</label>
      <input
        required
        min={1}
        type="text"
        placeholder="50"
        pattern="\b([1-9]|[1-9][0-9]|1[01][0-9]|12[0])\b" // maximum is 120 yrs old
        maxLength={3}
        value={age}
        onChange={e => updateFields({ age: e.target.value })}
      />
    </FormWrapper>
  )
}
