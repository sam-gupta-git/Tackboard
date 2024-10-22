import React from 'react';
import './MyBoard.css'; // We'll create this CSS file

function MyBoard() {
  return (
    <div className="my-board">
      <div className="pinboard">
        <div className="pinned-item" style={{top: '50px', left: '100px'}}>
          Sample Item 1
        </div>
        <div className="pinned-item" style={{top: '150px', left: '300px'}}>
          Sample Item 2
        </div>
        {/* Add more pinned items as needed */}
      </div>
    </div>
  );
}

export default MyBoard;
