import { useState, useRef } from "react"
import ToggleComponent from "../ToggleComponent"

const FormListGroup = ({ toggleButtonLabel, setStateList }) => {
  const [list, setList] = useState([])
  const [input, setInput] = useState('')
  const inputElementRef = useRef()

  const handleAddItem = () => {
    const newValue = inputElementRef.current.value
    
    if (!list.includes(newValue) && newValue !== '') {
      setList([...list, newValue])
      setStateList([...list, newValue])
      setInput('')
    }
  }

  const handleDeleteItem = (item) => {
    list.includes(item) &&
      setList(list.filter(listItem => listItem !== item))

    if (list.includes(item)) {
      setList(list.filter(listItem => listItem !== item))
      setStateList(list.filter(listItem => listItem !== item))
    }
  }

  return (
    <ToggleComponent
      buttonLabel={`⯈ ${toggleButtonLabel}`}
      buttonHideLabel={`▼ ${toggleButtonLabel}`}
      buttonClassName='form-toggle-button mt-3 align-self-start'
    >
      <div className='border rounded mt-2 border-bottom-0'>
        <div className='d-flex'>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className='form-control rounded-0 border-left-0 border-top-0 border-right-0 border-bottom'
            placeholder={`Input a new ${toggleButtonLabel.toLowerCase()} item`}
            ref={inputElementRef}
          />
          <button type='button' className='btn btn-success rounded-0' onClick={handleAddItem}> + </button>
        </div>
        <ul>
          {list.map(item =>
            <li className='d-flex border-bottom align-items-center'>
              <span className='flex-grow-1 pl-3'> {item} </span>
              <button type='button' className='btn btn-danger rounded-0' onClick={() => handleDeleteItem(item)}> x </button>
            </li>
          )}
        </ul>
      </div>
    </ToggleComponent>
  )
}

export default FormListGroup