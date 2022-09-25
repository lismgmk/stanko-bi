import type { NextPage } from 'next'
import * as React from 'react'
import { MainImageBlock } from '../src/components/mainImageBlock'
import { CardsContainer } from '../src/containers/cardsContainer'
import HeaderContainer from '../src/containers/headerContainer'
import { SpecialOfferContainer } from '../src/containers/specialOfferContainer'

const Home: NextPage = () => {
  return (
    <div>
      <HeaderContainer />
      <MainImageBlock />
      <CardsContainer />
      <SpecialOfferContainer />
    </div>
  )
}

export default Home
