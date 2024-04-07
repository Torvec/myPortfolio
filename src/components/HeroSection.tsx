export default function HeroSection() {
  // const Title = () => {
  //   return (
  //     <h1 className="text-center text-5xl md:text-7xl font-bold text-stone-300">
  //       Hi! I'm{" "}
  //       <span className="uppercase text-orange-600">
  //         Edward <br /> Vonschondorf
  //       </span>
  //     </h1>
  //   );
  // };

  // const Subtitle = () => {
  //   return (
  //     <p className="text-center text-4xl font-bold text-stone-500">
  //       <span className="text-stone-300">Full Stack</span> Web Developer
  //     </p>
  //   );
  // };

  return (
    <section className="bg-[url(grid_pattern_bg.png)]">
      <div className="flex min-h-[50vh] flex-col items-center justify-center">
        <h1 className="text-center text-5xl font-bold text-stone-300 md:text-7xl">
          Hi! I'm{" "}
          <span className="uppercase text-orange-600">
            Edward <br /> Vonschondorf
          </span>
        </h1>
        <p className="text-center text-4xl font-bold text-stone-500">
          <span className="text-stone-300">Full Stack</span> Web Developer
        </p>
      </div>
      <div className="flex min-h-[10vh] items-end justify-center bg-gradient-to-t from-stone-950 from-10% px-16" />
    </section>
  );
}
