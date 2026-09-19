export default function SectionLabel({ index, children, dark = false }) {
  return (
    <div className={`flex items-center gap-4 ${dark ? 'text-cream-warm/70' : 'text-ink-soft/70'}`}>
      {index && (
        <span className="font-display italic text-base leading-none">{index}</span>
      )}
      <span className="h-px w-10 bg-current/40" />
      <span className="text-[0.8rem] leading-none">{children}</span>
    </div>
  )
}
