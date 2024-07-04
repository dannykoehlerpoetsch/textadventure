import rls from "readline-sync";

// Hilfsfunktion zur Formatierung der Nutzereingabe (erster Buchstabe ist großgeschrieben)
function capitalize(input) {
  if (typeof input !== "string" || input.length === 0) {
    return input;
  }
  return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
}
// leere Objekte für Spieler und Feind und Banditen
let player = {
  name: "",
  city: "",
  age: 0,
  weapons: [
    { weapon: "", damage: 50 },
    { weapon: "", damage: 80 },
    { weapon: "", damage: 100 },
  ],
  points: 100,
};
//Feind
let enemy = {
  name: "",
  city: "",
  weapons: [
    { weapon: "Faustschlag", damage: 50 },
    { weapon: "Steinschleuder", damage: 80 },
    { weapon: "Giftpfeil", damage: 100 },
  ],
  transform: "",
  points: 350,
};
// erster Bandit
let bandit1 = {
  name: "Taschendieb",

  weapons: [
    { weapon: "Schienbeintritt", damage: 20 },
    { weapon: "Schubsen", damage: 40 },
    { weapon: "Messer", damage: 50 },
  ],

  points: 150,
};
// zweiter Bandit
let bandit2 = {
  name: "Echsenmensch",

  weapons: [
    { weapon: "Scheinbeintritt", damage: 20 },
    { weapon: "Schlag in den Nacken", damage: 40 },
    { weapon: "Peitsche", damage: 50 },
  ],

  points: 150,
};

// Regeln und Intro

function rules() {
  console.clear();
  console.log(
    `Miniprojekt zum Abschluss des Moduls "Programming Basics" von Danny Köhler-Poetsch, Juli 2024`
  );
  console.log(`
    
███╗   ███╗██╗███╗   ██╗██████╗      ██████╗ ██╗   ██╗███████╗██████╗     ███████╗██╗   ██╗██╗██╗     
████╗ ████║██║████╗  ██║██╔══██╗    ██╔═══██╗██║   ██║██╔════╝██╔══██╗    ██╔════╝██║   ██║██║██║     
██╔████╔██║██║██╔██╗ ██║██║  ██║    ██║   ██║██║   ██║█████╗  ██████╔╝    █████╗  ██║   ██║██║██║     
██║╚██╔╝██║██║██║╚██╗██║██║  ██║    ██║   ██║╚██╗ ██╔╝██╔══╝  ██╔══██╗    ██╔══╝  ╚██╗ ██╔╝██║██║     
██║ ╚═╝ ██║██║██║ ╚████║██████╔╝    ╚██████╔╝ ╚████╔╝ ███████╗██║  ██║    ███████╗ ╚████╔╝ ██║███████╗
╚═╝     ╚═╝╚═╝╚═╝  ╚═══╝╚═════╝      ╚═════╝   ╚═══╝  ╚══════╝╚═╝  ╚═╝    ╚══════╝  ╚═══╝  ╚═╝╚══════╝
                                                                                                      

    `);
  console.log(`
***Willkommen bei Mind over Evil - hier kannst du mit Intelligenz und Stärke Punkten***\n
Was ist passiert?\n
...\n
Als du heute morgen aufgewacht bist, weißt du zuerst gar nicht was los ist...\n
Im Radio läuft die Schreckensmeldung, dass deine Nachbarstadt überrannt wurde von jemanden, der dir sehr bekannt vorkommt.\n
...\n
Dir ist klar, dass nur du schlimmeres verhindern kannst und du beschließt, in den Kampf zu ziehen!\n
Bereits in der Schule hat dir dieser Jemand schon regelmäßig den Tag versaut - aber damit ist jetzt Schluss!
...\n
+ + + + + + + + + + + + + + + + + + + + + + + + + + +R E G E L N + + + + + + + + + + + + + + + + + + + + + + + + +\n
+ Ziel ist es, den Endgegner im Kampf zu besiegen.                                                               +\n        
+ Um zu diesem Kampf zu kommen, musst du deine Intelligenz in verschiedenen Rätseln unter Beweis stellen.        +\n
+ Für jedes gelöste Rätsel erhältst du Punkte, die du im finalen Kampf brauchen wirst um den Gegner zu schlagen. +\n
+ Aber Achtung - Unterwegs lauern weitere Banditen, also sammle lieber viele Punkte in den Rätseln!              +\n
+ + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + 
...\n
also dann...\n
    
 
                                         █████   ██████   ██████   █████   ██████ ██   ██ ███████ 
                                        ██   ██    ██       ██    ██   ██ ██      ██  ██  ██      
                                        ███████    ██       ██    ███████ ██      █████   █████   
                                        ██   ██    ██       ██    ██   ██ ██      ██  ██  ██      
                                        ██   ██    ██       ██    ██   ██  ██████ ██   ██ ███████ 
                                                          
                                                          


  `);
  console.log(
    "Mein Name ist übrigens Albert - ich bin die Stimme in deinem Kopf 💭"
  );
  rls.question(`Drücke Enter zum fortfahren ↩️`);
}

