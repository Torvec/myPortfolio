
export default function AboutMeSection() {
  return (
    <section>
      <div className="flex flex-col items-center justify-center py-64 ">
        <div className="flex flex-col gap-6">
          <h2 className="text-7xl font-bold">Who I am...</h2>
          <span className="self-end text-sm font-bold uppercase text-stone-600">
            [About Me]
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-32 bg-stone-950/80 md:flex-row">
        <div className="md:w-5/12">
          <img src="me.png" alt="me" className="size-[768px]" />
        </div>
        <div className="space-y-10 text-balance text-2xl md:w-5/12">
          <p>Hello and welcome!</p>
          <p>
            I'm a full stack developer with a passion for creating beautiful and
            functional web applications. I have experience in working with
            various technologies, such as HTML, CSS, JavaScript, React, Node.js,
            MongoDB, and more. I enjoy learning new skills and exploring new
            challenges in the web development field.
          </p>
          <p>
            In this portfolio, you can find some of the projects that I have
            worked on, both individually and collaboratively. You can also learn
            more about me, my skills, and my interests. Feel free to contact me
            if you have any questions or feedback. I'm always open to new
            opportunities and collaborations. Thank you for visiting my website!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Necessitatibus ea, ratione alias perferendis iusto dignissimos
            distinctio dolor quos eos laborum unde rerum praesentium error
            repudiandae, aliquam, magnam et! Mollitia, ea!
          </p>
        </div>
      </div>
    </section>
  );
}
