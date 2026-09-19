// Recreates Shantara's interlocking rosette motif seen across brand collateral.
// Used sparingly as a textural accent, never as a dominant graphic.
export default function Pattern({ className = '', opacity = 1, color = 'currentColor', id = 'shantara-rosette' }) {
  const patternId = `${id}-pattern`
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" aria-hidden="true">
      <defs>
        <pattern id={patternId} width="72" height="72" patternUnits="userSpaceOnUse">
          <g fill="none" stroke={color} strokeWidth="1" opacity={opacity}>
            <circle cx="18" cy="18" r="17.5" />
            <circle cx="54" cy="18" r="17.5" />
            <circle cx="18" cy="54" r="17.5" />
            <circle cx="54" cy="54" r="17.5" />
            <path d="M0 0 L36 36 M36 0 L0 36 M36 36 L72 72 M72 36 L36 72" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </svg>
  )
}
