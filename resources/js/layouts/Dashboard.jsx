import Header from "../components/Header"
import Nav from "../components/Nav"
import './Dashboard.scss'

const Dashboard = (props) => {
  return (
    <div className='dashboard-container'>
      <Header />
      <Nav />

      <main>
        {props.children}
      </main>
    </div>
  )
}

export default Dashboard