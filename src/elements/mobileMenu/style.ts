export const sxMenu = {
  '& .MuiPaper-root': {
    backgroundColor: 'primary.light',
    width: '100%',
  },
  '& .MuiMenu-list': {
    color: 'primary.dark',
  },
}

export const sxMenuItem = {
  color: 'primary.dark',
  textAlign: 'center',
  padding: '10px',
  display: 'block',
  borderBottom: '2px solid',
  ':first-of-type': {
    borderTop: '2px solid',
  },
}
export const sxSvgIcon = { width: 48, color: 'primary.dark' }

export const sxHideBlock = { display: { xs: 'none', mobile: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex' } }
export const sxHideAddressBlock = {
  display: { xs: 'none', mobile: 'none', sm: 'none', md: 'none', lg: 'flex', xl: 'flex' },
}
export const sxShowMenu = { display: { xs: 'flex', mobile: 'flex', sm: 'flex', md: 'none', lg: 'none', xl: 'none' } }
export const sxContainerHeight = { height: { xs: 103, mobile: 103, sm: 103, md: 115, lg: 115, xl: 115 } }
