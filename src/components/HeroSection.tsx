export default function HeroSection() {
  return (
    <section
      id="hero"
      className="flex min-h-screen flex-col items-center justify-center text-4xl font-black md:text-5xl lg:text-7xl"
    >
      <h1 className="text-right leading-tight">
        <span className="opacity-10">Hey! </span>
        <span className="opacity-10">Hi! </span>
        <span className="opacity-10">
          Hello There!
          <br />
        </span>
        <span>
          I'm Edward Vonschondorf
          <br />
        </span>
        <span>
          and I am a <br />
        </span>
        <span className="opacity-10">Front-End, </span>
        <span className="opacity-10">Back-End, </span>
        <span>
          Full-Stack
          <br />
        </span>
        <span>Web Developer</span>
      </h1>
      <h2 className="absolute bottom-5 text-center text-lg font-normal">
        Would you like to know more? <br />V{/* replace with svg arrow */}
      </h2>
    </section>
  );
}
