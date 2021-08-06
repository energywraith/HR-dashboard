import DashboardHeader from "./DashboardHeader"
import Nav from "./Nav"
import './Dashboard.scss'

const Dashboard = (props) => {
  return (
    <div className='dashboard-container'>
      <DashboardHeader />
      <Nav links={[
        { to: '/dashboard', name: 'Home' },
        { to: '/dashboard/company-details', name: 'Company details' },
        { to: '/dashboard/application-form', name: 'Application form' },
        { to: '/dashboard/positions', name: 'Open positions' },
        { to: '/dashboard/applications', name: 'Received applications' }
      ]}/>

      <main>
        {props.children}
      </main>
    </div>
  )
}

export default Dashboard