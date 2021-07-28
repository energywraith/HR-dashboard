import { useCallback } from 'react';
import { Card } from './Card';
import update from 'immutability-helper';
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'

const SortableList = ({ cards, setCards, cardClassName, deleteElementFunction }) => {
  const moveCard = useCallback((dragIndex, hoverIndex) => {
    const dragCard = cards[dragIndex]
    setCards(update(cards, {
      $splice: [
        [dragIndex, 1],
        [hoverIndex, 0, dragCard],
      ],
    }))
  }, [cards])

  const renderCard = (card, index) => {
    return (
      <Card
        key={card.id}
        index={index}
        id={card.id}
        text={card.text}
        moveCard={moveCard}
        removable={card.removable}
        className={cardClassName}
        deleteElementFunction={deleteElementFunction}
      />
    )
  }

  return (
    <DndProvider backend={HTML5Backend}>
      {cards.map((card, i) => (
        renderCard(card, i)
      ))}
    </DndProvider>
  )
}

export default SortableList