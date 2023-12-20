export default function GameOver({ winner, onRestart }) {
  return (
    <div id="game-over">
      <h2>Game - Over</h2>
      {winner && <p>{winner} you won!</p>}
      {!winner && <p>It's Draw match</p>}
      <p>
        <button onClick={onRestart}>Rematch!</button>
      </p>
    </div>
  );
}
