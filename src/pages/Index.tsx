
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      {/* Header */}
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

      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-20 pb-16 md:pt-32 md:pb-24 px-4">
          <div className="container flex flex-col items-center text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Программное обеспечение премиум-класса
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl">
              Откройте для себя мощные инструменты, которые расширят ваши возможности и улучшат вашу продуктивность.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="rounded-full px-8 py-6">
                Купить сейчас
              </Button>
              <Button variant="outline" size="lg" className="rounded-full px-8 py-6">
                Узнать больше
              </Button>
            </div>
          </div>
        </section>

        {/* Gradient Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent my-16" />

        {/* Pricing Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Выберите подходящий план</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Мы предлагаем гибкие тарифные планы, соответствующие вашим потребностям
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Pricing Card 1 */}
              <Card className="border border-gray-200 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Базовый</CardTitle>
                  <div className="mt-4 mb-2">
                    <span className="text-4xl font-bold">1 000 ₽</span>
                  </div>
                  <CardDescription>Для начинающих пользователей</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <Icon name="Check" className="h-5 w-5 text-green-500 mr-2" />
                      <span>Основные функции</span>
                    </li>
                    <li className="flex items-center">
                      <Icon name="Check" className="h-5 w-5 text-green-500 mr-2" />
                      <span>Поддержка по email</span>
                    </li>
                    <li className="flex items-center">
                      <Icon name="Check" className="h-5 w-5 text-green-500 mr-2" />
                      <span>Обновления в течение 1 года</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full rounded-full">Выбрать</Button>
                </CardFooter>
              </Card>

              {/* Pricing Card 2 */}
              <Card className="border-2 border-black shadow-lg">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Расширенный</CardTitle>
                  <div className="mt-4 mb-2">
                    <span className="text-4xl font-bold">2 500 ₽</span>
                  </div>
                  <CardDescription>Для профессионалов</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <Icon name="Check" className="h-5 w-5 text-green-500 mr-2" />
                      <span>Все функции Базового плана</span>
                    </li>
                    <li className="flex items-center">
                      <Icon name="Check" className="h-5 w-5 text-green-500 mr-2" />
                      <span>Приоритетная поддержка</span>
                    </li>
                    <li className="flex items-center">
                      <Icon name="Check" className="h-5 w-5 text-green-500 mr-2" />
                      <span>Расширенные инструменты</span>
                    </li>
                    <li className="flex items-center">
                      <Icon name="Check" className="h-5 w-5 text-green-500 mr-2" />
                      <span>Доступ к обучающим материалам</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full rounded-full bg-black hover:bg-gray-900">Выбрать</Button>
                </CardFooter>
              </Card>

              {/* Pricing Card 3 */}
              <Card className="border border-gray-200 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Премиум</CardTitle>
                  <div className="mt-4 mb-2">
                    <span className="text-4xl font-bold">5 000 ₽</span>
                  </div>
                  <CardDescription>Для корпоративных клиентов</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <Icon name="Check" className="h-5 w-5 text-green-500 mr-2" />
                      <span>Все функции Расширенного плана</span>
                    </li>
                    <li className="flex items-center">
                      <Icon name="Check" className="h-5 w-5 text-green-500 mr-2" />
                      <span>Персональный менеджер</span>
                    </li>
                    <li className="flex items-center">
                      <Icon name="Check" className="h-5 w-5 text-green-500 mr-2" />
                      <span>Индивидуальная настройка</span>
                    </li>
                    <li className="flex items-center">
                      <Icon name="Check" className="h-5 w-5 text-green-500 mr-2" />
                      <span>Безлимитные обновления</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full rounded-full">Выбрать</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 bg-gray-100 p-4 rounded-full">
                  <Icon name="Zap" className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">Высокая производительность</h3>
                <p className="text-gray-600">
                  Оптимизированное программное обеспечение, которое обеспечивает быструю и стабильную работу.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 bg-gray-100 p-4 rounded-full">
                  <Icon name="Shield" className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">Безопасность</h3>
                <p className="text-gray-600">
                  Надежная защита ваших данных с использованием современных технологий шифрования.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 bg-gray-100 p-4 rounded-full">
                  <Icon name="Headphones" className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">24/7 Поддержка</h3>
                <p className="text-gray-600">
                  Наша команда экспертов всегда готова ответить на ваши вопросы и помочь с решением проблем.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-4 bg-black text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Готовы начать?</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Присоединяйтесь к тысячам довольных пользователей и расширьте свои возможности с нашим программным обеспечением.
            </p>
            <Button size="lg" className="rounded-full px-8 py-6 bg-white text-black hover:bg-gray-100">
              Попробовать бесплатно
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
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
              <p>© 2025 SoftStore. Все права защищены.</p>
              <div className="flex space-x-4 mt-4 md:mt-0">
                <a href="#" className="hover:text-black">Политика конфиденциальности</a>
                <a href="#" className="hover:text-black">Условия использования</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
