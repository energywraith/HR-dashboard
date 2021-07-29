import axios from "axios"
import { useEffect } from "react"

const useRedirectIfLoggedIn = () => {
  useEffect(() => {
    const checkIfUserIsLoggedIn = async () => {
      const response = await axios.get('/api/user')
      
      if (response.data) {
        window.location.href = '/dashboard'
      }
    }

    checkIfUserIsLoggedIn()
  }, [])
}

export default useRedirectIfLoggedIn