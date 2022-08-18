import { SvgIcon, Grid } from '@mui/material'
import { nanoid } from 'nanoid'
import { NextPage } from 'next'
import { FacebookSvg } from '../../svgIcons/FacebookSvg'
import { InstagramSvg } from '../../svgIcons/InstagramSvg'
import { TelegramSvg } from '../../svgIcons/TelegramSvg'
import { TiktokSvg } from '../../svgIcons/TiktokSvg'
import { TwitterSvg } from '../../svgIcons/TwitterSvg'
import { VkSvg } from '../../svgIcons/VkSvg'
import { YoutubeSvg } from '../../svgIcons/YoutubeSvg'

export const SocialIconBox: NextPage = () => {
  const socialNetworks = [
    { svgElem: VkSvg },
    { svgElem: FacebookSvg },
    { svgElem: InstagramSvg },
    { svgElem: YoutubeSvg },
    { svgElem: TelegramSvg },
    { svgElem: TiktokSvg },
    { svgElem: TwitterSvg },
  ]

  return (
    <Grid container justifyContent={'center'} spacing={1.2}>
      {socialNetworks.map((icon) => {
        return (
          <Grid key={nanoid()} item>
            <SvgIcon
              sx={{
                color: 'primary.dark',
              }}
              component={icon.svgElem}
            />
          </Grid>
        )
      })}
    </Grid>
  )
}
