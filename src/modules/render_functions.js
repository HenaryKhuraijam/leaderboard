const appendLeaderboardUl = (name, score) => {
  const ulLeaderboard = document.getElementById('leaderboard');
  const liLeaders = document.createElement('li');
  liLeaders.className = 'leaders';
  liLeaders.textContent = `${name}: ${score}`;
  ulLeaderboard.appendChild(liLeaders);
};

const leaders = [
  {
    name: 'Tomjit',
    score: 85,
  },
  {
    name: 'Summit Ali',
    score: 76,
  },
  {
    name: 'Jackson Rai',
    score: 50,
  },
  {
    name: 'Boston',
    score: 65,
  },
  {
    name: 'Tyson',
    score: 25,
  },
];

const renderUI = () => {
  leaders.forEach((leader) => {
    appendLeaderboardUl(leader.name, leader.score);
  });
};

export default renderUI;