// Spielerdaten abfragen über readline-sync
// funktion capitalize um Nutzereingaben ordentlich anzeigen zu lassen
function getPlayerInfo() {
  console.log(`
      ////^\\\\\\\\
      | ^   ^ |
     @ (o) (o) @
      |   <   |
      |  ___  |
       \_____/
     ____|  |____
    /    \__/    \\
   /              \\
  /\\_/|        |\\_/\\
 / /  |        |  \\ \\
( <   |        |   > )
 \\ \\  |        |  / /
  \\ \\ |________| / /
   \\ \\|
    `);
  player.name = capitalize(
    rls.question(
      `\nBevor wir die Stadt retten, verrate mir zunächst deinen Namen!\n> `
    )
  );
  player.city = capitalize(
    rls.question(
      `\nVor lauter Panik habe ich glatt vergessen, aus welcher Stadt du kommst. Die Stadt hieß...?\nGib deine Stadt ein:\n> `
    )
  );

  console.log(`
   (
    \\
     )
##-------->        
     )
    /
   (
    `);
  console.log(
    `\nDanke ${player.name}! Du kannst jedoch nicht unbewaffnet in den Kampf ziehen!\n`
  );
  // Frage nach Waffen als Array => über Schleife ausgeben
  const weaponPrompts = [
    `\nNenne mir deine erste Waffe:\n> `,
    `\nNenne mir deine zweite Waffe:\n> `,
    `\nNenne mir deine dritte Waffe:\n> `,
  ];
  // Schleife um Waffen zuzuordnen
  for (let i = 0; i < player.weapons.length && i < weaponPrompts.length; i++) {
    player.weapons[i].weapon = capitalize(rls.question(weaponPrompts[i]));
  }
}

// Spielerdaten ausgeben
function printPlayerInfo(player) {
  console.log(
    `\nIch fasse kurz zusammen:\nDein Name lautet ${player.name}, du lebst in der Stadt ${player.city} und ziehst in den Kampf mit folgenden Waffen:\n`
  );
  // alle Waffen nochmal aufzählen und separat ausloggen
  player.weapons.forEach((weapon) => {
    console.log(
      `${weapon.weapon} - sie fügt dem Gegner ${weapon.damage} Schadenspunkte zu.`
    );
  });

  console.log(
    `\nDu startest mit einer Punktzahl von ${player.points} Punkten.`
  );
  rls.question(`Drücke Enter zum Fortfahren ↩️`);
}

