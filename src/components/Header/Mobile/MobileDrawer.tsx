import { useRecoilValue } from 'recoil'
import { mobileDrawerState } from '../../../../atoms/mobileDrawerState'
import { MobileDrawerAccordion } from './MobileDrawerAccordion'
import { NavOptions } from '../Values/NavOptions'
interface MobileDrawerProps {}

export const MobileDrawer: React.FC<MobileDrawerProps> = () => {
  const open = useRecoilValue(mobileDrawerState)
  return (
    <div className={`${open ? 'flex flex-col gap-2 py-2 px-5 md:hidden' : 'hidden'}`}>
      {NavOptions.map((Option) => (
        <MobileDrawerAccordion
          title={Option.title}
          hasMoreOptions={Option.hasMoreOptions}
          moreOptions={Option.moreOptions}
         _href={Option.href}
          key={Option.title}
        />
      ))}
    </div>
  )
}
