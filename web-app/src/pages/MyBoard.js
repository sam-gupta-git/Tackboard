import React, { useState } from 'react';
import Draggable from 'react-draggable';
import './MyBoard.css'; // We'll create this CSS file

function MyBoard() {
  const [items, setItems] = useState([
    { id: 1, content: 'Sample Item 1', x: 100, y: 50 },
    { id: 2, content: 'Sample Item 2', x: 300, y: 150 },
  ]);

  const handleDrag = (id, data) => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, x: data.x, y: data.y } : item
      )
    );
  };

  return (
    <div className="my-board">
      <div className="pinboard">
        {items.map(item => (
          <Draggable
            key={item.id}
            defaultPosition={{x: item.x, y: item.y}}
            onStop={(e, data) => handleDrag(item.id, data)}
          >
            <div className="pinned-item">
              {item.content}
            </div>
          </Draggable>
        ))}
      </div>
    </div>
  );
}

export default MyBoard;
