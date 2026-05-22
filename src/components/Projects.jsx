import MotionSection from './MotionSection'

const projects = [
  {
    title: 'Smart Campus Operations Hub',
    stack: ['React 19', 'Spring Boot', 'Java 17', 'PostgreSQL', 'OAuth2'],
    highlights: [
      '30+ REST APIs',
      'Role-based access control',
      'Real-time notifications',
      'Admin dashboard',
    ],
    github: 'https://github.com/Inupama',
  },
  {
    title: 'Divvy Bike Data Warehouse & BI Solution',
    stack: ['SQL Server', 'SSIS', 'SSAS', 'Power BI', 'Excel'],
    highlights: [
      'Star schema data warehouse',
      'ETL pipelines',
      'OLAP cube',
      'Power BI Service reports',
    ],
    github: 'https://github.com/Inupama',
  },
  {
    title: 'Student Learning Engagement & Performance Analysis',
    stack: ['R', 'ggplot2', 'Excel', 'Statistical Modelling'],
    highlights: [
      'OULAD dataset analysis',
      'Welch t-test',
      'Regression analysis',
      'ggplot2 visualizations',
    ],
    github: 'https://github.com/Inupama',
  },
]

export default function Projects() {
  return (
    <MotionSection
      id="projects"
      className="bg-light-gray px-4 py-20 dark:bg-slate-800/50 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-navy dark:text-white">Projects</h2>
        <div className="mt-4 h-1 w-16 rounded-full bg-teal" />
        <p className="mt-4 max-w-2xl text-slate-600 dark:text-slate-400">
          Selected academic and personal projects showcasing data analytics and full-stack development work.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-teal/40 hover:shadow-lg dark:border-slate-600 dark:bg-slate-800"
            >
              <h3 className="text-lg font-semibold text-navy dark:text-white">
                {project.title}
              </h3>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-teal/10 px-2 py-0.5 text-xs font-medium text-teal dark:bg-teal/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <ul className="mt-4 flex-1 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                {project.highlights.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                    {point}
                  </li>
                ))}
              </ul>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal transition hover:text-navy dark:hover:text-white"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                View on GitHub
              </a>
            </article>
          ))}
        </div>
      </div>
    </MotionSection>
  )
}
