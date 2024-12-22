import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
    return (
        <div className="bg-background text-foreground dark:bg-dark-background dark:text-dark-foreground  prose max-w-none">
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}

export default App;
