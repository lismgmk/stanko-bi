import React from 'react'
import { SvgIcon, SvgIconProps } from '@mui/material'

export const QualitySvg = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props} viewBox={'0 0 100 100'} fill={'none'}>
      <rect opacity="0.8" width="100" height="100" fill="url(#pattern0)" />
      <defs>
        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image0_75_1981" transform="scale(0.00195312)" />
        </pattern>
        <image
          id="image0_75_1981"
          width="512"
          height="512"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </SvgIcon>
  )
}
