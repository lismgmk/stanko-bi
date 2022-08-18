import React from 'react'
import { SvgIcon, SvgIconProps } from '@mui/material'

export const BurgerSvg = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props} viewBox={'0 0 34 20'} fill={'none'}>
      <line x1="1" y1="1" x2="33" y2="1" stroke="#353D83" strokeWidth="2" strokeLinecap="round" />
      <line x1="9" y1="10" x2="33" y2="10" stroke="#353D83" strokeWidth="2" strokeLinecap="round" />
      <line x1="1" y1="19" x2="33" y2="19" stroke="#353D83" strokeWidth="2" strokeLinecap="round" />
    </SvgIcon>
  )
}
