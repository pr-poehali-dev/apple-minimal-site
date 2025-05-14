
import PricingCard, { PricingCardProps } from "./PricingCard";

const PricingSection = () => {
  const pricingPlans: PricingCardProps[] = [
    {
      title: "Базовый",
      price: "1 000",
      description: "Для начинающих пользователей",
      features: [
        { text: "Основные функции" },
        { text: "Поддержка по email" },
        { text: "Обновления в течение 1 года" },
      ],
    },
    {
      title: "Расширенный",
      price: "2 500",
      description: "Для профессионалов",
      features: [
        { text: "Все функции Базового плана" },
        { text: "Приоритетная поддержка" },
        { text: "Расширенные инструменты" },
        { text: "Доступ к обучающим материалам" },
      ],
      isPrimary: true,
    },
    {
      title: "Премиум",
      price: "5 000",
      description: "Для корпоративных клиентов",
      features: [
        { text: "Все функции Расширенного плана" },
        { text: "Персональный менеджер" },
        { text: "Индивидуальная настройка" },
        { text: "Безлимитные обновления" },
      ],
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Выберите подходящий план</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Мы предлагаем гибкие тарифные планы, соответствующие вашим потребностям
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
