"use client";
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

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Image from "next/image";

import {
  User,
  Folders,
  CodeSquare,
  Contact,
  FileText,
  AppWindow,
  Code2,
  SendHorizontal,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";

export function RootUI() {
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
      code: "https://github.com/adhhamdev/startup-directory",
    },
    {
      title: "Startup Directory",
      description: "A collection of Startups to browse and lookup for.",
      image: "/startup-directory.png",
      live: "https://startup-directory.vercel.app",
      code: "https://github.com/adhhamdev/evently",
    },
  ];

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <a className="flex items-center justify-center" href="#">
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">Adhham Safwan</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-8">
          <a
            className="text-sm font-medium hover:underline underline-offset-4 flex items-center"
            href="#intro"
          >
            <User className="mr-2" />
            Intro
          </a>
          <a
            className="text-sm font-medium hover:underline underline-offset-4 flex items-center"
            href="#skills"
          >
            <CodeSquare className="mr-2" />
            Skills
          </a>
          <a
            className="text-sm font-medium hover:underline underline-offset-4 flex items-center"
            href="#projects"
          >
            <Folders className="mr-2" />
            Projects
          </a>
          <a
            className="text-sm font-medium hover:underline underline-offset-4 flex items-center"
            href="#contact-me"
          >
            <Contact className="mr-2" />
            Contact
          </a>
        </nav>
      </header>
      <main className="grid gap-6 sm:gap-12 lg:gap-16 px-4 md:px-6 py-6">
        <section className="flex flex-col items-center justify-center space-y-2 text-center h-96" id="intro">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl">
              Adhham Safwan
            </h1>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 font-bold">
              Full Stack Web Developer
            </p>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              I build beautiful and responsive websites. Welcome to my
              portfolio.
            </p>
          </div>
          <div className="flex items-center justify-center space-x-4 pt-5">
            <a
              className="inline-flex h-9 items-center justify-center rounded-md border border-slate-200 bg-white shadow-sm px-4 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300 dark:border-slate-800"
              href="#contact-me"
            >
              <Contact className="mr-2" />
              Contact Me
            </a>
            <a
              className="inline-flex h-9 items-center justify-center rounded-md border border-slate-200  bg-white shadow-sm px-4 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300 dark:border-slate-800"
              href="https://drive.google.com/file/d/1nJJXINjPP8KVjHibXZc8XoSSXjwFheDI/view?usp=sharing"
              download
            >
              <FileText className="mr-2" />
              Resume
            </a>
          </div>
        </section>
        <section className="grid gap-6 lg:gap-10 justify-center">
          <div className="flex flex-col gap-2 items-center text-justify mb-12">
            <h2 className="text-2xl font-bold tracking-tighter lg:text-3xl">
              About Me
            </h2>
            <p className="max-w-prose text-gray-500 md:text-xl/relaxed dark:text-gray-400 p-8">
              Recent Computer Science Graduate with a passion for developing
              scalable web applications and working across the full stack.
              I&apos;m looking to join forces with any size organization to grow
              my skill set while contributing to the positive outcome of
              products that are offered by the Company.
            </p>
          </div>
          <div className="flex flex-col gap-6 mb-12" id="skills">
            <h2 className="text-2xl font-bold tracking-tighter lg:text-3xl text-center py-5">
              Skills
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
        <section className="grid gap-6 lg:gap-10 py-10" id="projects">
          <div className="flex flex-col gap-2 mb-32">
            <h2 className="text-2xl font-bold tracking-tighter lg:text-3xl text-center py-5">
              Projects
            </h2>
            <div className="flex gap-2 flex-wrap justify-evenly py-5 cols">
              {projects.map((project) => {
                return (
                  <Card key={project.title} className="w-80 shadow-lg">
                    <CardHeader>
                      <CardTitle>{project.title}</CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={320}
                        height={240}
                        className="rounded hover:shadow-2xl transition-shadow"
                      />
                    </CardContent>
                    <CardFooter>
                      <a
                        target="_blank"
                        className="text-sm font-medium hover:underline mr-4 flex items-center"
                        href={project.live}
                      >
                        <AppWindow className="mr-2" />
                        View Live
                      </a>
                      <a
                        target="_blank"
                        className="text-sm font-medium hover:underline flex items-center"
                        href={project.code}
                      >
                        <Code2 className="mr-2" />
                        Source Code
                      </a>
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-2 w-1/2 mx-auto " id="contact-me">
            <h2 className="text-2xl font-bold tracking-tighter lg:text-3xl text-center mb-5">
              Contact Me
            </h2>
            <div className="grid gap-2 border-2 rounded-xl shadow-2xl p-10">
              <form className="grid gap-4 mt-5">
                <div className="grid gap-2">
                  <Label className="text-base" htmlFor="name">
                    Name
                  </Label>
                  <Input id="name" required />
                </div>
                <div className="grid gap-2">
                  <Label className="text-base" htmlFor="email">
                    Email
                  </Label>
                  <Input id="email" required type="email" />
                </div>
                <div className="grid gap-2">
                  <Label className="text-base" htmlFor="message">
                    Message
                  </Label>
                  <Textarea id="message" required />
                </div>
                <Button type="submit">
                  Submit
                  <SendHorizontal className="ml-2" />
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Adhham Safwan. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a
            className="text-xs hover:underline underline-offset-4 flex flex-col items-center"
            href="#"
          >
            <Twitter />
            Twitter
          </a>
          <a
            className="text-xs hover:underline underline-offset-4 flex flex-col items-center"
            href="#"
          >
            <Github />
            GitHub
          </a>
          <a
            className="text-xs hover:underline underline-offset-4 flex flex-col items-center"
            href="#"
          >
            <Linkedin />
            LinkedIn
          </a>
        </nav>
      </footer>
    </div>
  );
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
