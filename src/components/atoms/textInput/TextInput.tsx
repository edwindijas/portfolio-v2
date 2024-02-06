import { type ChangeEvent, useState } from 'react'

const TextInput = (
  {
    label,
    onChange
  }: TextInputProps
): JSX.Element => {

  const [value, setValue] = useState('')

  const handleChange = ({target:{value: val}}: ChangeEvent<HTMLInputElement>): void => {
    setValue(val)
  }

  return <label className='flex gap-2 justify-between items-center p-5 border-b' >
    {label}
    <input 
      className='border h-8 w-30'
      type='text' value={value} onChange={handleChange} />
  </label>


}

interface TextInputProps {
  label: string,
  onChange?: (v: string) => void
}


export default TextInput