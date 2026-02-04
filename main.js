// Definitions data
const definitions = {
  'Wrecked': {
    pronunciation: '[reck-ed]',
    type: 'adjective',
    meaning: 'Really Tired',
    american: 'Hella Fried'
  },
  'Knackered': {
    pronunciation: '[nack-er-d]',
    type: 'adjective',
    meaning: 'Also Really Tired',
    american: 'Pooped'
  },
  'Banjaxed': {
    pronunciation: '[ban-jacks-d]',
    type: 'adjective',
    meaning: 'Broken',
    american: 'Busted'
  },
  'In bits': {
    pronunciation: '[In bits ]',
    type: 'adjective',
    meaning: 'Not well (feeling), nauseous or really upset and emotional',
    american: 'Gnarly, Queazy or a HOT MESS'
  },
  'No Craic': {
    pronunciation: '[No crack]',
    type: 'Statement',
    meaning: 'No fun at all',
    american: 'Dead, Dry, Total Buzzkill'
  },
  'I will yeah': {
    pronunciation: '[I will yeah]',
    type: 'Statement',
    meaning: 'I definitely won\'t',
    american: 'I will not, yeahhhh right'
  },
  'Giving Out': {
    pronunciation: '[I will yeah]',
    type: 'Statement',
    meaning: 'Complaining or scolding',
    american: 'Bitching and Moaning'
  },
  'Brutal': {
    pronunciation: '[I will yeah]',
    type: 'Statement',
    meaning: 'Awful',
    american: 'Trash'
  },
  'Eejit': {
    pronunciation: '[ee-jit]',
    type: 'adjective',
    meaning: 'A fool but in a nice way',
    american: 'Idk if you have one? Maybe moron but with love'
  },
  'Gobshite': {
    pronunciation: '[gob-shite]',
    type: 'adjective',
    meaning: 'See eejit',
    american: 'Fool'
  },
  'Melt': {
    pronunciation: '[melt]',
    type: 'adjective',
    meaning: 'A really annoying person',
    american: 'A drag'
  },
  'Dose': {
    pronunciation: '[ee-jit]',
    type: 'adjective',
    meaning: 'Also annoying person',
    context: 'A bad dose means a bad flu so this person is annoying like having the flu'
  },
  'Dope': {
    pronunciation: '[dope]',
    type: 'adjective',
    meaning: 'Someone not firing on all cylanders',
    american: 'Aint the sharpest tool in the shed'
  },
  'Craic': {
    pronunciation: '[crack]',
    type: 'Idek',
    meaning: 'This word covers a lot',
    context: 'Fun, good times, or news. "What\'s the craic?" means "What\'s going on?" or "How are you?" It can also mean gossip. "She\'s great craic" means she\'s really fun'
  },
  'Class': {
    pronunciation: '[Class]',
    type: 'Adjective',
    meaning: 'So good',
    american: 'Sick'
  },
  'Grand': {
    pronunciation: '[grand]',
    type: 'Adjective',
    meaning: 'Pretty good, okay, agreement',
    american: 'Aight'
  },
  'Deadly': {
    pronunciation: '[Deadly]',
    type: 'Adjective',
    meaning: 'Unbelievable good',
    american: 'So Dope'
  },
  'Gas': {
    pronunciation: '[gas]',
    type: 'Adjective',
    meaning: 'Funny',
    american: 'Funny'
  },
  'Sound': {
    pronunciation: '[sound]',
    type: 'Adjective',
    meaning: 'A good vibe (person)',
    american: 'Legit'
  },
  'Savage': {
    pronunciation: '[savage]',
    type: 'Adjective',
    meaning: 'See deadly',
    american: 'Dank'
  },
  'Fair Play': {
    pronunciation: '[Fair Play]',
    type: 'Phrase',
    meaning: 'Well done',
    american: 'Sick bro'
  },
  'Sucking Diesel': {
    pronunciation: '[Sucking Diesel]',
    type: 'Phrase',
    meaning: 'Things are starting to go well "Now we\'re sucking diesel"',
    american: 'Cooking with oil/ killing it/ slaying'
  },
  'Cmere to me': {
    pronunciation: '[C\'mere to me]',
    type: 'Phrase',
    meaning: 'I want to tell you something/ I want to hug you',
    american: 'Aint the sharpest tool in the shed'
  },
  'A stór': {
    pronunciation: '[Ah store]',
    type: 'Phrase',
    meaning: 'Darling',
    american: 'Honey maybe?'
  },
  'Polluted': {
    pronunciation: '[pol-loot-ed]',
    type: 'Adjective',
    meaning: 'Intoxicated',
    american: 'Wasted'
  },
  'Naggin': {
    pronunciation: '[Nag-in]',
    type: 'Adjective',
    meaning: 'Small bottle of spirits (about 250 ml)',
    american: 'Can\'t find one'
  },
  'Daddy Naggin': {
    pronunciation: '[dah-dee nah-gin]',
    type: 'Adjective',
    meaning: 'A slightly bigger small bottle of spirits (about 350 ml)',
    american: 'A fifth'
  },
  'Prink': {
    pronunciation: '[Prink]',
    type: 'Adjective',
    meaning: 'A few drinks with some friends before an event (pre-drink)',
    american: 'Pre-game'
  },
  'Langers': {
    pronunciation: '[lang-ers]',
    type: 'Adjective',
    meaning: 'Intoxicated',
    american: 'Hammered'
  },
  'Yoke': {
    pronunciation: '[Yolk]',
    type: 'Noun',
    meaning: 'Thing - "what\'s that yoke?"',
    american: 'Doohickey'
  },
  'Yer man': {
    pronunciation: '[Yer Man]',
    type: 'Noun',
    meaning: 'That guy, him, the man we\'re talking about',
    american: 'That dude'
  },
  'Culchie': {
    pronunciation: '[Kull-chee]',
    type: 'Noun',
    meaning: 'Someone from the countryside',
    american: 'Idk hillbilly feels too harsh - is hillbilly pc? I feel like redneck is kinda political'
  },
  'Gaff': {
    pronunciation: '[Gaff]',
    type: 'Noun',
    meaning: 'House',
    american: 'Pad, Crib'
  },
  'Scarlett': {
    pronunciation: '[Scaaar- lit]',
    type: 'Noun',
    meaning: 'Embarassed',
    american: 'Cringe'
  },
  'Yer One': {
    pronunciation: '[Yer Wan]',
    type: 'Noun',
    meaning: 'That woman, her, the woman we\'re talking about (see yer man)',
    american: 'That chick'
  },
  'Rake of Lads': {
    pronunciation: '[Rake of Lads]',
    type: 'Phrase',
    meaning: 'A group of men',
    american: 'A bunch of dudes'
  }
};

