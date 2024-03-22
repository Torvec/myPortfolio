export default function AboutMeSection() {
  return (
    <section id="about" className="min-h-screen py-96">
      <h2 className="py-96 text-center text-5xl font-bold uppercase">
        About Me
      </h2>
      <div className="flex">
        <img src="https://picsum.photos/800" alt="me" />
        <div className="px-10 text-2xl space-y-10 text-balance">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed
            temporibus cumque beatae nemo, saepe a quasi, eveniet animi optio
            minima corrupti ratione corporis necessitatibus inventore iusto
            eius. Praesentium, omnis exercitationem.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum
            distinctio animi vero, sint, odio enim voluptatem, labore totam
            repudiandae perferendis nemo. Modi, ex repudiandae quam placeat
            numquam animi a officiis?
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
