export default function SectionHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-10 text-center">
      <h4 className="mb-2 text-xs font-semibold uppercase tracking-[0.26em] text-cyan-600">
        {subtitle}
      </h4>
      <h2 className="bg-gradient-to-r from-cyan-500 to-indigo-600 bg-clip-text text-3xl font-extrabold text-transparent md:text-4xl">
        {title}
      </h2>
    </div>
  );
}
