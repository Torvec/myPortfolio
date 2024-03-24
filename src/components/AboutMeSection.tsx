export default function AboutMeSection() {
  return (
    <section id="about" className="min-h-screen pb-96">
      <h2 className="grid min-h-screen place-content-center text-center text-5xl font-bold uppercase">
        About Me
      </h2>
      <div className="flex flex-col gap-10 md:flex-row">
        <img src="https://picsum.photos/800" alt="me" />
        <div className="space-y-10 text-balance px-10 text-2xl">
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
