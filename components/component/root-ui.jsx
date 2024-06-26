import { useState } from "react";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import MenuBtn from "./menu-btn";
import Image from "next/image";
import Form from "./form";

import {
  User,
  Folders,
  CodeSquare,
  Contact,
  GraduationCap,
  FileText,
  AppWindow,
  Code2,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";

export function RootUI() {
  const [menuState, setMenuState] = useState(false);
  const handleMenu = () => {
    setMenuState(!menuState);
  };
  const skillItems = [
    { title: "HTML", src: "/html.png", alt: "HTML", width: 256, height: 256 },
    { title: "CSS", src: "/css.png", alt: "CSS", width: 256, height: 256 },
    {
      title: "JavaScript (ES6)",
      src: "/js.png",
      alt: "JavaScript (ES6)",
      width: 256,
      height: 256,
    },
    {
      title: "Tailwind CSS",
      src: "/tw.svg",
      alt: "Tailwind CSS",
      width: 256,
      height: 256,
    },
    {
      title: "Bootstrap",
      src: "/bootstrap.png",
      alt: "Bootstrap",
      width: 256,
      height: 256,
    },
    {
      title: "React JS",
      src: "/react.png",
      alt: "React JS",
      width: 256,
      height: 256,
    },
    {
      title: "Next JS",
      src: "/next.png",
      alt: "Next JS",
      width: 256,
      height: 256,
    },
    {
      title: "Node JS",
      src: "/node.png",
      alt: "Node JS",
      width: 256,
      height: 256,
    },
    {
      title: "Express JS",
      src: "/express.png",
      alt: "Express JS",
      width: 256,
      height: 256,
    },
    {
      title: "Mongoose",
      src: "/mongoose.png",
      alt: "Mongoose",
      width: 256,
      height: 256,
    },
    {
      title: "MongoDB",
      src: "/mongo.png",
      alt: "MongoDB",
      width: 256,
      height: 256,
    },
    { title: "Git", src: "/git.png", alt: "Git", width: 256, height: 256 },
    {
      title: "GitHub",
      src: "/github.png",
      alt: "GitHub",
      width: 256,
      height: 256,
    },
  ];

  const projects = [
    {
      title: "Pictoria",
      description: "A place to explore high quality images from Unsplash",
      image: "/pictoria.png",
      live: "https://pictoria-adhham.vercel.app",
      code: "https://github.com/adhhamdev/pictoria",
    },
    {
      title: "Evently",
      description: "A Platform to host, connect and celebrate your Events.",
      image: "/evently.png",
      live: "https://evently-adhham.vercel.app",
      code: "https://github.com/adhhamdev/evently",
    },
    {
      title: "Startup Directory",
      description: "A collection of Startups to browse and lookup for.",
      image: "/startup-directory.png",
      live: "https://startup-directory.vercel.app",
      code: "https://github.com/adhhamdev/startup-directory",
    },
  ];

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="grid gap-6 sm:gap-12 lg:gap-16 px-4 md:px-6 pt-3">
        <header className="px-6 py-3 sm:py-0 sm:px-6 flex items-center justify-between">
          <a className="flex items-center justify-center" href="#">
            <Image
              src="/profile.jpg"
              alt="Profile picture"
              width={40}
              height={40}
              className="rounded-full size-16 sm:size-auto"
            />
            <span className="sr-only">Adhham Safwan</span>
          </a>
          <MenuBtn handleMenu={handleMenu} menuState={menuState} />
          <nav
            className={`sm:gap-8 sm:flex sm:relative sm:inset-0 sm:p-0 sm:shadow-none ml-auto gap-4 grid fixed top-28 p-8 bg-white rounded-xl shadow-xl z-10 ${
              menuState ? "right-0" : "-right-96"
            } transition-all duration-300`}
          >
            <a
              className="rounded-lg hover:bg-slate-400 text-4xl sm:text-sm sm:p-0 px-10 py-6 font-medium hover:underline underline-offset-4 flex items-center sm:hover:bg-transparent"
              href="#intro"
            >
              <User className="mr-4 size-10 sm:size-auto" />
              Intro
            </a>
            <a
              className="rounded-lg hover:bg-slate-400 text-4xl sm:text-sm sm:p-0 px-10 py-6 font-medium hover:underline underline-offset-4 flex items-center sm:hover:bg-transparent"
              href="#education"
            >
              <GraduationCap className="mr-4 size-10 sm:size-auto" />
              Education
            </a>
            <a
              className="rounded-lg hover:bg-slate-400 text-4xl sm:text-sm sm:p-0 px-10 py-6 font-medium hover:underline underline-offset-4 flex items-center sm:hover:bg-transparent"
              href="#skills"
            >
              <CodeSquare className="mr-4 size-10 sm:size-auto" />
              Skills
            </a>
            <a
              className="rounded-lg hover:bg-slate-400 text-4xl sm:text-sm sm:p-0 px-10 py-6 font-medium hover:underline underline-offset-4 flex items-center sm:hover:bg-transparent"
              href="#projects"
            >
              <Folders className="mr-4 size-10 sm:size-auto" />
              Projects
            </a>
            <a
              className="rounded-lg hover:bg-slate-400 text-4xl sm:text-sm sm:p-0 px-10 py-6 font-medium hover:underline underline-offset-4 flex items-center sm:hover:bg-transparent"
              href="#contact"
            >
              <Contact className="mr-4 size-10 sm:size-auto" />
              Contact
            </a>
          </nav>
        </header>
        <section
          className="flex flex-col items-center justify-center space-y-2 text-center h-96"
          id="intro"
        >
          <div className="space-y-2">
            <h1 className="text-6xl font-bold tracking-tighter lg:text-6xl">
              Adhham Safwan
            </h1>
            <p className="text-3xl sm:text-base max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 font-bold">
              Full Stack Web Developer
            </p>
            <p className="text-3xl sm:text-base max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Bringing ideas to life through code Crafting digital experiences
              that are both beautiful and functional.
            </p>
          </div>
          <div className="flex items-center justify-center space-x-4 pt-5">
            <a
              className="text-3xl sm:text-sm inline-flex h-16 sm:h-9 items-center justify-center rounded-md border border-slate-200 bg-white shadow-sm px-4 font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300 dark:border-slate-800"
              href="#contact"
            >
              <Contact className="mr-2 size-9 sm:size-auto" />
              Contact Me
            </a>
            <a
              target="_blank"
              className="text-3xl sm:text-sm h-16 sm:h-9 inline-flex items-center justify-center rounded-md border border-slate-200  bg-white shadow-sm px-4 font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300 dark:border-slate-800"
              href="https://1drv.ms/w/s!AsgpSd3OI0F43RDNBeBZjqHvkGhu?e=GVi1X4"
              download
            >
              <FileText className="mr-2 size-9 sm:size-auto" />
              Resume
            </a>
          </div>
        </section>
        <section className="grid gap-6 lg:gap-10 justify-center">
          <div className="flex flex-col gap-2 items-center text-justify mb-12">
            <h2 className="text-5xl font-bold tracking-tighter lg:text-3xl">
              About Me
            </h2>
            <p className="max-w-prose text-gray-500 md:text-xl/relaxed dark:text-gray-400 p-8 text-3xl sm:text-base">
              Highly motivated BTEC HND in Software Engineering student and
              self-taught Full Stack Developer with a strong focus on building
              websites with exceptional SEO and accessibility. Skilled in
              creating visually attractive and high-performance websites.
              Seeking opportunities to contribute my expertise and creativity.
              <br />
              I have a passion for learning new technologies and building
              beautiful and functional websites. I am a firm believer in the
              importance of good design and user experience. I am always looking
              for new challenges and opportunities to grow.
              <br />I am currently looking for a challenging and exciting role
              in a fast-paced and growing company.
            </p>
          </div>
          <div className="w-full md:mt-20" id="education">
            <div className=" px-4 md:px-6">
              <div className="mx-auto max-w-3xl space-y-4 my-10 text-center">
                <h2 className="text-5xl font-bold tracking-tighter sm:text-3xl md:text-3xl">
                  My Education Journey
                </h2>
                <p className="text-gray-500 dark:text-gray-400 text-2xl sm:text-xl">
                  Explore the milestones that have shaped my academic and
                  professional development.
                </p>
              </div>
              <div className="mx-auto mt-12 max-w-3xl">
                <ol className="relative border-l border-gray-200 dark:border-gray-700">
                  <li className="mb-10 ml-4">
                    <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full bg-gray-200 ring-8 ring-white dark:bg-gray-700 dark:ring-gray-900" />
                    <h3 className="flex items-center mb-1 text-2xl sm:text-lg font-semibold text-gray-900 dark:text-white">
                      BTEC Higher National Diploma in Software Engineering
                      <span className="bg-primary-100 text-primary-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300 ml-3">
                        2024 - 2025 (expected)
                      </span>
                    </h3>
                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                      ESoft Metro Campus
                    </p>
                    <div className="text-base font-normal text-gray-500 dark:text-gray-400">
                      <ul className="list-disc list-inside marker:text-sky-500 text-xl sm:text-base">
                        <li>
                          Presently, Studying core modules including Object
                          Oriented Programming, Web Application Development,
                          Mobile Application Development, Database Design &
                          Development.
                        </li>
                        <li>
                          Developing skills in languages like, .NET, C#,
                          JavaScript, SQL.
                        </li>
                        <li>
                          Working on group and individual projects to build
                          robust and scalable applications.
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="mb-10 ml-4">
                    <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full bg-gray-200 ring-8 ring-white dark:bg-gray-700 dark:ring-gray-900" />
                    <h3 className="flex items-center mb-1 text-2xl sm:text-lg font-semibold text-gray-900 dark:text-white">
                      BTEC Diploma in Information Technology
                      <span className="bg-primary-100 text-primary-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300 ml-3">
                        2023
                      </span>
                    </h3>
                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                      ESoft Metro Campus
                    </p>
                    <div className="text-base font-normal text-gray-500 dark:text-gray-400">
                      <ul className="list-disc list-inside marker:text-sky-500 text-xl sm:text-base">
                        <li>
                          Focused on fundamentals of Computing, Programming and
                          Web.
                        </li>
                        <li>
                          Developed my first Software Application in .NET and C#
                          using Visual Studio.
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="mb-10 ml-4">
                    <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full bg-gray-200 ring-8 ring-white dark:bg-gray-700 dark:ring-gray-900" />
                    <h3 className="flex items-center mb-1 text-2xl sm:text-lg font-semibold text-gray-900 dark:text-white">
                      O Levels in Math, Physics, Chemistry, Biology, English &
                      Computer Science
                      <span className="bg-primary-100 text-primary-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300 ml-3">
                        2022
                      </span>
                    </h3>
                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                      Golden Gate International School
                    </p>
                    <div className="text-base font-normal text-gray-500 dark:text-gray-400">
                      <ul className="list-disc list-inside marker:text-sky-500 text-xl sm:text-base">
                        <li>
                          Achieved A in Computer Science, B in English &
                          Biology, C in Physics, and E in Chemistry.
                        </li>
                        <li>
                          Developed strong analytical and problem solving
                          skills.
                        </li>
                      </ul>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 my-28" id="skills">
            <h2 className="text-5xl font-bold tracking-tighter sm:text-3xl text-center py-5">
              Development Skills
            </h2>
            <Carousel
              plugins={[Autoplay({ delay: 2000, stopOnInteraction: false })]}
            >
              <CarouselContent className="py-4">
                {skillItems.map((item) => {
                  return (
                    <CarouselItem
                      className="basis-40 drop-shadow-lg p-3 rounded-lg mx-4"
                      title={item.title}
                      key={item.title}
                    >
                      <Image
                        className={item.title == "Tailwind CSS" ? "h-full" : ""}
                        src={item.src}
                        alt={item.alt}
                        width={item.width}
                        height={item.height}
                      />
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
            </Carousel>
          </div>
        </section>
        <section className="grid gap-6 lg:gap-10 mt-20" id="projects">
          <div className="flex flex-col gap-2 mb-32">
            <h2 className="text-5xl font-bold tracking-tighter sm:text-3xl text-center py-5">
              Personal Projects
            </h2>

            <div className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {projects.map((project) => {
                return (
                  <Card
                    key={project.title}
                    className="w-full md:80 shadow-2xl space-y-4 sm:space-y-0 my-5 sm:my-auto p-4 sm:p-0"
                  >
                    <CardHeader>
                      <CardTitle className="text-5xl sm:text-2xl">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-3xl sm:text-lg">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={320}
                        height={240}
                        className="rounded w-full sm:"
                      />
                    </CardContent>
                    <CardFooter>
                      <a
                        target="_blank"
                        className="text-4xl sm:text-sm font-medium hover:underline mr-4 flex items-center"
                        href={project.live}
                      >
                        <AppWindow className="mr-2 size-10 sm:size-6" />
                        View Live
                      </a>
                      <a
                        target="_blank"
                        className="text-4xl sm:text-sm font-medium hover:underline flex items-center"
                        href={project.code}
                      >
                        <Code2 className="mr-2 size-10 sm:size-6" />
                        Source Code
                      </a>
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
          </div>

          <div
            className="flex flex-col sm:flex-row sm:gap-8 justify-center pt-10"
            id="contact"
          >
            <div className="basis-2/3 mx-auto sm:mx-0">
              <h2 className="text-5xl font-bold tracking-tighter sm:text-3xl text-center mb-5">
                Contact Me
              </h2>

              <div className="p-10 sm:p-10 border border-gray-100 rounded-lg sm:shadow-md sm:hover:shadow-2xl transition-shadow">
                <h3 className="text-3xl sm:text-xl text-gray-500 font-medium text-center mb-4">
                  I appreciate you taking the time to provide feedback. Your
                  thoughts help me improve my work!
                </h3>
                <Form />
              </div>
            </div>
          </div>
        </section>
        <footer className="flex flex-col gap-8 sm:flex-row py-6 w-full shrink-0 items-center sm:px-6 border-t">
          <p className="text-2xl sm:text-base text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Adhham Safwan. All rights
            reserved.
          </p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <a
              target="_blank"
              className="text-2xl sm:text-base hover:underline underline-offset-4 flex flex-col items-center"
              href="https://twitter.com/AdhhamDev"
            >
              <Twitter className="w-10 h-10 sm:w-6" />
              Twitter
            </a>
            <a
              target="_blank"
              className="text-2xl sm:text-base hover:underline underline-offset-4 flex flex-col items-center"
              href="https://github.com/adhhamdev"
            >
              <Github className="w-10 h-10 sm:w-6" />
              GitHub
            </a>
            <a
              target="_blank"
              className="text-2xl sm:text-base hover:underline underline-offset-4 flex flex-col items-center"
              href="https://www.linkedin.com/in/adhham/"
            >
              <Linkedin className="w-10 h-10 sm:w-6" />
              LinkedIn
            </a>
          </nav>
        </footer>
      </main>
    </div>
  );
}
