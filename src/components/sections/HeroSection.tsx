
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
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
  );
};

export default HeroSection;
