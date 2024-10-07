interface SectionHeaderProps {
  title: string;
  eyebrow: string;
  description: string;
}

export function SectionHeader({
  title,
  eyebrow,
  description,
}: SectionHeaderProps) {
  return (
    <div className=" relative py-16 lg:py-22">
      <div className="flex justify-center items-center">
        <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
          {eyebrow}
        </p>
      </div>
      <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
        {title}
      </h2>
      <p className="text-center text-white/60 mt-4 md:text-lg lg:text-xl max-w-md mx-auto">
        {description}
      </p>
    </div>
  );
}
