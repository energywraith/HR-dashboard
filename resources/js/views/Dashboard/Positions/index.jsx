import { useRef } from 'react';
import axios from "axios"
import ToggleComponent from "../../../components/ToggleComponent"
import AddPositionForm from '../../../components/AddPositionForm'

const Positions = ({ positions, setPositions, company }) => {
  const toggleComponentRef = useRef(null)

  const deletePosition = async (id) => {
    const response = await axios.post(`/api/position/delete/${id}`)
    setPositions(positions.filter(position => position.id !== response.data.id))
  }

  return (
    <section className='m-4 d-flex flex-column'>
      <ToggleComponent
        buttonLabel='Add position'
        buttonHideLabel='Hide form'
        buttonClassName='btn btn-primary border align-self-end'
        ref={toggleComponentRef}
      >
        <AddPositionForm
          company={company}
          positions={positions}
          setPositions={setPositions}
          closeForm={() => {toggleComponentRef.current.click()}}
        />
      </ToggleComponent>

      {positions.length > 0 && 
        positions
          .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
          .map(position => <ul key={position.id} className='mt-2 p-4 bg-white border rounded'>
            <li className='h3'>{position.name}</li>
            <li>{position.description}</li>
            <li>
              <a href={`${window.location.origin}/${position.hash_url}`}> Link </a>
            </li>
            <button className='mt-3 btn btn-outline-danger' onClick={() => deletePosition(position.id)}> Delete </button>
          </ul>)
      }
    </section>
  )
}

export default Positions