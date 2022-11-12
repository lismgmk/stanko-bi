import React from 'react'
import { SvgIcon, SvgIconProps } from '@mui/material'

export const SertificateSvg = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props} viewBox={'0 0 100 100'} fill={'none'}>
      <rect opacity="0.8" width="100" height="99.0991" fill="url(#pattern0)" />
      <defs>
        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image0_75_1983" transform="translate(0 -0.00454546) scale(0.00195312 0.00197088)" />
        </pattern>
        <image
          id="image0_75_1983"
          width="512"
          height="512"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </SvgIcon>
  )
}