import Section from './Section';
import { ModeToggle } from './ModeToggle';
import NavMenu from './NavMenu';
import { Link } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

export default function Header() {
    return (
        <Section className={'bg-card dark:bg-dark-card'}>
            <div className="flex justify-between items-center">
                <div className="basis-1/5">
                    <Link to="/">
                        <img className="h-12" src="/Logos/TalkMates-Black-Logo.svg" alt="" />
                    </Link>
                </div>
                <div className="basis-3/5">
                    <NavMenu />
                </div>
                <div className="basis-1/5 flex justify-end items-center space-x-2">
                    <div className="flex  gap-2">
                        <div className="w-10 h-10">
                            <Tooltip>
                                <TooltipTrigger>
                                    <Popover>
                                        <PopoverTrigger className="">
                                            <Avatar>
                                                <AvatarImage src="https://github.com/shadcn.png" />
                                                <AvatarFallback>DP</AvatarFallback>
                                            </Avatar>
                                        </PopoverTrigger>
                                        <PopoverContent>
                                            <p> popover.</p>
                                        </PopoverContent>
                                    </Popover>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Add to library</p>
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

                    <Link to="/login">
                        <Button className="!bg-secondary hover:!bg-opacity-80 !text-secondary-foreground dark:!text-secondary-foreground font-semibold">
                            Login
                        </Button>
                    </Link>

                    <ModeToggle />
                </div>
            </div>
        </Section>
    );
}
