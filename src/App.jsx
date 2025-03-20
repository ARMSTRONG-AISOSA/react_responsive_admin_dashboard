import { Routes, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/dashboard/Dashboard';
import ErrorPage from './pages/errorPage/ErrorPage';

function App() {

  return (
    <main>
      {/* <Navbar /> */}
      <Routes>
        <Route path='/react_responsive_admin_dashboard' element={<Dashboard />} />
        {/* Catch-all route for 404 errors */}
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </main>
  )
}

export default App
