// Function to create a new baseblock
function createBaseBlock() {
  // Create a new baseblock element
  const newBaseBlock = document.createElement('div');
  newBaseBlock.classList.add('baseblock');

  // Create the left block panel
  const leftBlockPanel = document.createElement('div');
  leftBlockPanel.classList.add('leftblockpanel');

  // Create the title section
  const titleDiv = document.createElement('div');
  titleDiv.id = 'title';
  const titleImg = document.createElement('img');
  titleImg.src = './images/ooze-red.png';
  const titleH2 = document.createElement('h2');
  titleH2.textContent = 'Quest';
  titleDiv.appendChild(titleImg);
  titleDiv.appendChild(titleH2);

  // Create the challengerating section
  const challengeratingDiv = document.createElement('div');
  challengeratingDiv.id = 'challengerating';
  for (let i = 0; i < 5; i++) {
    const star = document.createElement('p');
    star.textContent = '⭐';
    challengeratingDiv.appendChild(star);
  }

  // Create the duedate section
  const duedateDiv = document.createElement('div');
  duedateDiv.id = 'duedate';
  const dueDateTitle = document.createElement('p');
  dueDateTitle.classList.add('blockpaneltitle');
  dueDateTitle.textContent = 'Due Date';
  duedateDiv.appendChild(dueDateTitle);

  // Create the type section
  const typeDiv = document.createElement('div');
  typeDiv.id = 'type';
  const typeTitle = document.createElement('p');
  typeTitle.classList.add('blockpaneltitle');
  typeTitle.textContent = 'Type';
  typeDiv.appendChild(typeTitle);

  // Append the sections to the left block panel
  leftBlockPanel.appendChild(titleDiv);
  leftBlockPanel.appendChild(challengeratingDiv);
  leftBlockPanel.appendChild(duedateDiv);
  leftBlockPanel.appendChild(typeDiv);

  // Create the right block panel
  const rightBlockPanel = document.createElement('div');
  rightBlockPanel.classList.add('rightblockpanel');

  // Create the log section
  const logDiv = document.createElement('div');
  logDiv.id = 'log';
  const logTitle = document.createElement('p');
  logTitle.classList.add('blockpaneltitle');
  logTitle.textContent = 'Log';
  logDiv.appendChild(logTitle);

  // Create the notes section
  const notesDiv = document.createElement('div');
  notesDiv.id = 'notes';
  const notesTitle = document.createElement('p');
  notesTitle.classList.add('blockpaneltitle');
  notesTitle.textContent = 'Notes';
  notesDiv.appendChild(notesTitle);

  // Create the blockellmenu section
  const blockellmenuDiv = document.createElement('div');
  blockellmenuDiv.id = 'blockellmenu';

  // Append the sections to the right block panel
  rightBlockPanel.appendChild(logDiv);
  rightBlockPanel.appendChild(notesDiv);
  rightBlockPanel.appendChild(blockellmenuDiv);

  // Append the left and right block panels to the new baseblock
  newBaseBlock.appendChild(leftBlockPanel);
  newBaseBlock.appendChild(rightBlockPanel);

  // Append the new baseblock to the questboard
  const questboard = document.getElementById('questboard');
  questboard.appendChild(newBaseBlock);
}

// Add a click event listener to the "New Quest" button
const newQuestButton = document.getElementById('newquest');
newQuestButton.addEventListener('click', createBaseBlock);
