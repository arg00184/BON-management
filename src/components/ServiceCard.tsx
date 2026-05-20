import { serviceIcons, type ServiceIconKey } from "./icons/ServiceIcons";

interface ServiceCardProps {
  icon: ServiceIconKey;
  kicker: string;
  title: string;
  text: string;
}

export default function ServiceCard({
  icon,
  kicker,
  title,
  text,
}: ServiceCardProps) {
  const Icon = serviceIcons[icon];

  return (
    <article
      className="group surface-line relative overflow-hidden rounded-2xl bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl"
      data-reveal
    >
      <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-bon-blue/5 to-bon-pink/5 transition-transform duration-500 group-hover:scale-150" />
      
      <div className="relative">
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-bon-blue/10 to-bon-sky/10 text-bon-blue transition-colors duration-300 group-hover:from-bon-blue group-hover:to-bon-sky group-hover:text-white">
          <Icon className="h-5 w-5" strokeWidth={2} />
        </div>
        
        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-bon-pink">
          {kicker}
        </p>
        
        <h3 className="mt-3 text-xl font-semibold text-bon-950 transition-colors duration-300 group-hover:text-bon-blue">
          {title}
        </h3>
        
        <p className="mt-4 leading-7 text-bon-950/60">{text}</p>
      </div>
    </article>
  );
}
