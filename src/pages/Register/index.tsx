'use client';

// Importações de imagens
import Login01 from '@/assets/glenn-carstens-peters-npxXWgQ33ZQ-unsplash 1.png';

// Importações dos componentes
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuItem
} from "@/components/ui/dropdown-menu";
import { Input } from '@/components/ui/input';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

// Importações de ícones e hooks
import { EyeOff, Eye, Moon, Sun, PartyPopper, AlertCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';

export function Register() {
  const location = useLocation();
  const navigate = useNavigate();

  // Estado para controlar o alerta de sucesso ao criar uma conta
  const [showAlert, setShowAlert] = useState(location.state?.showAlert || false);
  const [username, setUsername] = useState(location.state?.username || ''); // Novo estado para o nome do usuário
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  useEffect(() => {
    if (showAlert) {
      // Define um temporizador para ocultar o alerta após 3 segundos
      const timer = setTimeout(() => {
        setShowAlert(false);
      }, 3000); // 3000ms = 3 segundos

      // Limpa o temporizador caso o componente seja desmontado antes do tempo
      return () => clearTimeout(timer);
    }
  }, [showAlert]);

  useEffect(() => {
    if (location.state?.showAlert) {
      setUsername(location.state.username);
      setShowSuccessAlert(true);

      setTimeout(() => {
        setShowSuccessAlert(false);
      }, 5000);
    }
  }, [location]);

  const handleLogin = () => {
    // Lógica de validação e login...
    if (email && password) {
      navigate('/Dashboard', { state: { showAlert: true, username: username } });
    } else {
      setShowErrorAlert(true);
      setTimeout(() => {
        setShowErrorAlert(false);
      }, 5000);
    }
  };

  // Função para navegação entre páginas
  function createNewRegister() {
    navigate('/Register');
  }

  function createHomePage() {
    navigate('/HomePage');
  }

  // Estado e função para alternar o modo escuro/claro
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

  // Estados para os inputs de email e senha
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showErrorAlert, setShowErrorAlert] = useState(false);

  // Função para validar o email
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Função para validar a senha
  const validatePassword = (password: string) => {
    return password.length >= 6;
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = () => {
    if (validateEmail(email) && validatePassword(password)) {
      // Se email e senha forem válidos, mostra o alerta de sucesso
      const userName = email.split('@')[0]; // Exemplo simples para pegar o nome de usuário
      setShowAlert(true);
      setUsername(userName); // Define o nome de usuário
      setTimeout(() => {
        navigate('/Dashboard', { state: { showAlert: true, username: userName } });
      }, 1000); // Um pequeno atraso para mostrar o alerta antes de redirecionar
    } else {
      // Se email ou senha forem inválidos, mostra o alerta de erro
      setShowErrorAlert(true);
      setTimeout(() => {
        setShowErrorAlert(false);
      }, 3000);
    }
  };

  // Estado e função para alternar a visibilidade da senha
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className={`${darkMode && "dark"} `}>
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

        <div className="flex mt-12 w-full max-w-7xl shadow-lg rounded-lg overflow-hidden">
          {/* Seção do formulário */}
          <div className="border rounded-s-lg border-r-0 border-zinc-800 dark:border-black p-8 flex-1 flex flex-col">
            <div className="flex flex-col justify-center">
              <h2 className="text-4xl font-bold text-white dark:text-black">Welcome!</h2>
              <p className="text-lg text-gray-400 dark:text-gray-700 mt-2">Sign in to</p>
            </div>

            {/* Seção Input */}
            <div className="flex flex-col items-center justify-center mt-24">
              <div className='space-y-4 w-full max-w-md'>
                <h2 className='text-white dark:text-black'>E-mail</h2>
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='Enter Your E-mail'
                  type='email'
                  className='bg-transparent text-white dark:text-black w-full'
                />
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
                <Button
                  onClick={handleLogin}
                  className='flex w-full justify-center items-center dark:bg-zinc-200'>
                  Access
                </Button>
              </div>
              <div className='flex mt-5 gap-2 text-white dark:text-black '>
                <p className='font-light'>Don’t have an Account?</p>
                <a href=""
                  className='font-medium border-b'
                  onClick={createNewRegister} >Register</a>
              </div>
            </div>
          </div>

          <div className="w-1/2">
            <img src={Login01} alt="" />
          </div>
        </div>

        {/* Alerta de sucesso ao criar conta */}
        {showAlert && (
          <div className="fixed top-0 left-1/2 transform -translate-x-1/2 mt-4 transition-transform duration-500 ease-in-out z-50">
            <Alert>
              <PartyPopper className="h-4 w-4" />
              <AlertTitle>Account Created!</AlertTitle>
              <AlertDescription>
                Welcome, {username}!
              </AlertDescription>
            </Alert>
          </div>
        )}

        {/* Alerta de erro ao tentar logar */}
        {showErrorAlert && (
          <div className="fixed top-0 left-1/2 transform -translate-x-1/2 mt-4 transition-transform duration-500 ease-in-out z-50">
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error!</AlertTitle>
              <AlertDescription>
                Invalid email or password
              </AlertDescription>
            </Alert>
          </div>
        )}

      </main>
    </div>
  );
}