// Feind-Daten bekommen
function getEnemyInfo() {
  console.log(`
        .-"""".
       /       \\
   __ /   .-.  .\\
  /  \`\\  /   \\/\\
  |  _ \/   .==.==.
  | (   \  /____\__\\
   \\ \\      (_()(_()
    \\ \\            '---._
     \\                   \\_
  /\ |\`       (__)_______/
 /  \|     /\___/
|    \     \||VV
|     \     \|"""",
|      \     ______)
\       \  /\`
         \(
    
    `);
  enemy.name = capitalize(
    rls.question(
      `\nWie hast du diesen Tyrannen damals in der Schule doch gleich genannt? \nSein Name lautet:\n> `
    )
  );
  enemy.city = capitalize(
    rls.question(
      `\nVerzeih meine geistige Umnachtung ${player.name}...aber wie hieß noch gleich die Stadt, die es zu retten gilt?\n> `
    )
  );
  // Feind soll sich bei Spielgewinn in die Antwort des Users verwandeln
  enemy.transform = capitalize(
    rls.question(
      `\nWas ich mich schon lange Frage - was findest du so richtig eklig und widerlich?\n> `
    )
  );
  console.log(`${player.name} - dein Abenteuer startet genau jetzt!`);
  rls.question(`Drücke Enter zum fortfahren ↩️`);
}

// erstes Rätsel - Wort erraten

function wordQuiz() {
  // Array mit Frage/Antwort Key/Value Paaren => über Index dann nacheinander ausloggen
  const quizQuestions = [
    {
      question:
        "Ich bin immer hungrig, werde niemals satt. Wenn du mich fütterst, mache ich es nur noch schlimmer. Was bin ich? 🔥",
      answer: "feuer",
    },
    {
      question:
        "Ich kann gebrochen werden, ohne dass ich jemals berührt werde. Was bin ich? 💑",
      answer: "herz",
    },
    {
      question: "Je mehr du davon nimmst, desto größer wird es. Was ist es? 🔘",
      answer: "loch",
    },
  ];
  // Hilfsfunktion um die Fragen aus dem Arra zu stellen und die jeweilige Antwort auszugeben. Parameter sind das Frage-Objekt und die Anzahl der Versuche pro Frage
  function askQuestion(questionObj, attempts) {
    while (attempts > 0) {
      const answer = rls.question(`\n${questionObj.question}\n> `);
      if (questionObj.answer.toLowerCase() === answer.toLowerCase()) {
        player.points += 50;
        console.log(
          `\n✅ ${player.name} - du bist sehr klug! Deine Antwort war richtig und du erhältst 50 Punkte!\n`
        );
        return true;
      } else {
        attempts--;
        if (attempts > 0) {
          console.log(
            `\n❌Das war leider falsch. Du hast noch ${attempts} Versuche.\n`
          );
        } else {
          player.points -= 10;
          console.log(
            `\n❌Das war leider falsch. Du hast keine Versuche mehr und verlierst 10 Punkte.❌\n`
          );
        }
      }
    }
    return false;
  }
  // Einleitungstext ins Rätsel
  console.log(
    `\nAuf deinem Weg nach ${enemy.city} passierst du den Wörterwald von Wordwood.\nUm hindurch zu gelangen, musst du mit Intelligenz punkten.\n`
  );
  const startQuiz = rls.question(
    `\n${player.name} - um ${enemy.name} zu erreichen und gegen ihn zu kämpfen, musst du 3 Rätsel lösen. Bereit? (j / n)\n> `
  );

  if (startQuiz.toLowerCase() === "j") {
    quizQuestions.forEach((question, index) => {
      console.log(
        `\nDu musst folgende Frage richtig beantworten und hast insgesamt 3 Versuche!\n`
      );
      askQuestion(question, 3); // Übergabe des Frage-Array und der Anzahl der Versuche an Hilfsfunktion
    });
  } else {
    // Der Spieler muss JA sagen, also Frage solange ob er bereit ist, bis er ja sagt (nein ist keine Option)
    console.log(
      `\nDas war eine rhetorische Frage! Drücke also "j" wenn ich frage ob du bereit bist!\n`
    );
    wordQuiz();
  }
  // Wenn das Rätsel vorbei ist, gib die Punktzahl an.
  console.log(
    `\nDein Punktestand beträgt ${player.points} Punkte.\nDu lässt den Wörterwald von Wordwood hinter dir und setzt deine Reise fort...\n`
  );
  rls.question(`Drücke Enter zum fortfahren ↩️`);
}

//zweites Rätsel - Rechnen

