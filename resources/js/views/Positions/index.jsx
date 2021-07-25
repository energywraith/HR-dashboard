import ToggleComponent from "../../components/ToggleComponent"
import AddPositionForm from '../../components/AddPositionForm'
import axios from "axios"

const Positions = ({ positions, setPositions, company }) => {
  const deletePosition = async (id) => {
    const response = await axios.post(`/api/position/delete/${id}`)
    setPositions(positions.filter(position => position.id !== response.data.id))
  }

  return (
    <section className='m-4 d-flex flex-column'>
      <ToggleComponent
        buttonLabel='Add position'
        buttonClassName='btn btn-outline-primary align-self-end'
      >
        <AddPositionForm company={company} positions={positions} setPositions={setPositions} />
      </ToggleComponent>

      {positions.length > 0 && 
        positions
          .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
          .map(position => <ul key={position.id} className='mt-2 p-4 bg-white border rounded'>
            <li className='h3'>{position.name}</li>
            <li>{position.description}</li>
            <button className='mt-3 btn btn-outline-danger' onClick={() => deletePosition(position.id)}> Delete </button>
          </ul>)
      }
    </section>
  )
}

export default Positions