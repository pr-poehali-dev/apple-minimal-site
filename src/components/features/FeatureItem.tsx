
import Icon from "@/components/ui/icon";
import { LucideIcon } from "lucide-react";

export interface FeatureItemProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureItem = ({ icon, title, description }: FeatureItemProps) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="mb-6 bg-gray-100 p-4 rounded-full">
        <Icon name={icon} className="h-8 w-8" />
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600">
        {description}
      </p>
    </div>
  );
};

export default FeatureItem;
