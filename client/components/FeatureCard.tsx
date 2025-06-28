import { ReactNode } from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
}

export default function FeatureCard({
  title,
  description,
  icon,
}: FeatureCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-500 to-purple-700 p-8 text-white transition-all duration-300 hover:scale-105 hover:shadow-xl">
      <div className="relative z-10">
        {icon && <div className="mb-4 text-3xl opacity-80">{icon}</div>}
        <h3 className="mb-4 text-xl font-semibold">{title}</h3>
        <p className="text-purple-100 leading-relaxed">{description}</p>
      </div>

      {/* Background decoration */}
      <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-white/10 transition-transform duration-300 group-hover:scale-110" />
      <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-white/5 transition-transform duration-300 group-hover:scale-110" />
    </div>
  );
}
