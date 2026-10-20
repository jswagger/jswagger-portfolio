interface SystemNodeProps {
  label: string
}

export default function SystemNode({ label }: SystemNodeProps) {
  return <span className="system-node">{label}</span>
}
