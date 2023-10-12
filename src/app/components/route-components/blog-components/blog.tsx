import { blogs } from "@/lib/data";

type BlogProps = (typeof blogs)[number];

export default function BlogItems({
  name,
  description,
  date,
  link,
}: BlogProps) {
  return (
    <div className="mb-3 last:mb-0">
      <article className="group overflow-hidden rounded-sm relative highlighted hover:scale-[1.02] hover:outline hover:outline-1 active:scale-[0.98] custom-transition">
        <a href={link}>
          <div className="flex flex-col p-4">
            <h2 className="text-xl text-left sm:text-2xl font-bold">{name}</h2>
            <h3 className="mb-2 text-accent-color">{date}</h3>
            <p className="opacity-80">{description}</p>
          </div>
        </a>
      </article>
    </div>
  );
}
