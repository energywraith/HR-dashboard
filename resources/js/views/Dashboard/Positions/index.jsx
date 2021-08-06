import { useRef } from 'react';
import axios from "axios"
import ToggleComponent from "../../../components/ToggleComponent"
import AddPositionForm from '../../../components/AddPositionForm'
import Position from './Position';

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
          .map(position => <Position key={position.id} position={position} deletePosition={deletePosition} />)
      }
    </section>
  )
}

export default Positions