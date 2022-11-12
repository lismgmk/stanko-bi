import type { NextPage } from 'next'
import * as React from 'react'
import { MainImageBlock } from '../src/components/mainImageBlock'
import { AdvantagesContainer } from '../src/containers/AdvantageContainer'
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
      <AdvantagesContainer />
    </div>
  )
}

export default Home
