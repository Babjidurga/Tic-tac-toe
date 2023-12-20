import { useState } from "react";
export default function Player({ name, symbol, isActive, onChangeName }) {
  const [playerName, setNamep] = useState(name);
  const [isEditing, setIsEditing] = useState(false);
  function nameField(event) {
    setNamep(event.target.value);
  }
  function changeField() {
    setIsEditing((editing) => !editing);
    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {isEditing ? (
          <input type="text" value={playerName} onChange={nameField} />
        ) : (
          <span className="player-name">{playerName}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={changeField}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
