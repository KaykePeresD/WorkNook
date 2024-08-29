import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface UserAvatarProps {
    username: string;
    imageUrl: string; // imageUrl é opcional
  }
  
  const UserAvatar: React.FC<UserAvatarProps> = ({ username, imageUrl }) => {
    // Função para extrair as iniciais
    function getInitials(username: string): string {
      return username.slice(0, 2).toUpperCase();
    }
  
    return (
      <Avatar className="w-12 h-12">
        <AvatarImage
          src={imageUrl || "/path/to/default/avatar.png"} // Coloque o caminho para uma imagem padrão
          alt={username}
        />
        <AvatarFallback>{getInitials(username)}</AvatarFallback>
      </Avatar>
    );
  };
  
  export default UserAvatar;