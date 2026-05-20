interface ProcessStepProps {
  number: number;
  text: string;
}

export default function ProcessStep({ number, text }: ProcessStepProps) {
  return (
    <div
      className="group surface-line flex items-start gap-5 rounded-2xl bg-bon-soft p-6 transition-all duration-300 hover:bg-white hover:shadow-xl"
      data-reveal
    >
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-bon-blue to-bon-sky text-sm font-bold text-white shadow-lg shadow-bon-blue/20 transition-transform duration-300 group-hover:scale-110">
        {String(number).padStart(2, "0")}
      </span>

      <div className="pt-1">
        <p className="text-base leading-7 text-bon-950/70 group-hover:text-bon-950">
          {text}
        </p>
      </div>
    </div>
  );
}
