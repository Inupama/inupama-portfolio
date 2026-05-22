import { useState } from 'react'
import MotionSection from './MotionSection'

const stats = [
  { value: '3', label: 'Projects' },
  { value: '2', label: 'Certifications' },
  { value: '3+', label: 'Years Academic Experience' },
]

export default function About() {
  const [photoError, setPhotoError] = useState(false)

  return (
    <MotionSection
      id="about"
      className="bg-light-gray px-4 py-20 dark:bg-slate-800/50 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center sm:items-start">
          <h2 className="text-3xl font-bold text-navy dark:text-white">
            About Me
          </h2>
          <div className="mt-4 h-1 w-16 rounded-full bg-teal" />
        </div>

        <div className="mt-12 grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg">
              I am a Data Science undergraduate at SLIIT, Sri Lanka, with a strong
              interest in transforming raw data into actionable insights and building
              full-stack applications that solve real-world problems. My academic and
              project work spans data warehousing, business intelligence, statistical
              analysis, and modern web development.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg">
              I enjoy working across the data pipeline from ETL and OLAP cubes to
              interactive dashboards and REST APIs and I am always eager to learn new
              tools and collaborate on impactful projects.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-slate-200 bg-white p-4 text-center shadow-sm dark:border-slate-600 dark:bg-slate-800"
                >
                  <p className="text-2xl font-bold text-teal sm:text-3xl">{stat.value}</p>
                  <p className="mt-1 text-xs font-medium text-slate-600 dark:text-slate-400 sm:text-sm">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative h-72 w-72 max-w-full sm:h-80 sm:w-80">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-navy to-teal opacity-20" />
              <div className="relative h-full w-full overflow-hidden rounded-3xl border-2 border-teal/30 bg-white shadow-xl dark:bg-slate-800">
                {!photoError ? (
                  <img
                    src="/profile.jpeg"
                    alt="Inupama Caldera"
                    className="h-full w-full object-cover object-center"
                    onError={() => setPhotoError(true)}
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center p-8 text-center">
                    <div className="flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-navy to-teal text-4xl font-bold text-white">
                      IC
                    </div>
                    <p className="mt-4 text-sm font-medium text-slate-500 dark:text-slate-400">
                      Inupama Caldera
                    </p>
                    <p className="text-xs text-teal">SLIIT · Data Science</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </MotionSection>
  )
}
