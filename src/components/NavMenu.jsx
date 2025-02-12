import { NavLink } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

const LINKS = [
    { name: 'Home', path: '/' },
    { name: 'Add Tutorial', path: '/add-tutorial' },
    { name: 'Find Tutor', path: '/find-tutor' },
    { name: 'My Bookings', path: '/my-bookings' },
    { name: 'My Tutorials', path: '/my-tutorials' },
];

export default function NavMenu() {
    const { user } = useAuth(); // Get user info from context

    // If user is logged in, show all links; otherwise, show only "Home" and "Find Tutor"
    const filteredLinks = user
        ? LINKS
        : LINKS.filter(link => ['Home', 'Find Tutor'].includes(link.name));

    return (
        <div>
            <ul className="flex justify-center items-center space-x-4">
                {filteredLinks.map(link => (
                    <li key={link.path}>
                        <NavLink
                            to={link.path}
                            className={({ isActive }) =>
                                `!text-foreground dark:!text-dark-foreground py-2 px-4 rounded-lg ${
                                    isActive
                                        ? 'bg-accent dark:bg-dark-accent hover:bg-opacity-80 dark:hover:bg-opacity-80 !text-secondary-foreground dark:!text-secondary-foreground'
                                        : ''
                                }`
                            }
                        >
                            {link.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
}
