import { Avatar, AvatarImage } from "./ui/avatar";

export default function Header() {
  return (
    <header className="p-4 border-b border-gray-200 bg-white shadow-sm">
      <div className="max-w-7xl w-full mx-auto flex gap-1 justify-between">
        <img src="https://operadora.legal/wp-content/uploads/2023/07/Logo-Legal.png.webp" className="w-auto h-10" alt="Logo" />
        <Avatar>
          <AvatarImage src="https://avatars.githubusercontent.com/u/25941354?s=400&u=9b127b59ea8980b52065517be777deb6cd858207&v=4" />
        </Avatar>
      </div>
    </header>
  );
}