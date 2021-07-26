import { useState } from "react"

const ToggleComponent = ({ children, buttonLabel, buttonHideLabel, buttonClassName }) => {
  const [visibility, setVisibility] = useState(false)

  const toggleVisibility = () => {
    setVisibility(!visibility)
  }

  return (
    <>
      <button type="button" onClick={toggleVisibility} className={buttonClassName}>
        {!visibility ? buttonLabel : buttonHideLabel}
      </button>
      <div style={{ display: visibility ? 'block' : 'none' }}>
        {children}
      </div>
    </>
  )
}

export default ToggleComponent