function mathQuiz() {
  console.log(
    `Eigentlich möchtest du gerade eine Pause machen, doch aus dem Boden schießen Zahlen so groß wie Bäume!
    \nDu befindest dich auf der Straße von Zahlenhausen - kein guter Ort für ein Wurstbrot...
    \nBändige die Zahlen, um weiter zu kommen!`
  );
  const startQuiz = rls.question(
    `\n${player.name} - bereit für das nächste Rätsel? (j / n)\n> `
  );

  if (startQuiz.toLowerCase() === "j") {
    // Hilfsfunktion um die Matheaufgaben auszugeben samt der Lösung und der Anzahl der Versuche
    function askMathQuestion(prompt, correctAnswer, attempts = 3) {
      while (attempts > 0) {
        const userAnswer = parseInt(rls.question(`\n${prompt}\n> `), 10);
        if (userAnswer === correctAnswer) {
          player.points += 50;
          console.log(
            `\n✅ Richtig! Du hast 50 Punkte gewonnen. Gesamtpunkte: ${player.points}\n`
          );
          return true;
        } else {
          attempts--;
          if (attempts > 0) {
            console.log(
              `\n❌ Falsch! Versuch es noch einmal. Du hast noch ${attempts} Versuche.\n`
            );
          } else {
            player.points -= 10;
            console.log(
              `\n❌ Falsch! Die richtige Antwort war ${correctAnswer}. Du verlierst 10 Punkte. Gesamtpunkte: ${player.points}\n`
            );
          }
        }
      }
      return false;
    }

    // Erste Aufgabe
    let num1 = Math.floor(Math.random() * 10);
    let num2 = Math.floor(Math.random() * 10);
    let correctAnswer = num1 + num2;
    askMathQuestion(
      `Rechenspiel Addition: Was ist ${num1} + ${num2}? ➕`,
      correctAnswer
    );

    // Zweite Aufgabe
    num1 = Math.floor(Math.random() * 10) + 1;
    num2 = Math.floor(Math.random() * 10) + 1;
    correctAnswer = num1 * num2;
    askMathQuestion(
      `Rechenspiel Multiplikation: Was ist ${num1} * ${num2}? ✖️`,
      correctAnswer
    );

    // Dritte Aufgabe
    num1 = Math.floor(Math.random() * 50) + 1;
    num2 = Math.floor(Math.random() * 50) + 1;
    correctAnswer = num1 - num2;
    askMathQuestion(
      `Rechenspiel Subtraktion: Was ist ${num1} - ${num2}? ➖`,
      correctAnswer
    );
  } else {
    // Mathequiz neu starten, wenn der User "nein" sagt
    console.log(
      `\nÄhm...nein, die "Ja/Nein" Auswahl ist rhetorisch! Drück einfach "j"!\n`
    );
    mathQuiz();
  }
  console.log(
    `\nDein Punktestand beträgt ${player.points} Punkte.\nDen Rest des Weges auf der Straße von Zahlenhausen rennst du lieber...`
  );
  rls.question(`Drücke Enter zum fortfahren ↩️`);
}

