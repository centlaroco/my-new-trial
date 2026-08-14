import { Button } from "@/components/ui/button";

type CardProps = {
  title: string;
  schoolDescription: string;
  description?: string;
  buttonLabel: string;
  buttonVariant?: "primary" | "secondary" | "tertiary";
  logo: string;
  logoAlt: string;
};

export function SchoolCard({ title, schoolDescription, description, buttonLabel, buttonVariant = "primary", logo, logoAlt = "logo", }: CardProps) {
  return (
    <div className="h-full flex flex-col justify-between border border-gray-200 rounded-lg p-6 bg-white hover:bg-gray-50 transition-colors">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold mb-2">{title}</h1>
          <p className="text-gray-600 mb-4">{schoolDescription}</p>
        </div>

        <div className="flex items-center justify-center w-20 h-20 p-3 min-w-[4rem] min-h-[4rem] shadow-md shadow-gray-300 rounded-md bg-gray-100">
          <img src={logo} alt={logoAlt} className="max-w-full max-h-full object-contain" />
        </div>
      </div>

      <div className="mt-4 flex items-center justify-start gap-4">
        <Button variant={buttonVariant}>{buttonLabel}</Button>
        <p className="text-gray-500 text-sm">{description}</p>
      </div>
    </div>
  ); 
}