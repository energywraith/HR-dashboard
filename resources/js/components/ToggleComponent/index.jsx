import React, { useState } from "react"

const ToggleComponent = React.forwardRef(({ children, buttonLabel, buttonHideLabel, buttonClassName }, ref) => {
  const [visibility, setVisibility] = useState(false)

  const toggleVisibility = () => {
    setVisibility(!visibility)
  }

  return (
    <>
      <button type="button" onClick={toggleVisibility} className={buttonClassName} ref={ref}>
        {!visibility ? buttonLabel : buttonHideLabel}
      </button>
      <div style={{ display: visibility ? 'block' : 'none' }}>
        {children}
      </div>
    </>
  )
})

export default ToggleComponent