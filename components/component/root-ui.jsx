/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/sh887dYK3Px
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/
import Link from "next/link"
import { Progress } from "@/components/ui/progress"
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function RootUI() {
  return (
    (<div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">Adhham Safwan</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#">
            Projects
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#">
            Skills
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#">
            Contact
          </Link>
        </nav>
      </header>
      <main className="grid gap-6 sm:gap-12 lg:gap-16 px-4 md:px-6 py-6">
        <section
          className="flex flex-col items-center justify-center space-y-2 text-center h-96">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl">Adhham Safwan</h1>
            <p
              className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 font-bold">
              Full Stack Web Developer
            </p>
            <p
              className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              I build beautiful and responsive websites. Welcome to my portfolio.
            </p>
          </div>
          <div className="flex items-center justify-center space-x-4 pt-5">
            <Link
              className="inline-flex h-9 items-center justify-center rounded-md border border-slate-200 bg-white shadow-sm px-4 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300 dark:border-slate-800"
              href="#">
              Contact Me
            </Link>
            <Link
              className="inline-flex h-9 items-center justify-center rounded-md border border-slate-200  bg-white shadow-sm px-4 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300 dark:border-slate-800"
              href="#">
              Resume
            </Link>
          </div>
        </section>
        <section className="grid gap-6 lg:gap-10 space-y-44 justify-center">
          <div className="flex flex-col gap-2 items-center text-justify">
            <h2 className="text-2xl font-bold tracking-tighter lg:text-3xl">About Me</h2>
            <p
              className="max-w-prose text-gray-500 md:text-xl/relaxed dark:text-gray-400">
              Recent Computer Science Graduate with a passion for developing scalable web applications and working across the full stack. I&apos;m looking to join forces with any size organization to grow my skill set while contributing to the positive outcome of products that are offered by the Company.
            </p>
          </div>
          <div className="flex flex-col gap-2 py-10 max-w-prose w-">
            <h2 className="text-2xl font-bold tracking-tighter lg:text-3xl text-center">Skills</h2>
            <div className="grid gap-2 md:grid-cols-2">
              <div>HTML</div>
              <Progress value="90" />
              <div>CSS</div>
              <Progress value="80" />
              <div>JavaScript</div>
              <Progress value="85" />
              <div>React</div>
              <Progress value="70" />
              <div>Node.js</div>
              <Progress value="65" />
            </div>
          </div>
        </section>
        <section className="grid gap-6 lg:gap-10 py-10">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-bold tracking-tighter lg:text-3xl">Projects</h2>
            <div className="grid gap-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Beautiful Website</CardTitle>
                  <CardDescription>A stunning website with beautiful animations.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    alt="Project"
                    className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                    height="150"
                    src="/placeholder.svg"
                    width="300" />
                </CardContent>
                <CardFooter>
                  <Link className="text-sm underline" href="#">
                    View Project
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Awesome App</CardTitle>
                  <CardDescription>An amazing mobile app with cool features.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    alt="Project"
                    className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                    height="150"
                    src="/placeholder.svg"
                    width="300" />
                </CardContent>
                <CardFooter>
                  <Link className="text-sm underline" href="#">
                    View Project
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
          <div className="flex flex-col gap-2 py-10">
            <h2 className="text-2xl font-bold tracking-tighter lg:text-3xl">Contact Me</h2>
            <div className="grid gap-2">
              <form className="grid gap-4">
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
                <Button type="submit">Submit</Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer
        className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Jane Doe. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Twitter
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            GitHub
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            LinkedIn
          </Link>
        </nav>
      </footer>
    </div>)
  );
}

function MountainIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>)
  );
}
