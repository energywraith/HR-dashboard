import { Link } from "react-router-dom"
import LoginForm from "./LoginForm"
import FormSection from "../../../layouts/FormSection"

const Login = () => {
  return (
    <FormSection
      header='Log in to your account'
      form={<LoginForm formClassName='
        d-flex flex-column justify-content-center mt-4
      '/>}
      note={
        <b> Need an account?
          <Link to='/register' className='text-primary'> Sign up </Link>
        </b>
      }
    />
  )
}

export default Login