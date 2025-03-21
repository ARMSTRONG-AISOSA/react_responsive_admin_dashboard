import { BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill } from 'react-icons/bs';
import './mainSection.css';

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
            <BsGrid1X2Fill className='card_icon' />
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

      <div className='charts'></div>

    </div>
  )
}

export default MainSection