// drittes Rätsel - Logik
function logicQuiz() {
  console.log(`${player.name}, ${player.city} liegt nun schon sehr weit hinter dir und am Horizont siehst du schon Türme von ${enemy.city}.\n
Deine Waffen bei der Hand schreitest du zügig voran, als du plötzlich ein Hologramm deiner alten Mathelehrerin vor dir siehst!🕵️‍♀️ \n
Sie wird dich erst vorbeilassen, wenn du ihr Spielchen mitspielst...\n`);

  const startQuiz = rls.question(
    `\n${player.name} - bereit für das nächste Rätsel? (j / n)\n> `
  );

  if (startQuiz.toLowerCase() === "j") {
    // Hilfsfunktion zum Fragen stellen, selbe Logik wie im Matherätsel
    function askLogicQuestion(sequence, nextNumber, attempts = 3) {
      while (attempts > 0) {
        const userAnswer = parseInt(
          rls.question(
            `\nLogisches Denkspiel: Was ist das nächste in der Sequenz: ${sequence.join(
              ", "
            )}, ? Du hast ${attempts} Versuche:\n> `
          ),
          10
        );

        if (userAnswer === nextNumber) {
          player.points += 50;
          console.log(
            `\n✅ Richtig! Du hast 50 Punkte gewonnen. Gesamtpunkte: ${player.points}.`
          );
          return true;
        } else {
          attempts--;
          if (attempts > 0) {
            console.log(
              `\n❌Falsch! Versuche es erneut. Du hast noch ${attempts} Versuche.`
            );
          } else {
            player.points -= 10;
            console.log(
              `\n❌Falsch! Die richtige Antwort war ${nextNumber}. Du verlierst 10 Punkte. Gesamtpunkte: ${player.points}`
            );
          }
        }
      }
      return false;
    }

    // Erste Aufgabe
    let sequence = [2, 4, 8, 16];
    let nextNumber = 32;
    askLogicQuestion(sequence, nextNumber);

    // Zweite Aufgabe
    sequence = [3, 6, 9, 12];
    nextNumber = 15;
    console.log(
      `Zweite Aufgabe - du stellst fest, dass deine alte Mathelehrerin noch immer extrem nervig ist.🙄\n`
    );
    askLogicQuestion(sequence, nextNumber);

    // Dritte Aufgabe
    sequence = [1, 1, 2, 3, 5, 8];
    nextNumber = 13;
    console.log(`Aller guten Dinge sind bekanntlich 3...\n`);
    askLogicQuestion(sequence, nextNumber);
  } else {
    console.log(
      `\nWer ist hier geistig umnachtet? Rätselspiel heißt, dass du Rätsel lösen musst!\n`
    );
    logicQuiz();
  }

  console.log(
    `\nDein Punktestand beträgt ${player.points} Punkte.\nDas Hologramm deiner alten Mathlehrerin löst sich in Luft auf. (Hätte sie das nur damals schon gekonnt..)\n`
  );
  rls.question(`Drücke Enter zum fortfahren ↩️`);
}

// Endkampf
// Gegner soll seine Waffe zufällig einsetzen (mit Math.random über das Array iterieren und über den Zufallsindex Waffe wählen)
function getRandomWeapon(person) {
  const randomIndex = Math.floor(Math.random() * person.weapons.length);
  return person.weapons[randomIndex];
}

