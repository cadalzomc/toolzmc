export const HomeStats = () => {
  return (
    <div className="max-w-(--breakpoint-xl) sm:text-center mx-auto w-full mt-8 sm:my-16 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 gap-y-10 justify-center px-6">
      <div>
        <span className="text-5xl md:text-6xl tracking-tight font-semibold">400+</span>
        <p className="mt-6 font-medium text-xl">Active Users</p>
        <p className="mt-2 text-muted-foreground">Developers and professionals using the platform regularly.</p>
      </div>
      <div>
        <span className="text-5xl md:text-6xl tracking-tight font-semibold text-muted-foreground">10,000+</span>
        <p className="mt-6 font-medium text-xl">Tasks Processed</p>
        <p className="mt-2 text-muted-foreground">Conversions, generations, and annotations completed.</p>
      </div>
      <div>
        <span className="text-5xl md:text-6xl tracking-tight font-semibold">99.98%</span>
        <p className="mt-6 font-medium text-xl">Average Uptime</p>
        <p className="mt-2 text-muted-foreground">Reliable and always available.</p>
      </div>
    </div>
  );
};
