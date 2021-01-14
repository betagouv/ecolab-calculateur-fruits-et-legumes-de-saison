import React, { useContext } from 'react'
import styled from 'styled-components'

import ademe from 'assets/ademe.jpg'
import repufrancaise from 'assets/repufrancaise.jpg'
import ecolab from 'assets/ecolab.png'
import { mq } from 'utils/styles'
import StyleContext from 'utils/StyleContext'

import Button from 'components/base/Button'
import About from './footer/About'

const Wrapper = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.colors.second};
  transition: all 600ms;
`
const Content = styled.div`
  max-width: 45em;
  margin: 0 auto;
  padding: 1em 0 0;

  ${mq.small} {
    margin: 0 3vw;
  }
`
const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2em;

  ${mq.small} {
    flex-direction: column;
    align-items: inherit;
  }
`
const Source = styled.div`
  ${mq.small} {
    margin-bottom: 1em;
  }
`
const Title = styled.h4`
  margin: 0;
`
const LogosWrapper = styled.div`
  display: flex;
  justify-content: center;
`
const Logos = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: white;
`
const Logo = styled.img`
  width: 7em;
`

export default function Footer() {
  const { setConfiguratorOpen } = useContext(StyleContext)

  return (
    <Wrapper>
      <Content>
        <About />
        <Flex>
          <Source>
            <Title>Sources des données :</Title>
            <a
              href='https://www.ademe.fr/calendrier-fruits-legumes-saison'
              target='_blank'
              rel='noopener noreferrer'
            >
              ADEME
            </a>
          </Source>
          <Button
            onClick={() => {
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth',
              })
              setConfiguratorOpen(true)
            }}
          >
            Je veux l'intégrer à mon site !
          </Button>
        </Flex>
      </Content>
      <LogosWrapper>
        <Logos>
          <Logo src={repufrancaise} />
          <Logo src={ademe} />
          <Logo src={ecolab} />
        </Logos>
      </LogosWrapper>
    </Wrapper>
  )
}
