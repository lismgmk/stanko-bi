import React from 'react'
import { SvgIcon, SvgIconProps } from '@mui/material'

export const ReceiptSvg = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props} viewBox={'0 0 100 100'} fill={'none'}>
      <rect opacity="0.8" width="100" height="100" fill="url(#pattern0)" />
      <defs>
        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image0_75_1986" transform="scale(0.00195312)" />
        </pattern>
        <image
          id="image0_75_1986"
          width="512"
          height="512"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </SvgIcon>
  )
}
