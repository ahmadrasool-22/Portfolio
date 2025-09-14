import ProjectCard from "../components/Card";

export default function Projects() {
  const projects = [
  {
  title: "Trendora — Ecommerce Frontend Store",
  description:
    "A fully responsive ecommerce frontend built with React and Tailwind. Includes product listings, product detail pages, cart, wishlist, search with live filtering, authentication forms, and an optimized user experience with smooth navigation.",
  tech: ["React", "Tailwind", "React Router", "Vite"],
  live: "https://trendora-ecommerce-frontend.vercel.app",
  code: "https://github.com/ahmadrasool-22/Trendora-ecommerce-frontend.git",
},

    {
      title: "Flexy — Modern Multipage Website",
      description:
        "A complete React + Tailwind site with modern header, hero, features, and footer. Multiple pages handled via React Router.",
      tech: ["React", "Tailwind", "React Router"],
      live: "https://flexy-multi-page-website.vercel.app",
      code: "https://github.com/ahmadrasool-22/flexy-multi-page-website.git",
    },
    {
      title: "NewsHub — News App",
      description:
        "Category-based news app with API fetching, skeleton loaders, and a responsive hamburger navbar.",
      tech: ["React", "Tailwind", "REST API", "State Management"],
      live: "https://news-hub-silk.vercel.app/",
      code: "https://github.com/ahmadrasool-22/News-Hub.git",
    },
    {
      title: "Weather App",
      description:
        "Clean weather dashboard that fetches live data and displays current conditions with a responsive layout.",
      tech: ["React", "Tailwind", "Fetch API"],
      live: "https://weather-app-rose-pi-83.vercel.app",
      code: "https://github.com/ahmadrasool-22/weather-app.git",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Projects</h2>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
