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
      <label>Phone</label>
      <input
        required
        type="phone"
        placeholder="123-456-7890"
        pattern="^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$"
        value={phone}
        onChange={e => updateFields({ phone: e.target.value })}
      />
      <label>Email</label>
      <input
        autoFocus
        required
        type="text"
        pattern="^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$"
        value={email}
        onChange={e => updateFields({ email: e.target.value })}
      />
    </FormWrapper>
  )
}
