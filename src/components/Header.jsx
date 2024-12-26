import Section from "./Section";
import { ModeToggle } from "./ModeToggle";
import NavMenu from "./NavMenu";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Loader2, LogOut, AlignJustify } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useAuth } from "@/contexts/AuthContext";
import MobileMenu from "@/components/MobileMenu.jsx";

export default function Header() {
  const { user, logout, loading } = useAuth();
  console.log(user);
  return (
    <Section
      className={
        "bg-card dark:bg-dark-card bg-opacity-10 dark:bg-opacity-10 backdrop-blur-md sticky top-0 z-50 shadow-xl"
      }
    >
      <div className="flex justify-between items-center tablet-lg:gap-2">
        <div className="basis-1/5 tablet-lg:basis-1/2">
          <Link to="/">
            <img
              className="h-12"
              src="/Logos/TalkMates-Black-Logo.svg"
              alt="TalkMates Logo"
            />
          </Link>
        </div>
        <div className="basis-3/5 tablet-lg:hidden">
          <div className={"tablet-lg:hidden"}>
            <NavMenu />
          </div>
        </div>

        <div className="basis-1/5 flex justify-end items-center space-x-2 tablet-lg:basis-1/2">
          {loading ? (
            <Loader2 className="animate-spin h-5 w-5" />
          ) : user ? (
            <div className="flex gap-2">
              <div className="w-10 h-10">
                <Tooltip>
                  <TooltipTrigger>
                    <Popover>
                      <PopoverTrigger>
                        <Avatar>
                          <AvatarImage src={user?.photoURL} alt="User Avatar" />
                          <AvatarFallback>DP</AvatarFallback>
                        </Avatar>
                      </PopoverTrigger>
                      <PopoverContent className="w-full text-center flex flex-col gap-2">
                        <p>{user.displayName}</p>
                      </PopoverContent>
                    </Popover>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{user.displayName}</p>
                  </TooltipContent>
                </Tooltip>
              </div>
              <div>
                <Tooltip>
                  <TooltipTrigger>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-10 w-10 rounded-full"
                      onClick={logout}
                    >
                      <LogOut />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Logout</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </div>
          ) : (
            <Link to="/login">
              <Button className="!bg-secondary hover:!bg-opacity-80 !text-secondary-foreground dark:!text-secondary-foreground font-semibold">
                Login
              </Button>
            </Link>
          )}

          <ModeToggle />

          <div className={"hidden tablet-lg:block"}>
            <Popover>
              <PopoverTrigger>
                <Button variant="outline" size="icon">
                  <AlignJustify />
                </Button>
              </PopoverTrigger>
              <PopoverContent align="end" className={"w-48"}>
                <MobileMenu />
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    </Section>
  );
}
