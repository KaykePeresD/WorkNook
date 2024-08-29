'use client'

import Login01 from '@/assets/glenn-carstens-peters-npxXWgQ33ZQ-unsplash 1.png'

// COMP
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuItem
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle, Eye, EyeOff, Moon, PartyPopper, Sun } from "lucide-react";

import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';



export function Login() {

  
  // Confirm Input
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showErrorAlert, setShowErrorAlert] = useState(false);


  const handleInputRegister = () => {
    if (!email || !username || !password || !confirmPassword) {
      setShowErrorAlert(true);
      
      // Temporizador para esconder o alerta de erro após 5 segundos
      setTimeout(() => {
        setShowErrorAlert(false);
      }, 5000);
      
      

      return;
    }

    // Verifica se as senhas coincidem
    if (password !== confirmPassword) {
      setShowErrorAlert(true);

      // Temporizador para esconder o alerta de erro após 5 segundos
      setTimeout(() => {
        setShowErrorAlert(false);
      }, 5000);

      return;
    }

    localStorage.setItem('username', username);

    
    

    navigate('/login', { state: { showAlert: true, username: username } });
  };
  // navigation pages
  const navigate = useNavigate();

  function createRegister() {
    navigate('/login')
  }

  function createHomePage() {
    navigate('/HomePage')
  }

  

  // Dark Mode
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

  // Visibilidade da Senha
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  // Function para o Alert
  const [ShowAlert, setShowAlert] = useState(false);

  // Função para exibir o alerta de registro
  const handleRegister = () => {
    // Lógica de registro aqui (se necessário)
    setShowAlert(true);
    // Ocultar o alerta após 3 segundos
    setTimeout(() => {
      navigate('/login', { state: { showAlert: true } });
    }, 1000); // Um pequeno atraso para mostrar o alerta antes de redirecionar
    
  };


  return (
    <div className={`${darkMode && "dark"}`}>
      <main className="bg-black dark:bg-white min-h-screen w-full flex items-center justify-center">
        <div className='p-5 flex justify-between items-center w-full absolute top-0'>
        <a
            onClick={createHomePage}
            className="text-white dark:text-black font-semibold text-xl cursor-pointer">WorkNook</a>
          <DropdownMenu>
            <DropdownMenuTrigger className='p-2 mr-12 rounded-full'>
              <Moon fill="white" className="block dark:hidden w-7 h-7" />
              <Sun className="hidden dark:block w-7 h-7" />
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

        <div className="flex mt-16 mb-7 w-full max-w-7xl shadow-lg rounded-lg overflow-hidden">
          {/* Seção do formulário */}
          <div className="border rounded-s-lg border-r-0 border-zinc-800 dark:border-black p-8 flex-1 flex flex-col">
            <div className="flex flex-col justify-center">
              <h2 className="text-4xl font-bold text-white dark:text-black">Welcome!</h2>
              <p className="text-lg text-gray-400 dark:text-gray-700 mt-2">Sign up to</p>
            </div>

            {/* Seção Input */}
            <div className="flex flex-col items-center justify-center mt-12">
              <div className='space-y-4 w-full max-w-md'>
                <h2 className='text-white dark:text-black'>E-mail</h2>
                <Input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  placeholder='Enter Your E-mail'
                  type='email'
                  className='bg-transparent text-white dark:text-black w-full' />

                <h2 className='text-white dark:text-black'>User name</h2>
                <Input
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                  placeholder='Enter Your User name'
                  type='text'
                  className='bg-transparent text-white dark:text-black w-full' />

                <h2 className='text-white dark:text-black'>Password</h2>
                <div className="flex items-center space-x-2 w-full">
                  <Input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='Password'
                    type={passwordVisible ? 'text' : 'password'}
                    className='bg-transparent text-white dark:text-black flex-1'
                  />
                  <Button
                    onClick={togglePasswordVisibility}
                    className="p-2 dark:bg-zinc-200">
                    {passwordVisible ? <Eye /> : <EyeOff />}
                  </Button>
                </div>

                <h2 className='text-white dark:text-black'>Confirm Password</h2>
                <div className="flex items-center space-x-2 w-full">
                  <Input
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder='Confirm Password'
                    type={passwordVisible ? 'text' : 'password'}
                    className='bg-transparent text-white dark:text-black flex-1'
                  />
                  <Button
                    onClick={togglePasswordVisibility}
                    className="p-2 dark:bg-zinc-200">
                    {passwordVisible ? <Eye /> : <EyeOff />}
                  </Button>
                </div>

                <Button
                  onClick={handleInputRegister}
                  className='flex w-full justify-center items-center dark:bg-zinc-200'>
                  Register
                </Button>


                <p className='text-center text-white dark:text-black mt-4'>
                  Already have an Account? <a href="/login" className="underline">Access</a>
                </p>
              </div>
            </div>
          </div>

          <div className="w-auto">
            <img src={Login01} alt="Imagem ilustrativa de login" />
          </div>
        </div>
        {showErrorAlert && (
          <div className="fixed top-0 left-1/2 transform -translate-x-1/2 mt-4 transition-transform duration-500 ease-in-out z-50">
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error!</AlertTitle>
              <AlertDescription>
                Missing form fields
              </AlertDescription>
            </Alert>
          </div>
        )}

        {ShowAlert && (
          <div className="fixed top-0 left-1/2 transform -translate-x-1/2 mt-4 transition-transform duration-500 ease-in-out z-50">
            <Alert>
              <PartyPopper className="h-4 w-4" />
              <AlertTitle>Account Created!</AlertTitle>
              <AlertDescription>
                Your account has been successfully created!
              </AlertDescription>
            </Alert>
          </div>
        )}
      </main>
    </div>
  );
}