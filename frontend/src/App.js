import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import AuthPage from './pages/Auth';
import EventsPage from './pages/Events';
import BookingPage from './pages/Bookings';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Navigate to='/auth' />} />
                <Route path='/auth' element={<AuthPage />} />
                <Route path='/events' element={<EventsPage />} />
                <Route path='/booking' element={<BookingPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
