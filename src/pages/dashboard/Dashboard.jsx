import { useState } from 'react'; import './dashboard.css';
import Header from '../../components/header/Header';
import SideBar from '../../components/sideBar/SideBar';
import MainSection from '../../components/mainSection/MainSection';

const Dashboard = () => {

  // State Management
  const [openSideBarToggle, setOpenSideBarToggle] = useState(false);

  // Function
  // Open Sidebar Onclick
  const OpenSideBar = () => {
    setOpenSideBarToggle(!openSideBarToggle);
    console.log(openSideBarToggle);
  }

  return (
    <div className='grid-container'>
      <Header OpenSideBar={OpenSideBar} />
      <SideBar
        OpenSideBar={OpenSideBar}
        openSideBarToggle={openSideBarToggle}
      />
      <MainSection />
    </div>
  )
}

export default Dashboard;
