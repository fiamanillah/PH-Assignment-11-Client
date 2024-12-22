import Section from './Section';
import { ModeToggle } from './ModeToggle';
export default function Header() {
    return (
        <Section className={'bg-card dark:bg-dark-card'}>
            <div className="flex justify-between items-center">
                <div>
                    <img className='h-12' src="/Logos/TalkMates-Black-Logo.svg" alt="" />
                </div>
                <ModeToggle />
            </div>
        </Section>
    );
}
