import React, { useContext } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { mq } from 'utils/styles'
import { currentMonth } from 'utils/months'
import StyleContext from 'utils/StyleContext'

const Wrapper = styled.div`
  position: relative;
  width: 8em;
  max-width: 100%;
  margin: 4vh auto;
  font-size: 5em;

  ${mq.small} {
    font-size: 3.2em;
  }
`
const Title = styled.h1`
  margin: 0;
  font-size: inherit;
  line-height: 1.1;

  a {
    display: flex;
    flex-direction: column;
    color: ${(props) => props.theme.colors.text};
    text-decoration: none;
  }
`
const Top = styled.span`
  position: relative;
  align-self: flex-start;
  display: block;

  &:before {
    content: '${(props) => props.text}';
    position: absolute;
    top: 0.3rem;
    left: -0.5rem;
    width: 100%;
    color: ${(props) => props.theme.colors.second};
  }

  span {
    position: relative;
  }
`
const Bottom = styled(Top)`
  align-self: flex-end;
`
const StyledLink = styled(Link)`
  display: block;
  margin-right: 1rem;
  font-size: 1.2rem;
  font-style: italic;
  text-align: right;

  ${mq.small} {
    font-size: 1rem;
  }
`
export default function Header() {
  const { displayTitle } = useContext(StyleContext)

  return (
    <Wrapper>
      <Title>
        {displayTitle && (
          <Link to='/'>
            <Top text={'Est-ce bien'}>
              <span>Est-ce bien</span>
            </Top>
            <Bottom text={'la saison ?'}>
              <span>la saison ?</span>
            </Bottom>
          </Link>
        )}
      </Title>
      <StyledLink to={`/months/${currentMonth}`}>
        Voir tous les produits de saison
      </StyledLink>
    </Wrapper>
  )
}