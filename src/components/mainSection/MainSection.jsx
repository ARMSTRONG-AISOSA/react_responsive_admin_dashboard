import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill } from 'react-icons/bs';
import './mainSection.css';
import BarChartComponent from '../charts/barChart/BarChartComponent';
import LineChartComponent from '../charts/lineChart/lineChartComponent';
import { barChartData, lineChartData } from '../data/data';

const MainSection = () => {


  return (
    <div className='main-container'>
      <div className='main-title'>
        <h3>DASHBOARD</h3>
      </div>

      <div className='main-cards'>
        <div className='card'>
          <div className='card-inner'>
            <h3>PRODUCTS</h3>
            <BsFillArchiveFill className='card_icon' />
          </div>
          <h2>300</h2>
        </div>

        <div className='card'>
          <div className='card-inner'>
            <h3>CATEGORIES</h3>
            <BsFillGrid3X3GapFill className='card_icon' />
          </div>
          <h2>300</h2>
        </div>

        <div className='card'>
          <div className='card-inner'>
            <h3>CUSTOMERS</h3>
            <BsPeopleFill className='card_icon' />
          </div>
          <h2>33</h2>
        </div>

        <div className='card'>
          <div className='card-inner'>
            <h3>ALERTS</h3>
            <BsFillBellFill className='card_icon' />
          </div>
          <h2>42</h2>
        </div>
      </div>

      <div className='charts'>
        
      <BarChartComponent data={barChartData} />
        
      <LineChartComponent data={lineChartData} />
      </div>
    </div>
  )
}

export default MainSection
