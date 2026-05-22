import MotionSection from './MotionSection'

const certs = [
  {
    title: 'AI/ML Engineer Stage 1',
    issuer: 'SLIIT FOC',
    date: 'Jan 2026',
  },
  {
    title: 'MongoDB Data Modeling Path',
    issuer: 'MongoDB University',
    date: 'May 2026',
  },
]

export default function Certifications() {
  return (
    <MotionSection
      id="certifications"
      className="bg-light-gray px-4 py-20 dark:bg-slate-800/50 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-navy dark:text-white">Certifications</h2>
        <div className="mt-4 h-1 w-16 rounded-full bg-teal" />

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {certs.map((cert) => (
            <div
              key={cert.title}
              className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-600 dark:bg-slate-800"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-navy to-teal text-white">
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-navy dark:text-white">{cert.title}</h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{cert.issuer}</p>
                <p className="mt-2 text-sm font-medium text-teal">{cert.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MotionSection>
  )
}
