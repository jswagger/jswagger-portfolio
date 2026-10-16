import { Link } from 'react-router-dom'
import Navbar from './Navbar'

// Fixed formulas (not Math.random) so server and client render the same markup.
const DUST = Array.from({ length: 24 }, (_, i) => ({
  left: (i * 37 + 11) % 100,
  size: 2 + (i % 3),
  duration: 10 + ((i * 5) % 14),
  delay: -((i * 7) % 17),
}))

interface NotFoundProps {
  title?: string
  message?: string
}

export default function NotFound({
  title = 'Page not found',
  message = "The page you're looking for doesn't exist or may have moved.",
}: NotFoundProps) {
  return (
    <>
      <Navbar />
      <main className="not-found">
        <div className="not-found-dust" aria-hidden="true">
          {DUST.map((dust, index) => (
            <span
              key={index}
              style={{
                left: `${dust.left}%`,
                width: dust.size,
                height: dust.size,
                animationDuration: `${dust.duration}s`,
                animationDelay: `${dust.delay}s`,
              }}
            />
          ))}
        </div>
        <div className="not-found-lamp" aria-hidden="true">
          <div className="not-found-lamp-cable" />
          <div className="not-found-lamp-shade" />
          <div className="not-found-lamp-bulb" />
          <div className="not-found-lamp-light" />
        </div>
        <div className="not-found-content">
          <p className="not-found-code" aria-hidden="true">
            404
          </p>
          <h1 className="not-found-title">{title}</h1>
          <p className="not-found-message">{message}</p>
          <Link className="not-found-button" to="/">
            Back to home
          </Link>
        </div>
      </main>
    </>
  )
}
