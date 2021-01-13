import React, { useContext } from 'react'
import styled from 'styled-components'

import { mq } from 'utils/styles'
import StyleContext from 'utils/StyleContext'

import TitleDisplay from './embedConfigurator/TitleDisplay'
import SearchInput from './embedConfigurator/SearchInput'
import Themes from './embedConfigurator/Themes'
import Code from './embedConfigurator/Code'

const Wrapper = styled.div`
  display: ${(props) => (props.open ? 'block' : 'none')};
  width: 30em;
  background-color: ${(props) => props.theme.colors.second};
  border-left: 5px solid ${(props) => props.theme.colors.main};
  color: ${(props) => props.theme.colors.main};
  transition: all 600ms;

  ${mq.medium} {
    width: auto;
    border-left: none;
    border-bottom: 2px solid ${(props) => props.theme.colors.main};
  }
`
const Content = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  max-width: 30em;
  height: 100%;
  margin: 0 auto;
  padding: 2em;
  overflow-y: scroll;
  overflow-x: hidden;

  ${mq.medium} {
    position: relative;
    max-width: 45em;
    height: auto;
    overflow: inherit;
  }
  ${mq.small} {
    margin: 0 3vw;
    padding: 1em 0;
  }
`
const ButtonClose = styled.div`
  position: absolute;
  top: 0.25em;
  right: 0.1em;
  font-size: 3em;
  font-weight: 700;
  transform: rotate(45deg);
  cursor: pointer;
  line-height: 0.5;
`
const Title = styled.h2`
  font-size: 2em;
  margin-bottom: 1rem;
`
const Subtitle = styled.h3`
  font-size: 1.3em;
  margin-bottom: 1rem;
`
export default function EmbedConfigurator() {
  const {
    configuratorOpen,
    setConfiguratorOpen,
    setTheme,
    setDisplayTitle,
  } = useContext(StyleContext)

  return (
    <Wrapper open={configuratorOpen}>
      <Content>
        <ButtonClose
          onClick={() => {
            setTheme('default')
            setDisplayTitle(true)
            setConfiguratorOpen(false)
          }}
        >
          +
        </ButtonClose>
        <Title>Intégrer le simulateur</Title>
        <Code />
        <Subtitle>Options d'intégration</Subtitle>
        <SearchInput />
        <Themes />
        <TitleDisplay />
      </Content>
    </Wrapper>
  )
}
