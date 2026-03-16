'use client'

import clsx from 'clsx'
import Link from 'next/link'
import {
  ButtonHTMLAttributes,
  HTMLAttributeAnchorTarget,
  LinkHTMLAttributes
} from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  LinkHTMLAttributes<HTMLAnchorElement> & {
    mode?: 'primary' | 'secondary' | 'clear'
    href?: string
    target?: HTMLAttributeAnchorTarget
    className?: string
    children?: React.ReactNode
  }

export const Button = ({
  mode,
  type = 'button',
  href,
  target = '_self',
  className,
  children,
  ...rest
}: ButtonProps) => {
  const classNames = clsx([
    'flex gap-2 items-center w-fit h-fit',
    'cursor-pointer px-2 py-1 md:px-4 md:py-2 border md:border-2 border-black rounded-full',
    'uppercase text-black text-nowrap font-bold tracking-wide',
    'transition duration-300',
    mode === 'primary' && 'hover:bg-orange-400 focus:bg-orange-500',
    mode === 'secondary' && 'hover:bg-indigo-400 focus:bg-indigo-500',
    mode === 'clear' && 'hover:bg-white hover:text-black',
    className
  ])

  if (href) {
    return (
      <Link className={classNames} href={href} target={target} {...rest}>
        {children}
      </Link>
    )
  }

  return (
    <button className={classNames} type={type} {...rest}>
      {children}
    </button>
  )
}
