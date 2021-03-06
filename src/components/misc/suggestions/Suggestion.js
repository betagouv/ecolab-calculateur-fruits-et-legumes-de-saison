import React, { useContext } from 'react'
import styled, { keyframes } from 'styled-components'

import SearchContext from 'utils/SearchContext'
import useMounted from 'hooks/useMounted'
import Emoji from 'components/base/Emoji'

const flash = keyframes`
  from,
  2%,
  4% {
    opacity: 1;
  }

  1%,
  3% {
    opacity: 0;
  }
}`
const Wrapper = styled(Emoji)`
  width: 15%;
  height: 4.5rem;
  font-size: 2.6em;
  text-align: center;
  opacity: ${(props) => (props.mounted ? 1 : 0)};
  transform: translateY(${(props) => (props.mounted ? 0 : '200%')});
  transition: opacity 1000ms ${(props) => props.index * 100 + 100}ms,
    transform 400ms ${(props) => props.index * 100}ms ease-in-out,
    font-size 200ms ease-out;

  cursor: pointer;
  animation: ${flash} 25s ${(props) => props.index * 4 + 2.5}s infinite linear;

  &:hover {
    font-size: 3.2em;
  }
`

export default function Suggestion(props) {
  const { setSearch } = useContext(SearchContext)

  const mounted = useMounted()

  return (
    <Wrapper
      key={props.suggestion.label.fr}
      index={props.index}
      mounted={mounted ? 1 : 0}
      onClick={() => setSearch(props.suggestion.label.fr, props.iframe)}
    >
      {props.suggestion.emoji}
    </Wrapper>
  )
}