// Taskbar item management
function addTaskbarItem(windowEl, title, themeClass) {
  const taskbarItems = document.querySelector('.taskbar-items');
  const existingItem = taskbarItems.querySelector(`[data-window-id="${windowEl.id}"]`);

  if (existingItem) {
    // Update existing item (for definition popup that changes content)
    existingItem.textContent = title;
    existingItem.className = `taskbar-item ${themeClass}`;
  } else {
    const item = document.createElement('button');
    item.className = `taskbar-item ${themeClass}`;
    item.textContent = title;
    item.dataset.windowId = windowEl.id;

    item.addEventListener('click', () => {
      windowEl.classList.remove('hidden');
      bringToFront(windowEl);
    });

    taskbarItems.appendChild(item);
  }
}

function removeTaskbarItem(windowEl) {
  const taskbarItems = document.querySelector('.taskbar-items');
  const item = taskbarItems.querySelector(`[data-window-id="${windowEl.id}"]`);
  if (item) {
    item.remove();
  }
}

function getThemeClass(windowEl) {
  if (windowEl.classList.contains('good-folder') || windowEl.classList.contains('good-theme')) {
    return 'good-item';
  } else if (windowEl.classList.contains('booze-folder') || windowEl.classList.contains('booze-theme')) {
    return 'booze-item';
  } else if (windowEl.classList.contains('vibes-folder') || windowEl.classList.contains('vibes-theme')) {
    return 'vibes-item';
  }
  return '';
}

// Desktop Icon Click Handler
document.querySelectorAll('.icon').forEach(icon => {
  icon.addEventListener('click', () => {
    const windowId = icon.dataset.window;
    const windowEl = document.getElementById(`${windowId}-window`);
    if (windowEl) {
      windowEl.classList.remove('hidden');
      bringToFront(windowEl);

      // Add taskbar item
      const titles = {
        'good': 'Good Things',
        'bad': 'Bad Things',
        'booze': 'Booze',
        'vibes': 'Vibes'
      };
      addTaskbarItem(windowEl, titles[windowId] || windowId, getThemeClass(windowEl));
    }
  });
});

