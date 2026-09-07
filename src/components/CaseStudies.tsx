const caseStudies = [
  {
    title: 'AI Report Summarization',
    description: 'Integrating the power of AWS Bedrock to turn complex reports into clear, useful summaries.',
  },
  {
    title: 'UI Modernization',
    description: 'Lifting a legacy codebase with thoughtful React patterns and a more maintainable interface.',
  },
  {
    title: 'Enterprise Enrollment Process',
    description: 'Creating a clean, painless workflow for managing legal customer licensing and data enrollment.',
  },
]

export default function CaseStudies() {
  return (
    <section className="content-section case-studies-section" id="case-studies">
      <div className="section-heading">
        <p className="section-label">Case studies</p>
        <h2>Selected work and outcomes</h2>
      </div>
      <div className="case-studies-grid">
        {caseStudies.map((caseStudy) => (
          <a className="case-study-card" href="#" key={caseStudy.title}>
            <div className="case-study-card-image" aria-hidden="true" />
            <div className="case-study-card-content">
              <h3>{caseStudy.title}</h3>
              <p>{caseStudy.description}</p>
              <span className="case-study-card-link">Read case study</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}