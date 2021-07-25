import { useEffect } from "react"

const FormSelectGroup = ({ options, label, setValue }) => {
  const selectId = label.replace(/\s/g, '').toLowerCase()

  useEffect(() => {
    // On first render set the output value to the first option
    setValue(options[0])
  }, [])

  const handleSelectChange = (event) => {
    setValue(event.target.value)
  }

  return (
    <>
      <label htmlFor={selectId}> {label} </label>
      <select id={selectId} className="custom-select"
      onChange={handleSelectChange}
      defaultValue={options[0]}
      >
        {options.map((optionValue, index) =>
          <option value={optionValue} key={index}>
            {optionValue}
          </option>
        )}
      </select>
    </>
  )
}

export default FormSelectGroup