export const HomeStats = () => {
  return (
    <div className="max-w-(--breakpoint-xl) mx-auto w-full mt-8 sm:my-16 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-10 gap-y-16 justify-center px-6">
      <div>
        <span className="text-5xl md:text-6xl tracking-tight font-semibold">400+</span>
        <p className="mt-6 font-medium text-xl">Active Users</p>
        <p className="mt-2 text-muted-foreground">
          Super smart global color, typography and effects styles + variables!
        </p>
      </div>
      <div>
        <span className="text-5xl md:text-6xl tracking-tight font-semibold text-muted-foreground">10,000+</span>
        <p className="mt-6 font-medium text-xl">Tasks Processed</p>
        <p className="mt-2 text-muted-foreground">
          We&apos;ve thought of everything you need so you don&apos;t have to.
        </p>
      </div>
      <div>
        <span className="text-5xl md:text-6xl tracking-tight font-semibold">99.98%</span>
        <p className="mt-6 font-medium text-xl">Average Uptime</p>
        <p className="mt-2 text-muted-foreground">A whopping 420+ ready-to-go desktop and mobile page examples.</p>
      </div>
    </div>
  );
};
