import FormInputGroup from "../FormInputGroup"
import FormSelectGroup from "../FormSelectGroup"
import FormListGroup from "../FormListGroup"
import "./AddPositionForm.scss"
import usePositionFormResource from "../../hooks/usePositionFormResource"

const AddPositionForm = ({ company, positions, setPositions, closeForm }) => {
  // Had no idea how to handle so many states in one component
  // I moved states with handleFormSubmit function to usePositionFormResource hook 
  // to make the component is smaller atleast
  const { formStates, handleFormSubmit } = usePositionFormResource(company, positions, setPositions, closeForm)

  return (
    <form className='mt-3 p-3 border rounded bg-white d-flex flex-column' onSubmit={handleFormSubmit}>
      <FormInputGroup
        stateValue={formStates.name}
        setStateValue={formStates.setName}
        label='Name'
        placeholder='Google software engineer'
        note='Let the interested one know he is in the right place.'
        failedValidation={formStates.validationErrors.name}
      />
      <FormInputGroup
        stateValue={formStates.description}
        setStateValue={formStates.setDescription}
        label='Description'
        placeholder='Google is a...'
        note='Give your employee a brief description of your company or the position.'
        failedValidation={formStates.validationErrors.description}
      />
      <FormInputGroup
        stateValue={formStates.location}
        setStateValue={formStates.setLocation}
        label='Location'
        placeholder='Silicon Valley'
      />
      <FormSelectGroup
        stateValue={formStates.seniority}
        setStateValue={formStates.setSeniority}
        label='Seniority'
        options={[
          'All',
          'Junior',
          'Regular',
          'Senior'
        ]}
      />
      <div className="row mt-3">
        <FormInputGroup
          stateValue={formStates.salaryFrom}
          setStateValue={formStates.setSalaryFrom}
          label='From'
          placeholder='1500'
          className="col-2 m-0"
        />
        <FormInputGroup
          stateValue={formStates.salaryTo}
          setStateValue={formStates.setSalaryTo}
          label='To'
          placeholder='6000'
          className="col-2 m-0"
        />
        <FormInputGroup
          stateValue={formStates.salaryCurrency}
          setStateValue={formStates.setSalaryCurrency}
          label='Currency'
          placeholder='EUR'
          className="col-2 m-0"
        />
      </div>
      <small className='form-text text-muted'>
        If you want undisclosed salary, leave above fields empty.
      </small>
      <FormListGroup
        stateList={formStates.responsibilities}
        setStateList={formStates.setResponsibilities}
        toggleButtonLabel='Responsibilities'
      />
      <FormListGroup
        stateList={formStates.expectations}
        setStateList={formStates.setExpectations}
        toggleButtonLabel='Expectations'
      />
      <FormListGroup
        stateList={formStates.niceToHave}
        setStateList={formStates.setNiceToHave}
        toggleButtonLabel='Nice to have'
      />
      <FormListGroup
        stateList={formStates.benefits}
        setStateList={formStates.setBenefits}
        toggleButtonLabel='Benefits'
      />

      <button type='submit' className='btn btn-primary mt-5 px-4 align-self-end'> Add </button>
    </form>
  )
}

export default AddPositionForm