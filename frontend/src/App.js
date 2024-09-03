import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad, faCircle } from '@fortawesome/free-solid-svg-icons';
import './styles.css';

const matches = [
  { id: 1, game: 'League of Legends', teams: ['SKT T1', 'G2 Esports'], status: 'Upcoming' },
  { id: 2, game: 'CS:GO', teams: ['Natus Vincere', 'Astralis'], status: 'Live' }
];

function App() {
  return (
    <div className="main-container">
      <h1>E-Sports Matches</h1>
      <ul>
        {matches.map(match => (
          <li key={match.id}>
            <div className="match-game">
              <FontAwesomeIcon icon={faGamepad} /> {match.game}
            </div>
            <div className="match-teams">
              {match.teams[0]} vs {match.teams[1]}
            </div>
            <div className="match-status">
              <FontAwesomeIcon icon={faCircle} /> {match.status}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
