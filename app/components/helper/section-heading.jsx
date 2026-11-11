// Shared section title: mono index + heading + hairline rule.
function SectionHeading({ index, title, className = "" }) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {index && <span className="font-mono text-sm text-accent">{index}</span>}
      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-fg whitespace-nowrap">
        {title}
      </h2>
      <span className="h-px flex-1 bg-gradient-to-r from-fg/20 to-transparent" />
    </div>
  );
}

export default SectionHeading;
