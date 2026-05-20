interface PillarCardProps {
  value: string;
  title: string;
  text: string;
  accent?: "blue" | "pink" | "lilac";
}

export default function PillarCard({
  value,
  title,
  text,
  accent = "blue",
}: PillarCardProps) {
  const accentColors = {
    blue: "from-bon-blue to-bon-sky",
    pink: "from-bon-pink to-bon-coral",
    lilac: "from-bon-lilac to-bon-pink",
  };

  return (
    <article
      className="group surface-line relative overflow-hidden rounded-2xl bg-bon-soft p-7 transition-all duration-300 hover:bg-white"
      data-reveal
    >
      <div
        className={`absolute -left-4 -top-4 h-20 w-20 rounded-full bg-gradient-to-br ${accentColors[accent]} opacity-10 blur-xl transition-all duration-500 group-hover:opacity-20 group-hover:blur-2xl`}
      />

      <div className="relative">
        <p
          className={`bg-gradient-to-r ${accentColors[accent]} bg-clip-text text-4xl font-bold text-transparent`}
        >
          {value}
        </p>

        <h3 className="mt-6 text-xl font-semibold text-bon-950">{title}</h3>

        <p className="mt-4 leading-7 text-bon-950/60">{text}</p>
      </div>
    </article>
  );
}
