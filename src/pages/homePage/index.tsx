'use client'
// COMPONENTS
import { Button } from "@/components/ui/button";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuItem
} from "@/components/ui/dropdown-menu";

import { cn } from "@/lib/utils";
import { useState } from 'react';

// IMAGES
import logo from '@/assets/Work Nook.png';
import logo1 from '@/assets/logoipsum-217.svg';

import Thumb from '@/assets/thumbOff.jpg'
import Work2 from '@/assets/maxim-ilyahov-TAJapYDH0Io-unsplash 1.png';
import Work3 from '@/assets/kpIV42iSLXo4p8D9bjTMWEtQIM.png.png';
import Work4 from '@/assets/aleh-tsikhanau-Qy94uqEB8KI-unsplash 1.png';
import { Github, Linkedin, Moon, ShoppingBag, StarsIcon, Sun } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import ShimmerButton from "@/components/magicui/shimmer-button";
import GridPattern from "@/components/magicui/grid-pattern";
import Safari from "@/components/magicui/safari";
import { Testimonials } from "@/components/Testimonials";
import Globe from "@/components/magicui/globe";
import Marquee from "@/components/magicui/marquee";




export function HomePage() {
  const [isAnnualBillingDisabled, setIsAnnualBillingDisabled] = useState(false);
  const [isButtonSubscribeDisabled, setIsButtonSubscribeDisabled] = useState(false);

  const navigate = useNavigate()


  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('darkMode');
    return savedTheme === 'true' || false;
  });

  // Atualiza o localStorage e o estado do tema
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      localStorage.setItem('darkMode', !prevMode);
      return !prevMode;
    });
  }

  function createRegister() {
    navigate('/login')
  };

  function createNewRegister() {
    navigate('/Register');
  }


  const members = [
    { name: "Kimberly", email: "mail@example.com", role: "Owner", },
    { name: "John", email: "mail@example.com", role: "Member", },
  ];




  return (
    <div className={`${darkMode && "dark"}`}>
      <main className='bg-black dark:bg-white max-h-full'>
        <GridPattern
          width={20}
          height={20}
          x={-1}
          y={-1}
          className={cn(
            "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]",

          )}
        />
        <div className='p-3 mr-36 flex items-center'>
          <header className="fixed top-0 left-0 w-full backdrop-blur z-50">
            <div className="flex items-center justify-between p-3">
              <div className="flex items-center gap-3 cursor-pointer text-white dark:text-black">
                <img src={logo} className="h-11 w-14 rounded-full" alt="Logo" />
                <h1 className="font-semibold">WorkNook</h1>
              </div>

              <div className="flex items-center ml-auto mr-8">
                <a href="" className="text-white dark:text-black mr-2 hover:text-zinc-300">
                  About
                </a>

                {/* Barra Vertical */}
                <div className="h-6 border-l border-zinc-400 mx-3"></div>

                <a onClick={createRegister} className="text-white dark:text-black mr-6 hover:text-zinc-300 whitespace-nowrap cursor-pointer">
                  Sign in
                </a>

                <ShimmerButton onClick={createNewRegister} className="shadow-2xl">
                  <span className="whitespace-nowrap text-center font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                    Start for free
                  </span>
                </ShimmerButton>

                {/* DropdownMenu */}
                <DropdownMenu>
                  <DropdownMenuTrigger className='p-2 ml-4 rounded-full flex items-center justify-center'>
                    <Moon fill="white" className="block dark:hidden w-6 h-6" />
                    <Sun className="hidden dark:block w-6 h-6" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className='bg-black text-white'>
                    <DropdownMenuLabel>Appearance</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={toggleDarkMode}>
                      {darkMode ? "Dark" : "Light"}
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </header>
        </div>



        <div className=" w-full max-w-6xl mx-auto ">

          <div className='flex mt-20 p-1'>
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-white dark:text-black whitespace-nowrap font-bold text-3xl mb-1">
                Start boosting the success of your e-commerce
              </h1>
              <span className="text-zinc-400 text-center mb-1">
                We transform remote work into a productive and collaborative experience. Discover our solutions and tools designed to optimize and increase the success of your e-commerce!
              </span>
            </div>

          </div>

          <Safari
            url="WorkNook"
            className="size-full bg-black dark:bg-zinc-200 safari-specific"
            src={Thumb}
          />

          <div className="flex justify-center items-center mt-10 mb-6">
            <div className="flex bg-gray-100 gap-4 p-2 items-center justify-center rounded-full ">
              <div className="bg-black rounded-full p-1">
                <StarsIcon className="w-5 h-5 text-white" />
              </div>
              <div className="flex items-center space-x-1">
                <h1 className="font-semibold">+200</h1>
                <span className="font-normal text-zinc-600">active companies</span>
              </div>
              <div className="flex items-center space-x-1">
                <h1 className="font-semibold">+85%</h1>
                <span className="font-normal text-zinc-600">increase in productivity with our solutions.</span>
              </div>
              <div className="flex items-center space-x-1">
                <h1 className="font-semibold">+40</h1>
                <span className="font-normal text-zinc-600">conversion in your e-commerce.</span>
              </div>
            </div>
          </div>

          <Testimonials />


          <div className="mt-10 flex flex-col items-center justify-center space-x-3 space-y-6">
            <h2 className=" font-semibold text-3xl text-white dark:text-black">Companies that Trust WorkNook</h2>
            <p className="whitespace-nowrap text-zinc-500">More than 200 leading e-commerce companies have optimized their remote work with WorkNook tools and consultancy
              , transforming challenges into opportunities for growth and
              efficient collaboration.
            </p>

          </div>


          <div className="relative gap-1 flex overflow-x-hidden">
            {/* Gradiente para o modo claro */}
            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black to-transparent dark:from-white pointer-events-none z-10"></div>
            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black to-transparent dark:from-white pointer-events-none z-10"></div>

            <Marquee pauseOnHover className="[--duration:30s]">
              <div className="animate-marquee flex justify-center space-x-8 mt-14">
                {Array.from({ length: 6 }).map((_, index) => (
                  <img key={index} src={logo1} className="dark:invert" />
                ))}
              </div>
            </Marquee>
          </div>

          <div className='flex items-center mt-28'>
            <div className='flex flex-col max-w-xl'>
              <h2 className='font-semibold text-4xl text-white leading-tight dark:text-black'>
                Management Tools For Your Products
              </h2>
              <p className='mt-4 text-white dark:text-black'>
                Keep all your projects under control and organized with easy and comprehensive tracking tools.
              </p>
            </div>
            <img src={Work2} alt="Work" className='ml-24' />
          </div>

          <div className='flex items-center mt-28'>
            <img src={Work4} alt="Work" className='mr-8' />
            <div className='flex flex-col max-w-xl'>
              <h2 className='font-medium text-4xl text-white leading-tight dark:text-black'>
                Advanced Task Automation
              </h2>
              <p className='mt-4 text-white dark:text-black'>
                Automate your routine tasks and workflows, allowing you to focus on what truly matters and improving overall efficiency and accuracy.
              </p>
            </div>
          </div>

          <div className='flex items-center mt-28'>
            <div className='flex flex-col max-w-xl'>
              <h2 className='font-semibold text-4xl text-white leading-tight dark:text-black'>
                Real-Time Team Collaboration
              </h2>
              <p className='mt-4 text-white dark:text-black'>
                Enhance teamwork and communication with real-time messaging, file sharing, and collaborative document editing to ensure everyone stays on the same page.
              </p>
            </div>
            <img src={Work3} alt="Work" className='ml-24' />
          </div>

          <div className="bg-black dark:bg-white mt-20 flex flex-col items-center justify-center  space-y-8">
            {/* Top Section */}
            <div className="grid grid-cols-2 gap-8 w-full max-w-7xl">
              {/* Left Panel */}
              <Card className="bg-black dark:bg-white p-7 text-white">
                <CardHeader>
                  <CardTitle className="text-blue-400 gap-3 flex items-center justify-center">
                    E-commerce
                    <ShoppingBag />
                  </CardTitle>

                </CardHeader>
                <CardContent>
                  <h1 className="text-3xl text-white dark:text-black font-bold  flex items-center justify-center">
                    Transform your work
                  </h1>
                  <span className="flex items-center font font-semibold justify-center text-white dark:text-black text-4xl">efficiently</span>
                  <p className="text-gray-400 flex mt-14">
                    Optimize remote work for companies, Specializing in efficiency solutions offering tools and statistics for your E-commerce
                  </p>
                </CardContent>
              </Card>
              <div className="relative flex h-full w-full max-w-[35rem] items-center justify-center overflow-hidden rounded-lg border bg-background px-40 pb-40 pt-8 md:pb-60 md:shadow-xl bg-black dark:bg-white ">
                  <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-center text-5xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
                  from anywhere
                  </span>
                  <Globe className="top-28" />
                  <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
                </div>
            </div>
          </div>
          <div className='w-full mt-6 flex items-center justify-center'>
            <div className="p-10 border rounded-lg w-full">
              <h3 className="text-white dark:text-black font-semibold mb-4">Team Members</h3>
              <p className="text-gray-400 mb-6">Invite your team members to collaborate.</p>

              {members.map((member) => (
                <div key={member.email} className="flex items-center justify-between mb-8">
                  <div className="flex items-center">
                    <Avatar className="mr-6">
                      <AvatarImage src={`https://avatar.vercel.sh/jenny`} />
                    </Avatar>
                    <div className="mr-8">
                      <p className="text-white">{member.name}</p>
                      <p className="text-gray-400 text-sm">{member.email}</p>
                    </div>
                  </div>

                  <Select defaultValue={member.role}>
                    <SelectTrigger className="text-black dark:bg-zinc-100 px-4 py-2 rounded-md">
                      <SelectValue placeholder={member.role} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Owner">Owner</SelectItem>
                      <SelectItem value="Member">Member</SelectItem>
                      <SelectItem value="Admin">Admin</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center mt-28">
            <h1 className="text-4xl font-bold text-white dark:text-black">Pricing</h1>
            <p className="mt-2 text-lg text-white dark:text-black">
              Choose the plan that's right for you with our clear, competitive pricing. Perfect for individuals and businesses alike.
            </p>
            <div className="mt-6">
              <button className="bg-zinc-900 text-white py-2 px-4 rounded-l-lg dark:text-black dark:bg-white shadow-lg">
                Monthly billing
              </button>
              <button
                className={`bg-zinc-500 text-black py-2 px-4 rounded-r-lg dark:text-zinc-400 dark:bg-zinc-900  ${isAnnualBillingDisabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                onMouseEnter={() => setIsAnnualBillingDisabled(true)}
                onMouseLeave={() => setIsAnnualBillingDisabled(false)}
                disabled={isAnnualBillingDisabled}
              >
                Annual billing
              </button>
            </div>
          </div>

          <div className="flex justify-center mt-12 space-x-6">
            <div className="border border-gray-700 rounded-lg p-6 w-80 flex flex-col dark:border-black">
              <div className="flex items-center justify-start gap-5">
                <h2 className="text-2xl font-bold text-white dark:text-black">Free</h2>
                <h3 className="text-black  text-xs  bg-zinc-300 rounded p-0.5">Most Popular</h3>
              </div>
              <p className="mt-4 text-4xl font-bold text-white dark:text-black">$0/m</p>
              <p className="text-gray-500 dark:text-black">Free</p>
              <ul className="mt-6 space-y-2 text-lg text-white dark:text-black">
                <li>Project Management</li>
                <li>Team Collaboration</li>
                <li>Task Automation</li>
                <li>Analytics & Reporting</li>
              </ul>
              <Button onClick={createRegister} variant='outline' className='w-full mt-auto dark:bg-white dark:text-black dark:hover:bg-zinc-100 '>Get Started!</Button>
            </div>

            <div className="border border-gray-700 rounded-lg p-6 w-80 flex flex-col dark:border-black">
              <h2 className="text-2xl font-bold text-white dark:text-black">Basic</h2>
              <p className="mt-4 text-4xl font-bold text-white dark:text-black">$14.99/m</p>
              <p className="text-gray-500 dark:text-black">Billed Monthly</p>
              <ul className="mt-6 space-y-2 text-lg text-white dark:text-black">
                <li>Project Management</li>
                <li>Team Collaboration</li>
                <li>Task Automation</li>
                <li>Analytics & Reporting</li>
                <li>Integrations</li>
                <li>Support</li>
              </ul>
              <button
                className={`w-full mt-auto p-2 rounded-md bg-zinc-500 dark:bg-neutral-900 dark:text-zinc-400  ${isButtonSubscribeDisabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                onMouseEnter={() => setIsButtonSubscribeDisabled(true)}
                onMouseLeave={() => setIsButtonSubscribeDisabled(false)}
                disabled={isButtonSubscribeDisabled}
              >
                Subscribe!

              </button>
            </div>

            <div className="border border-gray-700 rounded-lg p-6 w-80 flex flex-col dark:border-black ">
              <h2 className="text-2xl font-bold text-white dark:text-black">Pro</h2>
              <p className="mt-4 text-4xl font-bold text-white dark:text-black">$29.99/m</p>
              <p className="text-gray-500 dark:text-black">Billed Monthly</p>
              <ul className="mt-6 space-y-2 text-lg text-white mb-5 dark:text-black">
                <li>Project Management</li>
                <li>Team Collaboration</li>
                <li>Task Automation</li>
                <li>Analytics & Reporting</li>
                <li>Integrations</li>
                <li>Priority Support</li>
                <li>User Permissions</li>
                <li>Custom Workflows</li>
              </ul>
              <button
                className={`w-full mt-auto  p-2 rounded-md bg-zinc-500 dark:bg-neutral-900 dark:text-zinc-400  ${isButtonSubscribeDisabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                onMouseEnter={() => setIsButtonSubscribeDisabled(true)}
                onMouseLeave={() => setIsButtonSubscribeDisabled(false)}
                disabled={isButtonSubscribeDisabled}
              >
                Subscribe!

              </button>
            </div>
          </div>


          <div className='w-full h-full bg-zinc- rounded-t-lg mt-28 flex items-center p-8 justify-between border border-b-0 border-zinc-800 dark:border-black'>
            <h1 className='font-semibold text-4xl text-white p-7 dark:text-black'>Frequently Asked Questions</h1>
            <Accordion type="single" collapsible className="p-7 flex-1 space-y-4">
              <AccordionItem value="item-1">
                <AccordionTrigger className='text-white dark:text-black'>How does WorkNook improve productivity?</AccordionTrigger>
                <AccordionContent className='text-white dark:text-black'>
                  WorkNook increases your team's productivity by offering statistical and product management tools, individual and team sales collaboration features.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className='text-white dark:text-black'>Is WorkNook suitable for remote teams?</AccordionTrigger>
                <AccordionContent className='text-white dark:text-black'>
                  WorkNook is ideal for remote teams. Our platform was created to transform and optimize remote work, especially for e-commerce companies. With our tools and specialized consultancy, we provide a productive and collaborative home office environment. Plus, we offer efficiency solutions and detailed statistics to ensure your team stays connected and performs their tasks effectively, regardless of where they are working.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className='text-white dark:text-black'>Which tools can I integrate with WorkNook?</AccordionTrigger>
                <AccordionContent className='text-white dark:text-black'>
                  WorkNook integrates e-commerce platforms, CRM systems and data analysis tools. These integrations allow you to view statistics, track product sales, and analyze sales media directly on our dashboard, optimizing management and boosting your results.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>


        </div>

        <footer className="w-full h-full border border-l-0  border-zinc-800 dark:border-black bg-transparent p-6 flex items-center justify-center dark:bg-white ">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center space-x-6">
              <span className="ml-2 text-white font-bold text-lg dark:text-black">WorkNook</span>
            </div>
            <div className="flex space-x-7 items-center">
              <a href="https://github.com/KaykePeresD" target="_blank" rel="noopener noreferrer" className="relative group p-2">
                <span className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-50 dark:bg-gray-800 dark:group-hover:opacity-50 transition-opacity duration-200"></span>
                <Github fill="white" className="relative z-10 dark:currentColor" />
              </a>
              <a href="https://www.linkedin.com/in/kayke-peres-67b409284/" target="_blank" rel="noopener noreferrer" className="relative group p-2">
                <span className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-50 dark:bg-gray-800 dark:group-hover:opacity-50 transition-opacity duration-200"></span>
                <Linkedin fill="white" className="relative z-10 dark:currentColor" />
              </a>
            </div>
          </div>
        </footer>

      </main>
    </div>
  );
}


