export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-navy px-4 py-8 dark:border-slate-700 sm:px-6 lg:px-8">
      <p className="text-center text-sm text-slate-300">
        Designed & built by Inupama Caldera © {new Date().getFullYear()}
      </p>
    </footer>
  )
}
