import { NavLink } from 'react-router-dom';

const LINKS = [
    {
        name: 'Home',
        path: '/',
    },
    {
        name: 'About',
        path: '/about',
    },
];

export default function NavMenu() {
    return (
        <div>
            <ul className="flex justify-center items-center space-x-4">
                {LINKS.map(link => (
                    <li key={link.path}>
                        <NavLink
                            to={link.path}
                            className={({ isActive }) =>
                                ` !text-foreground dark:!text-dark-foreground py-2 px-4 rounded-lg  ${
                                    isActive
                                        ? ' bg-accent dark:bg-dark-accent hover:bg-opacity-80 dark:hover:bg-opacity-80 !text-secondary-foreground dark:!text-secondary-foreground'
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
