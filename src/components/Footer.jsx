import Section from './Section';

export default function Footer() {
    return (
        <Section className={`bg-card dark:bg-dark-card`}>
            <div className="flex justify-between">
                <div className="basis-1/3 flex justify-start">
                    <h1>Start</h1>
                </div>
                <div className="basis-1/3 flex flex-col justify-center text-center">
                    <img className='h-20' src="/Logos/TalkMates-Black-Logo.svg" alt="" />
                    <span>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
                        officia?
                    </span>
                </div>
                <div className="basis-1/3 flex justify-end">
                    <h1>End</h1>
                </div>
            </div>
        </Section>
    );
}
