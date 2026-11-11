// Shared section title: mono index + heading + hairline rule.
function SectionHeading({ index, title, className = "" }) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <span className="font-mono text-sm text-[#16f2b3]">{index}</span>
      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white whitespace-nowrap">
        {title}
      </h2>
      <span className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
    </div>
  );
}

export default SectionHeading;
