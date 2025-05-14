
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4">SoftStore</h3>
            <p className="text-sm text-gray-600">
              Премиальное программное обеспечение для повышения вашей продуктивности.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Ссылки</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-gray-600 hover:text-black">Главная</Link></li>
              <li><Link to="/products" className="text-gray-600 hover:text-black">Продукты</Link></li>
              <li><Link to="/instructions" className="text-gray-600 hover:text-black">Инструкция</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Поддержка</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-600 hover:text-black">FAQ</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Техподдержка</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Контакты</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Связь</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-600 hover:text-black">Email: info@softstore.ru</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Телефон: +7 (123) 456-78-90</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 mt-8 border-t border-gray-200 text-sm text-gray-600">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© {new Date().getFullYear()} SoftStore. Все права защищены.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-black">Политика конфиденциальности</a>
              <a href="#" className="hover:text-black">Условия использования</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
