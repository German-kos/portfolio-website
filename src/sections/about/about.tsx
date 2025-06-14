import { ShapeDivider } from "../../components";

const About = () => {
  return (
    <section className="flex flex-col justify-center items-center bg-slate-100 p-8 min-h-screen text-black">
      <div>
        <h1>About Section</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
          veritatis nihil! Aperiam ratione molestiae, ducimus recusandae
          consequatur exercitationem similique nisi, delectus nostrum dicta
          inventore aspernatur cum. Recusandae similique molestiae quam.
        </p>
      </div>
      <ShapeDivider fill="fill-purple-600" id="about" />
    </section>
  );
};

export default About;
