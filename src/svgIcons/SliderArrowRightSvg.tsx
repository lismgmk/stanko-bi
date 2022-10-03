import React from 'react'
import { SvgIcon, SvgIconProps } from '@mui/material'

export const SliderArrowRightSvg = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props} viewBox={'0 0 41 12'} fill={'none'}>
      <path
        d="M40.5303 6.53033C40.8232 6.23744 40.8232 5.76257 40.5303 5.46967L35.7574 0.696702C35.4645 0.403809 34.9896 0.403809 34.6967 0.696702C34.4038 0.989596 34.4038 1.46447 34.6967 1.75736L38.9393 6L34.6967 10.2426C34.4038 10.5355 34.4038 11.0104 34.6967 11.3033C34.9896 11.5962 35.4645 11.5962 35.7574 11.3033L40.5303 6.53033ZM-6.55671e-08 6.75L40 6.75L40 5.25L6.55671e-08 5.25L-6.55671e-08 6.75Z"
        fill={props.color}
      />
    </SvgIcon>
  )
}