function finalFight() {
  const startfight = rls.question(
    `\n${player.name} - bereit für den finalen Kampf?? (j / n)\n> `
  );

  if (startfight.toLowerCase() === "j") {
    console.clear();
    console.log(`\nKampf zwischen ${player.name} und ${enemy.name} beginnt!\n`);
    console.log(`Punktestand ${player.name}: ${player.points}.`);
    console.log(`Punktestand ${enemy.name}: ${enemy.points}.`);

    while (player.points > 0 && enemy.points > 0) {
      // Spieler wählt eine Waffe
      console.log("\nWähle eine Waffe:");
      const weapons = player.weapons;
      // Zeige alle Waffen an über eine Schleife
      for (let i = 0; i < weapons.length; i++) {
        console.log(
          `${i + 1}. ${weapons[i].weapon}: fügt ${
            weapons[i].damage
          } Schaden zu.`
        );
      }

      const weaponChoice =
        rls.questionInt("Gib die Nummer der Waffe ein: ") - 1; // -1 um wieder auf den Index zu kommen
      const playerWeapon = weapons[weaponChoice]; // player.weapons[index].weapon

      console.log(
        `\n${player.name} verwendet ${playerWeapon.weapon} mit ${playerWeapon.damage} Schaden.\n`
      );

      // Feind wählt zufällige Waffe
      const enemyWeapon = getRandomWeapon(enemy);
      console.log(
        `${enemy.name} verwendet ${enemyWeapon.weapon} mit ${enemyWeapon.damage} Schaden.\n`
      );

      // Berechnung der Schäden
      enemy.points -= playerWeapon.damage;
      player.points -= enemyWeapon.damage;

      // Anzeige der verbleibenden Punkte
      console.log(`${player.name} hat noch ${player.points} Punkte.`);
      console.log(`${enemy.name} hat noch ${enemy.points} Punkte.\n`);
    }

    // Ergebnis des Kampfes
    // Bei Gleichstand starte den Kampf neu und fülle die Punkte wieder auf
    if (player.points <= 0 && enemy.points <= 0) {
      console.log(`Unentschieden! Beide haben keine Punkte mehr.`);
      player.points = 200;
      enemy.points = 150;
      finalFight();
      // Wenn der Spieler verliert => GameOver
    } else if (player.points <= 0) {
      console.clear();

      console.log(
        `${enemy.name} hat gewonnen! ${player.name} hat keine Punkte mehr.\n${player.name}, du hast es leider nicht geschafft ${enemy.city} zu retten.\nDas Spiel ist vorbei...`
      );
      console.log(`
        
        ░▒▓██████▓▒░ ░▒▓██████▓▒░░▒▓██████████████▓▒░░▒▓████████▓▒░       ░▒▓██████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░▒▓███████▓▒░  
       ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░             ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░ 
       ░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░             ░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░ 
       ░▒▓█▓▒▒▓███▓▒░▒▓████████▓▒░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓██████▓▒░        ░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░  
       ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░             ░▒▓█▓▒░░▒▓█▓▒░ ░▒▓█▓▓█▓▒░ ░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░ 
       ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░             ░▒▓█▓▒░░▒▓█▓▒░ ░▒▓█▓▓█▓▒░ ░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░ 
        ░▒▓██████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░       ░▒▓██████▓▒░   ░▒▓██▓▒░  ░▒▓████████▓▒░▒▓█▓▒░░▒▓█▓▒░ 
                                                                                                                               
                                                                                                                               
       
               `);
      process.exit();
    } // Spieler gewinnt
    else {
      console.clear();

      console.log(`
        
         
          ██╗   ██╗ ██████╗ ██╗   ██╗    ██╗    ██╗██╗███╗   ██╗
          ╚██╗ ██╔╝██╔═══██╗██║   ██║    ██║    ██║██║████╗  ██║
           ╚████╔╝ ██║   ██║██║   ██║    ██║ █╗ ██║██║██╔██╗ ██║
            ╚██╔╝  ██║   ██║██║   ██║    ██║███╗██║██║██║╚██╗██║
             ██║   ╚██████╔╝╚██████╔╝    ╚███╔███╔╝██║██║ ╚████║
             ╚═╝    ╚═════╝  ╚═════╝      ╚══╝╚══╝ ╚═╝╚═╝  ╚═══╝
                                                                
          
                                                                                       
`);
      console.log(
        `🎉 🎉 🎉 🎉 🎉 🎉 🎉 🎉 🎉 🎉 🎉 🎉 🎉 🎉 🎉 🎉 🎉 🎉 🎉 🎉 🎉 🎉 🎉 🎉 🎉 🎉 🎉 🎉 🎉 🎉 🎉 🎉 🎉 🎉 🎉 🎉 🎉 🎉 🎉 🎉 🎉 🎉 🎉 🎉 🎉 

${player.name} hat gewonnen! ${enemy.name} hat keine Punkte mehr.\n${enemy.name} verwandelt sich urplötzlich in eine/n ${enemy.transform}.

🎉 🎉 🎉 🎉 🎉 🎉 🎉 🎉 🎉 🎉 🎉 🎉 🎉 🎉 🎉 🎉 🎉 🎉 🎉 🎉 🎉 🎉 🎉 🎉 🎉 🎉 🎉 🎉 🎉 🎉 🎉 🎉 🎉 🎉 🎉 🎉 🎉 🎉 🎉 🎉 🎉 🎉 🎉 🎉 🎉`
      );

      console.log(
        `Die Einwohner von ${enemy.city} können ihr Glück kaum fassen!\nJubel bricht aus... ${player.name} - du hast es geschafft!\n
${enemy.city} wurde befreit aus den Zwängen von ${enemy.name}.`
      );
    }
  } else {
    console.log(`Du hast doch nicht alle Rätsel gelöst um jetzt zu kneifen!`);
    finalFight();
  }
}

