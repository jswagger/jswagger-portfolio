import type { ServiceIcon } from '../types/content'
import StrengthIcon from './StrengthIcon'

interface InfoCardProps {
  icon: ServiceIcon
  title: string
  description: string
  image: string
}

export default function InfoCard({ icon, title, description, image }: InfoCardProps) {
  return (
    <div className="info-card">
      <div
        className="info-card-bg"
        style={{ backgroundImage: `url(${image})` }}
        aria-hidden="true"
      />
      <div className="info-card-glow" aria-hidden="true" />
      <div className="info-card-body">
        <span className="info-card-icon">
          <StrengthIcon icon={icon} />
        </span>
        <h3>{title}</h3>
        <p className="info-card-description">{description}</p>
      </div>
    </div>
  )
}