// Close Button Handler (both old style and folder style)
document.querySelectorAll('.close-btn, .control-btn.close').forEach(btn => {
  btn.addEventListener('click', () => {
    const windowEl = btn.closest('.window');
    if (windowEl) {
      windowEl.classList.add('hidden');
      removeTaskbarItem(windowEl);
    }
  });
});

// Bring window to front
let highestZIndex = 100;
function bringToFront(windowEl) {
  highestZIndex++;
  windowEl.style.zIndex = highestZIndex;
}

// Click on window to bring to front
document.querySelectorAll('.window').forEach(windowEl => {
  windowEl.addEventListener('mousedown', () => {
    bringToFront(windowEl);
  });
});

// File Icon Click - Show Definition Popup
document.querySelectorAll('.file-icon').forEach(fileIcon => {
  fileIcon.addEventListener('click', () => {
    const word = fileIcon.querySelector('span').textContent;
    const def = definitions[word];

    if (def) {
      const popup = document.getElementById('definition-popup');

      // Detect which folder this is from and set theme
      const parentFolder = fileIcon.closest('.folder-window');
      popup.classList.remove('good-theme', 'bad-theme', 'booze-theme', 'vibes-theme');
      if (parentFolder && parentFolder.classList.contains('good-folder')) {
        popup.classList.add('good-theme');
        popup.querySelector('.folder-titlebar span').textContent = 'Good Things';
      } else if (parentFolder && parentFolder.classList.contains('booze-folder')) {
        popup.classList.add('booze-theme');
        popup.querySelector('.folder-titlebar span').textContent = 'Booze';
      } else if (parentFolder && parentFolder.classList.contains('vibes-folder')) {
        popup.classList.add('vibes-theme');
        popup.querySelector('.folder-titlebar span').textContent = 'Vibes';
      } else {
        popup.classList.add('bad-theme');
        popup.querySelector('.folder-titlebar span').textContent = 'Bad Things';
      }

      popup.querySelector('.def-word').textContent = word;
      popup.querySelector('.def-pronunciation').textContent = def.pronunciation;
      popup.querySelector('.def-type').textContent = def.type;
      popup.querySelector('.def-meaning').textContent = '☞ ' + def.meaning;

      // Handle context vs american equivalent
      if (def.context) {
        popup.querySelector('.def-american-label').textContent = 'Context: ';
        popup.querySelector('.def-american-value').textContent = def.context;
      } else {
        popup.querySelector('.def-american-label').textContent = 'American Equivalent: ';
        popup.querySelector('.def-american-value').textContent = def.american;
      }

      popup.classList.remove('hidden');
      bringToFront(popup);

      // Add taskbar item for definition popup
      addTaskbarItem(popup, word, getThemeClass(popup));
    }
  });
});

// Folder Tab Switching
document.querySelectorAll('.folder-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    const folderWindow = tab.closest('.folder-window');
    const tabName = tab.dataset.tab;

    // Update active tab
    folderWindow.querySelectorAll('.folder-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    // Update active content
    folderWindow.querySelectorAll('.tab-content').forEach(content => {
      content.classList.remove('active');
      if (content.dataset.tab === tabName) {
        content.classList.add('active');
      }
    });
  });
});

// Dayna button click handler
document.querySelector('.start-btn').addEventListener('click', () => {
  const daynaWindow = document.getElementById('dayna-window');
  daynaWindow.classList.remove('hidden');
  bringToFront(daynaWindow);
  addTaskbarItem(daynaWindow, 'Dayna', 'vibes-item');
});

// Draggable Windows (both window-header and folder-titlebar)
document.querySelectorAll('.window-header, .folder-titlebar').forEach(header => {
  let isDragging = false;
  let currentX;
  let currentY;
  let initialX;
  let initialY;
  let xOffset = 0;
  let yOffset = 0;

  const windowEl = header.closest('.window');

  header.addEventListener('mousedown', (e) => {
    if (e.target.classList.contains('close-btn') || e.target.classList.contains('control-btn')) return;

    initialX = e.clientX - xOffset;
    initialY = e.clientY - yOffset;
    isDragging = true;
    windowEl.classList.add('dragging');
  });

  document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;

    e.preventDefault();
    currentX = e.clientX - initialX;
    currentY = e.clientY - initialY;
    xOffset = currentX;
    yOffset = currentY;

    windowEl.style.transform = `translate(calc(-50% + ${currentX}px), calc(-50% + ${currentY}px))`;
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
    windowEl.classList.remove('dragging');
  });
});
