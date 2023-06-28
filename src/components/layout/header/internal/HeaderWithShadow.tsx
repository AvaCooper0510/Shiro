'use client'

import clsx from 'clsx'

import { useHeaderBgOpacity } from '~/components/layout/header/internal/hooks'
import { usePageScrollLocationSelector } from '~/providers/root/page-scroll-info-provider'

export const HeaderWithShadow: Component = ({ children }) => {
  const headerOpacity = useHeaderBgOpacity()
  const showShadow = usePageScrollLocationSelector(
    (y) => y > 100 && headerOpacity > 0.8,
    [headerOpacity],
  )
  return (
    <header
      className={clsx(
        'fixed left-0 right-0 top-0 z-[9] h-[4.5rem] overflow-hidden transition-shadow duration-200',
        showShadow &&
          'shadow-none shadow-neutral-100 dark:shadow-neutral-800/50 lg:shadow-sm',
      )}
    >
      {children}
    </header>
  )
}
