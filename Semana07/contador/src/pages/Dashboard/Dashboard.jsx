import './Dashboard.css'

import Header from '../../components/Header/Header'
import Main from '../../components/Main/Main'
import Footer from '../../components/Footer/Footer'

export default function Dashboard() {
  return (
    <div className='dashboard-main'>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  )
}
