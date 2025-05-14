
import FeatureItem, { FeatureItemProps } from "./FeatureItem";

const FeaturesSection = () => {
  const features: FeatureItemProps[] = [
    {
      icon: "Zap",
      title: "Высокая производительность",
      description: "Оптимизированное программное обеспечение, которое обеспечивает быструю и стабильную работу."
    },
    {
      icon: "Shield",
      title: "Безопасность",
      description: "Надежная защита ваших данных с использованием современных технологий шифрования."
    },
    {
      icon: "Headphones",
      title: "24/7 Поддержка",
      description: "Наша команда экспертов всегда готова ответить на ваши вопросы и помочь с решением проблем."
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <FeatureItem key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
