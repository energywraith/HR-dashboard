import FormInputGroup from "../FormInputGroup"
import FormSelectGroup from "../FormSelectGroup"
import FormListGroup from "../FormListGroup"
import "./AddPositionForm.scss"
import usePositionFormResource from "../../hooks/usePositionFormResource"

const AddPositionForm = ({ company, positions, setPositions }) => {
  // Had no idea how to handle so many states in one component
  // I moved states with handleFormSubmit function to usePositionFormResource hook 
  // to make the component is smaller atleast
  const { formStates, handleFormSubmit } = usePositionFormResource(company, positions, setPositions)

  return (
    <form className='mt-3 p-3 border rounded bg-white d-flex flex-column' onSubmit={handleFormSubmit}>
      <FormInputGroup
        setStateValue={formStates.setName}
        label='Name'
        placeholder='Google software engineer'
        note='Let the interested one know he is in the right place.'
        failedValidation={formStates.validationErrors.name}
      />
      <FormInputGroup
        setStateValue={formStates.setDescription}
        label='Description'
        placeholder='Google is a...'
        note='Give your employee a brief description of your company or the position.'
        failedValidation={formStates.validationErrors.description}
      />
      <FormInputGroup
        setStateValue={formStates.setLocation}
        label='Location'
        placeholder='Silicon Valley'
      />
      <FormSelectGroup
        setValue={formStates.setSeniority}
        label='Seniority'
        options={[
          'All',
          'Junior',
          'Regular',
          'Senior'
        ]}
      />
      <div className="row mt-3">
        <div className="col-2">
          <FormInputGroup
            setStateValue={formStates.setSalaryFrom}
            label='From'
            placeholder='1500'
          />
        </div>
        <div className="col-2">
          <FormInputGroup
            setStateValue={formStates.setSalaryTo}
            label='To'
            placeholder='6000'
          />
        </div>
        <div className="col-2">
          <FormInputGroup
            setStateValue={formStates.setSalaryCurrency}
            label='Currency'
            placeholder='EUR'
          />
        </div>
      </div>
      <small> siema </small>
      <FormListGroup
        setStateList={formStates.setResponsibilities}
        toggleButtonLabel='Responsibilities'
      />
      <FormListGroup
        setStateList={formStates.setExpectations}
        toggleButtonLabel='Expectations'
      />
      <FormListGroup
        setStateList={formStates.setNiceToHave}
        toggleButtonLabel='Nice to have'
      />
      <FormListGroup
        setStateList={formStates.setBenefits}
        toggleButtonLabel='Benefits'
      />

      <button type='submit' className='btn btn-primary mt-5 px-4 align-self-end'> Add </button>
    </form>
  )
}

export default AddPositionForm