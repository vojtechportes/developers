import React, { useCallback } from 'react'
import styled from 'styled-components'
import truncate from 'truncate'
import { COLORS } from 'constants/colors'
import { BORDER_RADIUS, BOX_SHADOW, LINEAR_GRADIENT } from 'constants/index'
import { useTrackEvent } from 'hooks/useTrackEvent'
import { EVENT_CATEGORY, EVENT_ACTION } from 'constants/tracking'

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  justify-content: flex-end;
  height: 18rem;
  padding: 1rem;
  background-repeat: no-repeat;
  background-size: cover, cover;
  border: 1px solid ${COLORS.GRAY};
  border-radius: ${BORDER_RADIUS.MEDIUM};
  box-shadow: ${BOX_SHADOW.MEDIUM};
  cursor: pointer;
  opacity: 0.85;
  transition: opacity ease-in 0.3s;

  :hover {
    opacity: 1;
    transition: opacity ease-in 0.3s;
  }
`

const Title = styled.h2`
  color: ${COLORS.WHITE};
  font-size: 1.2rem;
  text-shadow: 1px 1px 0 ${COLORS.BLACK};
`

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 0 0.3rem;

  ${Title} {
    margin-right: 0.8rem;
  }
`

const Overview = styled.p`
  color: ${COLORS.WHITE};
  font-size: 0.8rem;
  text-shadow: 1px 1px 0 ${COLORS.BLACK};
`

const Language = styled.span`
  align-self: center;
  padding: 0.1rem 0.3rem 0.15rem;
  color: ${COLORS.WHITE};
  font-weight: bold;
  font-size: 0.8rem;
  text-transform: uppercase;
  background: ${COLORS.DARK_GRAY};
  border-radius: ${BORDER_RADIUS.MEDIUM};
`

export interface CardProps {
  id: number
  background: string
  title: string
  overview: string
  overviewMaxLength?: number
  language: string
  onClick?: (id: number) => void
}

export const MovieCard: React.FC<CardProps> = ({
  id,
  background,
  title,
  overview,
  overviewMaxLength = 120,
  language,
  onClick,
}) => {
  const { setTrackEvent } = useTrackEvent()
  const backgroundImage = `${LINEAR_GRADIENT.NORMAL}, url(${background})`

  const handleClick = useCallback(() => {
    if (onClick) {
      setTrackEvent({
        eventCategory: EVENT_CATEGORY.CARD,
        eventAction: EVENT_ACTION.CARD.CLICK,
        eventLabel: String(id),
      })

      onClick(id)
    }
  }, [setTrackEvent, onClick, id])

  return (
    <StyledCard style={{ backgroundImage }} onClick={handleClick}>
      <TitleContainer>
        <Title>{title}</Title>
        <Language>{language}</Language>
      </TitleContainer>

      <Overview>{truncate(overview, overviewMaxLength)}</Overview>
    </StyledCard>
  )
}
