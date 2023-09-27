import { FormWrapper } from "./FormWrapper"

type AddressData = {
  street: string
  city: string
  state: string
  zip: string
}

type AddressFormProps = AddressData & {
  updateFields: (fields: Partial<AddressData>) => void
}

export default function AddressForm({
  street,
  city,
  state,
  zip,
  updateFields,
}: AddressFormProps) {
  return (
    <FormWrapper title="Address Details">
      <label>Street</label>
      <input
        autoFocus
        required
        type="text"
        placeholder="555 Wallaby Way"
        pattern="[\w\d\s.#]{2,}"
        value={street}
        onChange={e => updateFields({ street: e.target.value })}
      />
      <label>City</label>
      <input
        required
        type="text"
        placeholder="New York"
        pattern="[\w\d\s.#]{2,}"
        value={city}
        onChange={e => updateFields({ city: e.target.value })}
      />
      <label>State</label>
      <input
        required
        type="text"
        value={state}
        onChange={e => updateFields({ state: e.target.value })}
      />
      <label>Zip</label>
      <input
        required
        type="text"
        placeholder="12345"
        pattern="[0-9]{5}"
        maxLength = {5}
        value={zip}
        onChange={e => updateFields({ zip: e.target.value })}
      />
    </FormWrapper>
  )
}
