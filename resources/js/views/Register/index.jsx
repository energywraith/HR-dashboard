import { Link } from "react-router-dom"
import RegisterForm from "../../components/RegisterForm"
import FormSection from "../../layouts/FormSection"

const Register = () => {
  return (
    <FormSection
      header='Register a new account'
      form={<RegisterForm formClassName='
        d-flex flex-column justify-content-center mt-4
      '/>}
      note={
        <b> Are you already registered?
          <Link to='/login' className='text-primary'> Log in </Link>
        </b>
      }
    />
  )
}

export default Register