import Header from "../../components/Header"
import LoginForm from "../../components/LoginForm"
import { Link } from "react-router-dom"

const LoginSection = () => {
  return (
    <section className='container-fluid d-flex flex-column justify-content-center align-items-center mb-5'>
      <div className='bg-light border d-flex flex-column p-5 col-xl-4 col-md-6 col-sm-9 justify-content-around'>
        <Header headingLevel='h2'
          text='Log in to your account'
          className='align-self-center'
        />
        <LoginForm formClassName='d-flex flex-column justify-content-center mt-4 px-3' />
        <span className='align-self-center mt-4'>
          <b> Need an account? <Link to='/register' className='text-primary'> Sign up </Link> </b>
        </span>
      </div>
    </section>
  )
}

export default LoginSection