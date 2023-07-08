import React from 'react';
import { ChatSection } from './components/chatSection';
import ChessBoard from './components/chessBoard';

function App() {
  return (
    <div className="App mx-auto container grid grid-cols-2 h-screen">
        <ChessBoard />
        <ChatSection />
    </div>
  )
}

export default App;