// Zwischenkämpfe
function fight(bandit) {
  const startfight = rls.question(
    `\n${player.name} - du wirst angegriffen von ${bandit.name}! Bereit? (j / n)\n>`
  );

  if (startfight.toLowerCase() === "j") {
    console.clear();
    console.log(
      `\nKampf zwischen ${player.name} und ${bandit.name} beginnt!\n`
    );
    console.log(`Punktestand ${player.name}: ${player.points}.`);
    console.log(`Punktestand ${bandit.name}: ${bandit.points}.`);

    while (player.points > 0 && bandit.points > 0) {
      // Spieler wählt eine Waffe
      console.log("\nWähle eine Waffe:");
      const weapons = player.weapons;
      for (let i = 0; i < weapons.length; i++) {
        console.log(
          `${i + 1}. ${weapons[i].weapon}: fügt ${
            weapons[i].damage
          } Schaden zu.`
        );
      }

      const weaponChoice =
        rls.questionInt("Gib die Nummer der Waffe ein: ") - 1;
      const playerWeapon = weapons[weaponChoice];

      console.log(
        `\n${player.name} verwendet ${playerWeapon.weapon} mit ${playerWeapon.damage} Schaden.\n`
      );

      // Feind wählt zufällige Waffe
      const banditWeapon = getRandomWeapon(bandit);
      console.log(
        `${bandit.name} verwendet ${banditWeapon.weapon} mit ${banditWeapon.damage} Schaden.\n`
      );

      // Berechnung der Schäden
      bandit.points -= playerWeapon.damage;
      player.points -= banditWeapon.damage;

      // Anzeige der verbleibenden Punkte
      console.log(`${player.name} hat noch ${player.points} Punkte.`);
      console.log(`${bandit.name} hat noch ${bandit.points} Punkte.\n`);
    }

    // Ergebnis des Kampfes
    if (player.points <= 0 && bandit.points <= 0) {
      console.log(`Unentschieden! Beide haben keine Punkte mehr.`);
      player.points = 200;
      bandit.points = 70;
      fight();
    } else if (player.points <= 0) {
      console.clear();
      console.log(`
      ${bandit.name} hat gewonnen! ${player.name} hat keine Punkte mehr.\n${player.name}, du hast es leider nicht geschafft ${enemy.city} zu retten.\nDas Spiel ist vorbei...`);
      console.log(`
        
 ░▒▓██████▓▒░ ░▒▓██████▓▒░░▒▓██████████████▓▒░░▒▓████████▓▒░       ░▒▓██████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░▒▓███████▓▒░  
░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░             ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░             ░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░ 
░▒▓█▓▒▒▓███▓▒░▒▓████████▓▒░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓██████▓▒░        ░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░  
░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░             ░▒▓█▓▒░░▒▓█▓▒░ ░▒▓█▓▓█▓▒░ ░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░             ░▒▓█▓▒░░▒▓█▓▒░ ░▒▓█▓▓█▓▒░ ░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░ 
 ░▒▓██████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░       ░▒▓██████▓▒░   ░▒▓██▓▒░  ░▒▓████████▓▒░▒▓█▓▒░░▒▓█▓▒░ 
                                                                                                                        
                                                                                                                        

        `);
      process.exit();
    } else {
      console.log(
        `🎉🎉🎉 ${player.name} hat gewonnen! ${bandit.name} hat keine Punkte mehr.\n${bandit.name} zieht sich zurück und lässt dich in Ruhe.`
      );
    }
  } else {
    console.log(`Dir ist klar, dass dieser Kampf Teil des Spiels ist, ja?`);
    fight(bandit2);
  }
  rls.question(`Drücke Enter zum fortfahren ↩️`);
}

