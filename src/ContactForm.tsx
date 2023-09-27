import { FormWrapper } from "./FormWrapper"

type ContactData = {
  email: string
  phone: string
}

type ContactFormProps = ContactData & {
  updateFields: (fields: Partial<ContactData>) => void
}

export default function ContactForm({
  email,
  phone,
  updateFields,
}: ContactFormProps) {
  return (
    <FormWrapper title="Contact Details">
      <label>Email</label>
      <input
        autoFocus
        required
        type="email"
        value={email}
        onChange={e => updateFields({ email: e.target.value })}
      />
      <label>Phone</label>
      <input
        required
        type="phone"
        value={phone}
        onChange={e => updateFields({ phone: e.target.value })}
      />
    </FormWrapper>
  )
}
