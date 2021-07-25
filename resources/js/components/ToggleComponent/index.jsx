import { useState } from "react"

const ToggleComponent = ({ children, buttonLabel, buttonClassName }) => {
  const [visibility, setVisibility] = useState(false)

  const toggleVisibility = () => {
    setVisibility(!visibility)
  }

  return (
    <>
      <button onClick={toggleVisibility} className={buttonClassName}> {buttonLabel} </button>
      <div style={{ display: visibility ? 'block' : 'none' }}>
        {children}
      </div>
    </>
  )
}

export default ToggleComponent