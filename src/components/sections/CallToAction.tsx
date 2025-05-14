
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
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
  );
};

export default CallToAction;
