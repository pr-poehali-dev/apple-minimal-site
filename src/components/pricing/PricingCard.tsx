
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export interface PricingFeature {
  text: string;
}

export interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: PricingFeature[];
  isPrimary?: boolean;
}

const PricingCard = ({ title, price, description, features, isPrimary = false }: PricingCardProps) => {
  return (
    <Card className={`border ${isPrimary ? 'border-2 border-black shadow-lg' : 'border-gray-200 hover:shadow-lg transition-shadow'}`}>
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">{title}</CardTitle>
        <div className="mt-4 mb-2">
          <span className="text-4xl font-bold">{price} ₽</span>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <Icon name="Check" className="h-5 w-5 text-green-500 mr-2" />
              <span>{feature.text}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button 
          className={`w-full rounded-full ${isPrimary ? 'bg-black hover:bg-gray-900' : ''}`}
        >
          Выбрать
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PricingCard;
