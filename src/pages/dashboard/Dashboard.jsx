import './dashboard.css';
import Header from '../../components/header/Header';
import SideBar from '../../components/sideBar/SideBar';
import Home from '../../components/mainSection/MainSection';

const Dashboard = () => {
  return (
    <div className='grid-container'>
      <Header />
      <SideBar />
      <Home />
    </div>
  )
}

export default Dashboard;