function playGame() {
  console.clear();
  rules();
  console.clear();
  getPlayerInfo();
  printPlayerInfo(player);
  console.clear();
  getEnemyInfo();

  console.clear();
  console.log(`
    
    ██████╗ ██╗   ██╗██╗███████╗
   ██╔═══██╗██║   ██║██║╚══███╔╝
   ██║   ██║██║   ██║██║  ███╔╝ 
   ██║▄▄ ██║██║   ██║██║ ███╔╝  
   ╚██████╔╝╚██████╔╝██║███████╗
    ╚══▀▀═╝  ╚═════╝ ╚═╝╚══════╝
                                
   
       `);

  wordQuiz();
  console.clear();
  console.log(`
    
    ███████╗██╗ ██████╗ ██╗  ██╗████████╗
    ██╔════╝██║██╔════╝ ██║  ██║╚══██╔══╝
    █████╗  ██║██║  ███╗███████║   ██║   
    ██╔══╝  ██║██║   ██║██╔══██║   ██║   
    ██║     ██║╚██████╔╝██║  ██║   ██║   
    ╚═╝     ╚═╝ ╚═════╝ ╚═╝  ╚═╝   ╚═╝   
                                         
    
        `);
  fight(bandit1);
  console.clear();

  console.log(`
    
    ██████╗ ██╗   ██╗██╗███████╗
   ██╔═══██╗██║   ██║██║╚══███╔╝
   ██║   ██║██║   ██║██║  ███╔╝ 
   ██║▄▄ ██║██║   ██║██║ ███╔╝  
   ╚██████╔╝╚██████╔╝██║███████╗
    ╚══▀▀═╝  ╚═════╝ ╚═╝╚══════╝
                                
   
       `);
  mathQuiz();
  console.clear();

  console.log(`
    
    ██████╗ ██╗   ██╗██╗███████╗
   ██╔═══██╗██║   ██║██║╚══███╔╝
   ██║   ██║██║   ██║██║  ███╔╝ 
   ██║▄▄ ██║██║   ██║██║ ███╔╝  
   ╚██████╔╝╚██████╔╝██║███████╗
    ╚══▀▀═╝  ╚═════╝ ╚═╝╚══════╝
                                
   
       `);
  logicQuiz();
  console.clear();

  console.log(`
    
    ███████╗██╗ ██████╗ ██╗  ██╗████████╗
    ██╔════╝██║██╔════╝ ██║  ██║╚══██╔══╝
    █████╗  ██║██║  ███╗███████║   ██║   
    ██╔══╝  ██║██║   ██║██╔══██║   ██║   
    ██║     ██║╚██████╔╝██║  ██║   ██║   
    ╚═╝     ╚═╝ ╚═════╝ ╚═╝  ╚═╝   ╚═╝   
                                         
    
        `);
  fight(bandit2);
  console.clear();

  console.log(`${player.name}, du hast nun alle Rätsel gelöst und die Feinde am Wegesrand besiegt.\n
${enemy.name} weiß inzwischen, dass du kommst und macht sich bereit für einen gigantischen Kampf!\n
Nimm also all deinen Mut zusammen und stell dich dem Tyrannen, der ${enemy.city} belagert!`);

  console.log(`
    

    ██████╗  ██████╗ ███████╗███████╗    ███████╗██╗ ██████╗ ██╗  ██╗████████╗
    ██╔══██╗██╔═══██╗██╔════╝██╔════╝    ██╔════╝██║██╔════╝ ██║  ██║╚══██╔══╝
    ██████╔╝██║   ██║███████╗███████╗    █████╗  ██║██║  ███╗███████║   ██║   
    ██╔══██╗██║   ██║╚════██║╚════██║    ██╔══╝  ██║██║   ██║██╔══██║   ██║   
    ██████╔╝╚██████╔╝███████║███████║    ██║     ██║╚██████╔╝██║  ██║   ██║   
    ╚═════╝  ╚═════╝ ╚══════╝╚══════╝    ╚═╝     ╚═╝ ╚═════╝ ╚═╝  ╚═╝   ╚═╝   
                                                                              
      
                                                                                                                      
                                                                                                                      

    `);
  finalFight();
}

playGame();
