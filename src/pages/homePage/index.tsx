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


import { useState } from 'react';

// IMAGES
import logo from '@/assets/Work Nook.png';
import logo1 from '@/assets/logoipsum-217.svg';

import Work from '@/assets/workimg.png';
import Work2 from '@/assets/maxim-ilyahov-TAJapYDH0Io-unsplash 1.png';
import Work3 from '@/assets/kpIV42iSLXo4p8D9bjTMWEtQIM.png.png';
import Work4 from '@/assets/aleh-tsikhanau-Qy94uqEB8KI-unsplash 1.png';
import Work5 from '@/assets/PitypfrQgRRbARPoJad3ctNFQAQ.png.png';
import { Github, Linkedin, Moon, Sun } from 'lucide-react';
import { useNavigate } from "react-router-dom";





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
  }

 
  return (
    <div className={`${darkMode && "dark"}`}>
      <main className='bg-black dark:bg-white max-h-full'>
        <div className='p-3 mr-36 flex justify-end items-end'>
          <DropdownMenu>
            <DropdownMenuTrigger className='p-2 rounded-full'>
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

      <div className=" w-full max-w-6xl mx-auto">
        
        <div className='flex mt-14 justify-center p-1'>
          <h1 className='font-semibold text-5xl text-white dark:text-black'>
            Work Efficiently
          </h1>
        </div>

        <div className='flex justify-center items-center p-4'>
          <h1 className='font-semibold text-5xl text-white dark:text-black'>With</h1>
        </div>

        <div className='flex justify-center items-center gap-5'>
          <h1 className='font-bold text-7xl text-white dark:text-black'>WorkNook</h1>
          <img src={logo} className='h-24 w-32 rounded-full' />
        </div>

        <img src={Work} className='mt-6' />

        <div></div>

        <div className='flex justify-center space-x-8 mt-14 '>
          {Array.from({ length: 6 }).map(() => {
            return <img src={logo1} className='dark:invert' />;
          })}
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

        <div className='relative mt-28'>
          <img src={Work5} alt="Collaboration" className='w-full h-auto' />
          <div className='absolute inset-0 flex items-end'>
            <div className='max-w-xl ml-8'>
              <h2 className='font-bold text-4xl text-white leading-tight dark:text-black'>
                Real-Time Team Collaboration and Communication Enhancements
              </h2>
              <Button onClick={createRegister} variant='secondary' className='m-5 p-6 dark:bg-black  dark:text-white'>Get Started!</Button>
            </div>
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

      <footer className="w-full h-full border border-zinc-800 dark:border-black bg-transparent p-6 flex items-center justify-center dark:bg-white ">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <img src={logo} className="h-10 w-12 rounded-md" />
            <span className="ml-2 text-white font-bold text-lg dark:text-black">WorkNook</span>
          </div>
          <div className="flex space-x-7 items-center ">
            <a href="https://github.com/KaykePeresD" target="_blank" rel="noopener noreferrer">
              <Github fill="white" 
    className="dark:currentColor  " />
            </a>
            <a href="https://www.linkedin.com/in/kayke-peres-67b409284/" target="_blank" rel="noopener noreferrer" className=''>
              <Linkedin fill="white" 
             className="dark:currentColor" />
            </a>
           
          </div>
        </div>
      </footer>

    </main>
    </div>
  );
}


