function Section({ children, className }) {
    return (
        <section className={`bg-background dark:bg-dark-background px-2 py-2 ${className}`}>
            <div className=" max-w-screen-xl mx-auto">{children}</div>
        </section>
    );
}

export default Section;
