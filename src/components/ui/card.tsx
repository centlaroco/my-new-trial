import { Button } from "@/components/ui/button";

type CardProps = {
  title: string;
  schoolDescription: string;

  buttonLabel: string;
  buttonVariant?: "primary" | "secondary" | "tertiary";
};

export function Card({ title, schoolDescription, buttonLabel, buttonVariant = "primary" }: CardProps) {
  return (
    <div className="border border-gray-200 rounded-lg p-6 bg-white hover:bg-gray-50 transition-colors">
      <h1 className="text-xl font-semibold mb-2">{title}</h1>
      <p className="text-gray-600 mb-4">{schoolDescription}</p>
      <Button variant={buttonVariant}>{buttonLabel}</Button>
      <p className="text-gray-500 text-sm mt-2">{} </p>
    </div>
  );
}