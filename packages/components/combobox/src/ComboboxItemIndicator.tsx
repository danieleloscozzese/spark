import { Icon } from '@spark-ui/icon'
import { Check } from '@spark-ui/icons/dist/icons/Check'
import { cx } from 'class-variance-authority'
import { ReactNode, RefObject } from 'react'

import { useComboboxItemContext } from './ComboboxItemContext'

export interface ItemIndicatorProps {
  children?: ReactNode
  className?: string
  label?: string
  ref?: RefObject<HTMLSpanElement>
}

export const ItemIndicator = ({
  className,
  children,
  label,
  ref: forwardedRef,
}: ItemIndicatorProps) => {
  const { disabled, isSelected } = useComboboxItemContext()

  const childElement = children || (
    <Icon size="sm">
      <Check aria-label={label} />
    </Icon>
  )

  return (
    <span
      ref={forwardedRef}
      className={cx('flex min-h-sz-16 min-w-sz-16', disabled && 'opacity-dim-3', className)}
    >
      {isSelected && childElement}
    </span>
  )
}

ItemIndicator.displayName = 'Combobox.ItemIndicator'
