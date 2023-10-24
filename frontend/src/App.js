import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import AuthPage from './pages/Auth';
import EventsPage from './pages/Events';
import BookingsPage from './pages/Bookings';
import MainNavigation from './components/Navigation/MainNavigation';

const App = () => {
    return (
        <BrowserRouter>
            <>
                <MainNavigation />
                <main>
                    <Routes>
                        <Route path='/' element={<Navigate to='/auth' />} />
                        <Route path='/auth' element={<AuthPage />} />
                        <Route path='/events' element={<EventsPage />} />
                        <Route path='/bookings' element={<BookingsPage />} />
                    </Routes>
                </main>
            </>
        </BrowserRouter>
    );
}

export default App;
