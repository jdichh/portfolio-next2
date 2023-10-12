export default function OtherProjects() {
  return (
    <div className="flex justify-center md:justify-end opacity-90">
      <p className="text-base text-center">
        You can view my other projects in my{" "}
        <a
          href="https://jdichh.netlify.app/#projects"
          target="_blank"
          aria-label="Button to my old portfolio website."
          className="font-bold text-accent-color"
        >
          old portfolio
        </a>{" "}
        or{" "}
        <a
          href="https://github.com/jdichh"
          target="_blank"
          aria-label="Button to my GitHub profile."
          className="font-bold text-accent-color"
        >
          GitHub profile
        </a>
        .
      </p>
    </div>
  );
}
