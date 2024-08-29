'use client'

import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from '@/lib/utils';

import React, { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuGroup
} from "@/components/ui/dropdown-menu";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { Home, ChartBarIncreasingIcon, BusFrontIcon, MessageCircleHeartIcon, Sun, Moon, CalendarIcon, Settings, TrendingUp, MessageCircle, BellDot, ListTodo, LogOut } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis, Label, Pie, PieChart } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from '@/components/ui/chart';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useNavigate } from 'react-router-dom';
import { type ChartConfig } from '@/components/ui/chart';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { OrderTableFilters } from '@/orders/order-table-filters';


export function Dashboard() {

  //navigate

  const navigate = useNavigate();


  function createRegister() {
    navigate('/login')
  }
  // register welcome

  const [username, setUsername] = useState('');

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);


  // calendar 
  const [date, setDate] = React.useState<Date>();

  // hour time
  const [currentDateTime, setCurrentDateTime] = useState('');

  useEffect(() => {
    const now = new Date();
    const formattedDateTime = format(
      now,
      "d 'de' MMMM 'de' yyyy | HH:mm 'GMT'",
      { locale: ptBR }
    );

    setCurrentDateTime(formattedDateTime);
  }, []);


  //dark mode

  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('darkMode');
    return savedTheme === 'true' || false;
  });

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      localStorage.setItem('darkMode', !prevMode);
      return !prevMode;
    });
  };

  // Charts

  const pieData = [
    { name: "Woman", value: 367, fill: '#4d648d' },
    { name: "Men", value: 410, fill: '#1F3A5F' },
    { name: "Child", value: 224, fill: '#acc2ef' },
    { name: "Sport", value: 678, fill: '#3D5A80' },
    { name: "Streetwear", value: 158, fill: '#cee8ff' }
  ];

  const chartData = [
    { month: "January", Order: 186, Revenue: 80 },
    { month: "February", Order: 305, Revenue: 200 },
    { month: "March", Order: 237, Revenue: 120 },
    { month: "April", Order: 73, Revenue: 190 },
    { month: "May", Order: 209, Revenue: 130 },
    { month: "June", Order: 214, Revenue: 140 },
    { month: "July", Order: 304, Revenue: 400 },
    { month: "August", Order: 309, Revenue: 420 },
  ];

  const chartConfig = {
    Order: {
      label: "Order",
    },
    Revenue: {
      label: "Revenue",
    },
  } satisfies ChartConfig

  const totalSales = React.useMemo(() => {
    return pieData.reduce((acc, curr) => acc + curr.value, 0)
  }, [])


  const pieConfig = {
    sales: {
      label: "Sales",
    },
    woman: {
      label: "Woman",
      color: "#4d648d",
    },
    men: {
      label: "Men",
      color: "#1F3A5F",
    },
    child: {
      label: "Child",
      color: "#acc2ef",
    },
    sports: {
      label: "Sport",
      color: "#3D5A80",
    },
    streetwear: {
      label: "Streetwear",
      color: '#cee8ff',
    },
  } satisfies ChartConfig

  //faturas recentes

  interface Invoice {
    id: string;
    client: string;
    orderDate: string;
    status: string;
    amount: number;
  }

  interface PaginationComponentProps {
    invoices: Invoice[];
  }

  const PaginationComponent: React.FC<PaginationComponentProps> = ({ invoices }) => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const invoicesPerPage = 5;
    const totalInvoices = invoices.length;
    const totalPages = Math.ceil(totalInvoices / invoicesPerPage);

    const startIndex = (currentPage - 1) * invoicesPerPage;
    const displayedInvoices = invoices.slice(startIndex, startIndex + invoicesPerPage);

    const handlePageChange = (pageNumber: number) => {
      setCurrentPage(pageNumber);


      // Manter a tabela visível
      const tableElement = document.getElementById('table-id');
      if (tableElement) {
        tableElement.scrollIntoView({ behavior: 'smooth' });
      }
    };
    // avatar
    interface UserAvatarProps {
      username: string;
      imageUrl?: string; // imageUrl é opcional
    }

    function getInitials(username: string): string {
      return username.slice(0, 2).toUpperCase();
    }

   // Filtrar produtos por 


    return (
      <div className={`${darkMode && "dark"}`}>
        <div className=" flex h-full bg-black dark:bg-white  dark:text-black">
          {/* Barra Lateral */}
          <aside className="w-64 border border-zinc-600 border-l-0 border-b-0 border-t-0 flex flex-col sticky top-0 h-screen">
            {/* Título com espaçamento inferior */}
            <div className="p-4 flex justify-center items-center w-full ">
              <a className="text-white dark:text-black p-6 font-bold text-3xl cursor-pointer">WorkNook</a>
            </div>

            {/* Navegação */}
            <nav className=" flex-grow text-white dark:text-black">
              <ul className='space-y-3'>
                <li className="flex items-center p-5 hover:bg-zinc-950 dark:hover:bg-zinc-100 cursor-pointer">
                  <Home className="mr-3" />
                  Dashboard
                </li>
                <li className="flex items-center p-5 hover:bg-zinc-950 dark:hover:bg-zinc-100 cursor-pointer">
                  <ChartBarIncreasingIcon className="mr-3" />
                  Analytics Team
                </li>
                <li className="flex items-center p-5 hover:bg-zinc-950 dark:hover:bg-zinc-100 cursor-pointer">
                  <BusFrontIcon className="mr-3" />
                  Orders
                </li>
                <li className="flex items-center p-5 hover:bg-zinc-950 dark:hover:bg-zinc-100 cursor-pointer">
                  <MessageCircleHeartIcon className="mr-3" />
                  Marketing
                </li>
                <li className="flex items-center p-5 hover:bg-zinc-950 dark:hover:bg-zinc-100 cursor-pointer">
                  <TrendingUp className="mr-3" />
                  Performance
                </li>
                <li className="flex items-center p-5 hover:bg-zinc-950 dark:hover:bg-zinc-100 cursor-pointer">
                  <MessageCircle className="mr-3" />
                  Chat Team
                </li>
                <li className="flex items-center p-5 hover:bg-zinc-950 dark:hover:bg-zinc-100 cursor-pointer">
                  <ListTodo className="mr-3" />
                  ToDo
                </li>

                <li className="flex items-center  border border-r-0 border-l-0 border-b-0 border-zinc-400 p-5 hover:bg-zinc-950 dark:hover:bg-zinc-100 cursor-pointer">
                  <Settings className="mr-3" />
                  Settings
                </li>

                <li onClick={createRegister} className="flex items-center p-5 hover:bg-zinc-950 dark:hover:bg-zinc-100 cursor-pointer">
                  <LogOut className="mr-3" />
                  Logout
                </li>
              </ul>

            </nav>
          </aside>
          {/* Área Principal */}
          <div className="flex flex-col flex-1">
            {/* Barra Superior */}
            <header className="flex justify-between items-center  border border-zinc-600 border-l-0 dark:border-black p-4">
              <div>
                <h1 className="text-lg text-white dark:text-black dark:bg-white">Bem-vindo, {username}</h1>
                <span className='text-white dark:text-black dark:bg-white'>{currentDateTime}</span>
              </div>
              <div className='flex items-center space-x-5'>
                <BellDot className='text-white dark:text-black' />


                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Avatar className="w-12 h-12 cursor-pointer">
                      <AvatarImage alt={username} />
                      <AvatarFallback className='text-black dark:text-white'>{getInitials(username)}</AvatarFallback>
                    </Avatar>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className='w-56'>
                    <DropdownMenuLabel>
                      My Account
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                      <DropdownMenuItem>
                        Profile
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={toggleDarkMode} >
                        <button className='flex items-center justify-center gap-3' onClick={toggleDarkMode}>
                          {darkMode ? (
                            <Moon fill="white" className="w-7 h-7" />
                          ) : (
                            <Sun className="w-7 h-7" />
                          )}
                          {darkMode ? "Dark" : "Light"}
                        </button>
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>


              </div>



            </header>

            {/* Conteúdo Principal */}
            <div className="p-6 text-white dark:text-black dark:bg-white border border-zinc-600 dark:border-black flex-1 overflow-y-auto">
              {/* Cartões de Estatísticas */}
              <div className="grid grid-cols-3 gap-6 mb-6">
                <div className="dark:bg-zinc-50 bg-primary-primary border border-white dark:border-black p-6 rounded-lg shadow-lg">
                  <div className="text-sm">Average Revenue</div>
                  <div className="text-3xl font-bold ">$25,565</div>
                  <div className="text-green-500 "> $20,452</div>
                  <div className="text-green-800 bg-green-500 rounded-md w-12 flex justify-center">+20%</div>
                </div>
                <div className="dark:bg-zinc-50 bg-primary-primary  border border-white dark:border-black p-6 rounded-lg shadow-lg">
                  <div className="text-sm">Customer Return</div>
                  <div className="text-3xl font-bold">$7,956</div>
                  <div className="text-red-500"> $6,759</div>
                  <div className="text-red-800 bg-red-500 rounded-md w-12 flex justify-center">-15%</div>
                </div>
                <div className="rounded-lg shadow-lg">
                  <Card className="flex flex-col bg-zinc-100 dark:bg-gray-600">
                    <CardHeader className='items-center'>
                      <CardTitle>Category</CardTitle>
                      <CardDescription>January - August 2024</CardDescription>
                    </CardHeader>

                    <CardContent className='flex-1 pb-0' >
                      <ChartContainer config={pieConfig} className='mx-auto aspect-square max-h-[250px]'>
                        <PieChart>
                          <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
                          <Pie data={pieData}
                            dataKey='value'
                            nameKey='name'
                            innerRadius={60}
                            strokeWidth={5}
                          >
                            <Label
                              content={({ viewBox }) => {
                                if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                  return (
                                    <text
                                      x={viewBox.cx}
                                      y={viewBox.cy}
                                      textAnchor="middle"
                                      dominantBaseline="middle"
                                    >
                                      <tspan
                                        x={viewBox.cx}
                                        y={viewBox.cy}
                                        className="fill-foreground text-3xl font-bold"
                                      >
                                        {totalSales.toLocaleString()}
                                      </tspan>
                                      <tspan
                                        x={viewBox.cx}
                                        y={(viewBox.cy || 0) + 24}
                                        className="fill-muted-foreground"
                                      >
                                        Sales
                                      </tspan>
                                    </text>
                                  )
                                }
                              }}
                            />
                          </Pie>
                        </PieChart>
                      </ChartContainer>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Gráfico de Linha */}
              <div className="dark:bg-zinc-50 border border-white dark:border-black p-6 rounded-lg shadow-lg mb-6">
                <h2 className=" mb-4">Revenue per month</h2>
                <ChartContainer config={chartConfig} className='h-[400px] w-full'>
                  <BarChart accessibilityLayer data={chartData} >
                    <CartesianGrid vertical={false} className='border border-zinc-50' />
                    <XAxis
                      dataKey="month"
                      tickLine={false}
                      tickMargin={10}
                      axisLine={false}
                      tickFormatter={(value) => value.slice(0, 3)}
                    />
                    <ChartTooltip content={< ChartTooltipContent />} />
                    <ChartLegend content={<ChartLegendContent />} />
                    <Bar dataKey="Order" fill='#1F3A5F' radius={4} />
                    <Bar dataKey="Revenue" fill="#acc2ef" radius={4} />
                  </BarChart>
                </ChartContainer>
              </div>

              {/* Tabela de Faturas Recentes */}
              <div className="dark:bg-zinc-50 border border-white dark:border-black p-6 rounded-lg shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-white dark:text-black font-semibold">Your Clients</h2>
                  <Dialog>
                    <DialogTrigger asChild>
                        <OrderTableFilters />
                    </DialogTrigger>

                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Search for</DialogTitle>
                        <DialogDescription>Filter date or status</DialogDescription>
                      </DialogHeader>


                      <Popover>
                        <PopoverTrigger asChild>
                          <Button variant='outline' className={cn(
                            "w-full justify-start text-left font-normal",
                            !date && "text-muted-foreground"
                          )}>
                            <CalendarIcon className='mr-2 h-4 w-4' />
                            {date ? format(date, "PPP") : <span>Pick a date</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className='w-auto p-0'>
                          <Calendar mode='single'
                            selected={date}
                            onSelect={setDate}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <div className='flex items-center justify-center border p-2 rounded hover:bg-zinc-100'>
                        <DropdownMenu>
                          <DropdownMenuTrigger>Status</DropdownMenuTrigger>
                          <DropdownMenuContent>
                            <DropdownMenuItem  className='text-green-500 font-semibold'>Paid</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className='text-red-500 font-semibold'>Not Paid</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                      <Button type='submit' variant='outline' className='font-bold'>Save</Button>
                    </DialogContent>
                  </Dialog>
                </div>

                <div className="border p-2 dark:border-black border-zinc-700 rounded">
                  <Table id='table-id'>
                    <TableHeader>
                      <TableHead>No</TableHead>
                      <TableHead>ID</TableHead>
                      <TableHead>Client</TableHead>
                      <TableHead>Order Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Amount</TableHead>
                    </TableHeader>
                    <TableBody>
                      {displayedInvoices.map((invoice, i) => (
                        <TableRow key={i} className="border-zinc-700 hover:bg-zinc-950 dark:hover:bg-zinc-200">
                          <TableCell>#{startIndex + i + 1}</TableCell>
                          <TableCell>{invoice.id}</TableCell>
                          <TableCell>{invoice.client}</TableCell>
                          <TableCell>{invoice.orderDate}</TableCell>
                          <TableCell className={invoice.status === 'Paid' ? 'text-green-500' : 'text-red-500'}>
                            {invoice.status}
                          </TableCell>
                          <TableCell>${invoice.amount.toFixed(2)}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
                <Pagination className="mt-5">
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          handlePageChange(currentPage > 1 ? currentPage - 1 : 1);
                        }}
                      />
                    </PaginationItem>

                    {[...Array(totalPages)].map((_, index) => (
                      <PaginationItem key={index}>
                        <PaginationLink
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            handlePageChange(index + 1);
                          }}
                          className={currentPage === index + 1 ? 'bg-blue-500 text-white' : ''}
                        >
                          {index + 1}
                        </PaginationLink>
                      </PaginationItem>
                    ))}

                    {totalPages > 1 && (
                      <PaginationItem>
                      </PaginationItem>
                    )}

                    <PaginationItem>
                      <PaginationNext
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          handlePageChange(currentPage < totalPages ? currentPage + 1 : totalPages);
                        }}
                      />
                    </PaginationItem>
                  </PaginationContent>

                </Pagination>

              </div>

            </div>

          </div>

        </div>

      </div>
    );
  };

  return (
    <PaginationComponent invoices={[
      { id: '1', client: 'Ana', orderDate: 'August 8, 2024', status: 'Not Paid', amount: 100.00 },
      { id: '2', client: 'Clarice', orderDate: 'January 19, 2024', status: 'Paid', amount: 200.00 },
      { id: '3', client: 'John', orderDate: 'July 8, 2024', status: 'Paid', amount: 300.00 },
      { id: '4', client: 'Leonardo', orderDate: 'August 10, 2024', status: 'Not Paid', amount: 400.00 },
      { id: '5', client: 'Théo', orderDate: 'September 15, 2024', status: 'Paid', amount: 500.00 },
      { id: '6', client: 'Fabiana', orderDate: 'March 12, 2024', status: 'Paid', amount: 600.00 },
      { id: '7', client: 'Rafaela', orderDate: 'August 28, 2024', status: 'Paid', amount: 700.00 },
      { id: '8', client: 'Heitor', orderDate: 'July 11, 2024', status: 'Paid', amount: 800.00 },
      { id: '9', client: 'Igor', orderDate: 'August 1, 2024', status: 'Not Paid', amount: 900.00 },
      { id: '10', client: 'Cristina', orderDate: 'October 29, 2024', status: 'Paid', amount: 1000.00 },
      { id: '11', client: 'Donizete', orderDate: 'November 16, 2024', status: 'Paid Paid', amount: 100.00 },
      { id: '12', client: 'Juliana', orderDate: 'August 9, 2024', status: 'Not Paid', amount: 200.00 },
      { id: '13', client: 'Ana Clara', orderDate: 'August 14, 2024', status: 'Not Paid', amount: 240.00 },
      { id: '14', client: 'Emmanuele', orderDate: 'August 17, 2024', status: 'Paid', amount: 400.00 },
      { id: '15', client: 'Sergio', orderDate: 'October 18, 2024', status: 'Paid', amount: 125.00 },
    ]} />
  )
};