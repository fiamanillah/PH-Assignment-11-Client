import { NavLink } from "react-router-dom";
const LINKS = [
  {
    name: "Home",
    path: "/",
  },

  {
    name: "Add Tutorial",
    path: "/add-tutorial",
  },
  {
    name: "Find Tutor",
    path: "find-tutor",
  },
  {
    name: "My Bookings",
    path: "my-bookings",
  },
  {
    name: "My Tutorials",
    path: "my-tutorials",
  },
];
function MobileMenu() {
  return (
    <div className={"w-full"}>
      <ul className="flex flex-col justify-start items-start  gap-4">
        {LINKS.map((link) => (
          <li key={link.path}>
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                ` !text-foreground dark:!text-dark-foreground py-2 px-4 rounded-lg  ${
                  isActive
                    ? " bg-accent dark:bg-dark-accent hover:bg-opacity-80 dark:hover:bg-opacity-80 !text-secondary-foreground dark:!text-secondary-foreground"
                    : ""
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

export default MobileMenu;
