export default function Page({ children }) {
  return (
    <div
      className={`relative bg-[url("/Shapes/bg2.svg")] overflow-hidden min-h-screen`}
    >
      <div className="absolute inset-0 bg-background dark:bg-dark-background bg-opacity-90 dark:bg-opacity-95 z-10 "></div>
      <div className="relative z-20">{children}</div>
    </div>
  );
}
