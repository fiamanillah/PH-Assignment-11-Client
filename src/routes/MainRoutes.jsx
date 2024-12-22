import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from '@/pages/HomePage';
import App from '@/App';
import AboutPage from '@/pages/AboutPage';
import SignUpPage from '@/pages/SignUpPage';
import LoginPage from '@/pages/LoginPage';

const ROUTES = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: 'about',
                element: <AboutPage />,
            },
            {
                path: 'sign-up',
                element: <SignUpPage />,
            },
            {
                path: 'login',
                element: <LoginPage />,
            },
        ],
    },
]);

export default function MainRoutes() {
    return <RouterProvider router={ROUTES} />;
}
