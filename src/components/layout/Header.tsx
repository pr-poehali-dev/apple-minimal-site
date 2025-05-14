
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-200/80">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center font-medium">
          <Icon name="Apple" className="w-5 h-5 mr-2" />
          <span className="text-lg">SoftStore</span>
        </Link>
        
        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-sm font-medium hover:text-gray-600 transition-colors">
            Главная
          </Link>
          <Link to="/products" className="text-sm font-medium hover:text-gray-600 transition-colors">
            Продукты
          </Link>
          <Link to="/instructions" className="text-sm font-medium hover:text-gray-600 transition-colors">
            Инструкция
          </Link>
        </nav>
        
        {/* Mobile menu button */}
        <Button variant="ghost" size="icon" className="md:hidden">
          <Icon name="Menu" className="h-6 w-6" />
        </Button>
      </div>
    </header>
  );
};

export default Header;
