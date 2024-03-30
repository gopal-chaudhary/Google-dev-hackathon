import { Outlet, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { Home, Login, NotFound, Profile, Register } from './pages';
import { useSelector } from 'react-redux';

function Layout() {
    const { user } = useSelector((state) => state.user);
    console.log(user);
    const location = useLocation();

    return (user?.token) ? (
        <Outlet />
    ) : (
        <Navigate to='/login' state={{ from: location }} replace />
    );
}

function App() {
    const { theme } = useSelector((state) => state.theme);
    return (
        <div data-theme={theme} className='w-full min-h-[100vh]'>
            <Routes>
                <Route element={<Layout />}>
                    <Route path='/' element={<Home />} />
                    <Route path='/profile/:id?' element={<Profile />} />
                </Route>
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default App;
