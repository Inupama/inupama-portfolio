import MotionSection from './MotionSection'

const timeline = [
  {
    org: 'IEEE CyberShield 5.0',
    role: 'Organizing Committee Secretary Team Member',
    period: '2026',
  },
  {
    org: 'SLIIT XTREME 4.0 Hackathon',
    role: 'Participant',
    period: '2025',
  },
  {
    org: 'AIESEC in SLIIT',
    role: 'Member (IGT & IR)',
    period: '2024 – 2025',
  },
]

export default function Experience() {
  return (
    <MotionSection id="experience" className="bg-white px-4 py-20 dark:bg-slate-900 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-navy dark:text-white">
          Experience & Leadership
        </h2>
        <div className="mt-4 h-1 w-16 rounded-full bg-teal" />

        <div className="relative mt-12">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-teal/30 md:left-1/2 md:-translate-x-px" />

          <ul className="space-y-10">
            {timeline.map((item, index) => (
              <li
                key={item.org}
                className={`relative flex flex-col gap-4 md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="hidden w-1/2 md:block" />
                <div
                  className={`w-full pl-12 md:w-1/2 md:pl-0 ${
                    index % 2 === 0
                      ? 'md:pr-12 md:text-right'
                      : 'md:pl-12 md:text-left'
                  }`}
                >
                  <div className="rounded-xl border border-slate-200 bg-light-gray p-5 shadow-sm dark:border-slate-600 dark:bg-slate-800">
                    <span className="text-sm font-semibold text-teal">{item.period}</span>
                    <h3 className="mt-1 text-lg font-semibold text-navy dark:text-white">
                      {item.org}
                    </h3>
                    <p className="mt-1 text-slate-600 dark:text-slate-300">{item.role}</p>
                  </div>
                </div>
                <div className="absolute left-4 top-6 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-white bg-teal shadow md:left-1/2" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </MotionSection>
  )
}
