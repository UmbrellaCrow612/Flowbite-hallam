import React from 'react'
import { SubHeaderButton } from './SubHeaderButton'
import { NavOptions } from '../Values/NavOptions'
interface SubHeaderProps {}

export const SubHeader: React.FC<SubHeaderProps> = () => {
  return (
    <div className="items-center justify-center hidden py-3 md:flex">
      <div className='flex items-center gap-1 xl:gap-4'>
        {NavOptions.map((Option) => (
          <SubHeaderButton
            href={Option.href}
            title={Option.title}
            key={Option.title}
            hasMoreOptions={Option.hasMoreOptions}
          />
        ))}
      </div>
    </div>
  )
}
