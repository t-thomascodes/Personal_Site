'use client'

import { useState } from 'react'
import Link from 'next/link'

const links = [
  { href: '/#about', label: 'about' },
  { href: '/#work', label: 'work' },
  { href: '/#projects', label: 'projects' },
  // { href: '/blog', label: 'blog' },
  // { href: '/travels', label: 'travels' },
  // { href: '/inspiration', label: 'inspiration' },
  { href: '/#contact', label: 'contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] px-10 py-7 flex justify-between items-center mix-blend-difference">
      <Link href="/" className="font-mono text-base font-bold tracking-wide">
        tt.
      </Link>

      <button
        className="hidden max-md:block bg-transparent border-none text-[var(--text)] font-mono text-xs tracking-widest cursor-pointer lowercase"
        onClick={() => setOpen(!open)}
      >
        menu
      </button>

      <ul className={`
        flex gap-8 list-none max-md:hidden
        ${open ? 'max-md:!flex max-md:flex-col max-md:absolute max-md:top-full max-md:right-6 max-md:bg-black/95 max-md:border max-md:border-[var(--faint)] max-md:p-4 max-md:gap-3' : ''}
      `}>
        {links.map(link => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-xs tracking-widest text-[var(--dim)] hover:text-[var(--text)] hover:opacity-100"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
