import { ReactNode } from 'react'

export default function Section({ id, title, children, background = 'white' }: { id?: string; title?: string; children: ReactNode; background?: 'white' | 'muted' }) {
  return (
    <section id={id} className={background === 'muted' ? 'bg-gray-50' : 'bg-white'}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        {title ? (
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-brand-green mb-4">{title}</h2>
            <div className="w-24 h-1 bg-brand-green mx-auto rounded-full"></div>
          </div>
        ) : null}
        <div className={title ? '' : ''}>{children}</div>
      </div>
    </section>
  )
}


