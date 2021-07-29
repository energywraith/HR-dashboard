import { useEffect } from "react"
import axios from "axios"
import Header from "../../components/Header"
import useRedirectIfLoggedIn from "../../hooks/useRedirectIfLoggedIn"

const FormSection = ({ header, form, note }) => {
  useRedirectIfLoggedIn()

  return (
    <section className='container-fluid d-flex flex-column justify-content-center align-items-center mb-5'>
      <div className='bg-light border d-flex flex-column p-5 col-xl-4 col-md-6 col-sm-9 justify-content-around'>
        <Header headingLevel='h2'
          text={header}
          className='align-self-center'
        />

        {form}

        <span className='align-self-center mt-4'>
          {note}
        </span>
      </div>
    </section>
  )
}

export default FormSection