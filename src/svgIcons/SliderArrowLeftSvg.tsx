import React from 'react'
import { SvgIcon, SvgIconProps } from '@mui/material'

export const SliderArrowLeftSvg = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props} viewBox={'0 0 41 12'} fill={'none'}>
      <path
        d="M0.469669 6.53033C0.176777 6.23744 0.176777 5.76257 0.469669 5.46967L5.24264 0.696702C5.53553 0.403809 6.01041 0.403809 6.3033 0.696702C6.59619 0.989596 6.59619 1.46447 6.3033 1.75736L2.06066 6L6.3033 10.2426C6.5962 10.5355 6.5962 11.0104 6.3033 11.3033C6.01041 11.5962 5.53553 11.5962 5.24264 11.3033L0.469669 6.53033ZM41 6.75L1 6.75L1 5.25L41 5.25L41 6.75Z"
        fill={props.color}
      />
    </SvgIcon>
  )
}
