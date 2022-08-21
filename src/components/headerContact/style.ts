import { Button, ButtonProps } from '@mui/material'
import { styled } from '@mui/material/styles'

export const HeaderButton = styled(Button)<ButtonProps>(({ theme }) => ({
  fontWeight: 700,
  fontSize: 12,
  lineHeight: '14.5px',
  border: `1px solid ${theme.palette.primary.dark}`,
  borderRadius: 25,
  width: 200,
  height: 42,
  '&: hover': {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.light,
  },
}))

export const sxResponsiveContainerWeight = {
  pl: { xs: 1.2, sm: 1.2, md: 1.2, lg: 1.2, xl: 1.2 },
  pr: { xs: 1.2, sm: 1.2, md: 1.2, lg: 1.2, xl: 1.2 },
  position: 'relative',
  overflow: 'hidden',
}
