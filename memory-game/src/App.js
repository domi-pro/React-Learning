import './App.css';
import {useState} from "react" 

function App() {
  const polish = ["niebo", "chmura", "słońce", "deszcz", "śnieg", "mgła"];
  const spanish = ["cielo", "nube", "sol", "lluvia", "nieve", "niebla"];
  const all = [...polish, ...spanish];
  const answers = [];
  for(let i=0; i<12; i++){
    const randomIndex = Math.floor(Math.random()*all.length);
    const word = all[randomIndex];
    all.splice(randomIndex,1);
    answers[i] = word;
  }
  
  return (
    <>
    <Header />
    <Board answers={answers}/>
    </>
  );
}

function Header() {
  return (
    <h1>Hello welcome to my memory game. Let's play!</h1>
  );
}

function MemoryCard({value, onCardClick, isReversed, isDisabled}){
  if (isDisabled){
    return(
      <div className="disabled-card"></div>
    );
  } else {
    return(
      <div className={isReversed ? "card flip" : "card"} onClick = {onCardClick}>
        <div className="front"></div>
        <div className="back">{value}</div>
      </div>
    );
  } 
}

function Board({answers}){
  const winning = [["niebo", "cielo"], ["słońce", "sol"], ["chmura", "nube"], ["deszcz", "lluvia"], ["śnieg", "nieve"], ["mgła", "niebla"]]; 
  const [reversed, setReversed] = useState(Array(12).fill(false));
  const [disabled, setDisabled] = useState(Array(12).fill(false));
  const [points, setPoints] = useState(0);
  let howMany = 0;
  function handleCardClick(i) {
    const cards = reversed.slice();
    cards[i] = !cards[i]
    for(let j=0; j<12; j++){
      if(cards[j] === true){
        howMany += 1
      }
    }
    let indexes = []
    if(howMany === 2){
      setTimeout(() => {
        for (let i = 0; i < cards.length; i++) {
          if (cards[i] === true) {
            indexes.push(i);
          }
        }
  
        const firstWord = answers[indexes[0]];
        const secondWord = answers[indexes[1]];
  
        for (let j = 0; j < 6; j++) {
          if (
            (winning[j][0] === firstWord && winning[j][1] === secondWord) ||
            (winning[j][0] === secondWord && winning[j][1] === firstWord)
          ) {
            setPoints(points + 1);
            const disability = disabled.slice();
            disability[indexes[0]] = true;
            disability[indexes[1]] = true;
            setDisabled(disability);
          }
        }
      }, 1000);
    }
    if(howMany === 3){
      const newcards = Array(12).fill(false)
      setReversed(newcards)
      newcards[i] = !newcards[i]
      setReversed(newcards)
    } else{
      setReversed(cards);
    }
  };
  return(
    <div className="board">
      <div className="points">PUNKTY: {points}</div>
      <div className="board-row">
          <MemoryCard value={answers[0]} onCardClick={() => handleCardClick(0)} isReversed={reversed[0]} isDisabled={disabled[0]}/>
          <MemoryCard value={answers[1]} onCardClick={() => handleCardClick(1)} isReversed={reversed[1]} isDisabled={disabled[1]}/>
          <MemoryCard value={answers[2]} onCardClick={() => handleCardClick(2)} isReversed={reversed[2]} isDisabled={disabled[2]}/>
          <MemoryCard value={answers[3]} onCardClick={() => handleCardClick(3)} isReversed={reversed[3]} isDisabled={disabled[3]}/>
      </div>
      <div className="board-row">
          <MemoryCard value={answers[4]} onCardClick={() => handleCardClick(4)} isReversed={reversed[4]} isDisabled={disabled[4]}/>
          <MemoryCard value={answers[5]} onCardClick={() => handleCardClick(5)} isReversed={reversed[5]} isDisabled={disabled[5]}/>
          <MemoryCard value={answers[6]} onCardClick={() => handleCardClick(6)} isReversed={reversed[6]} isDisabled={disabled[6]}/>
          <MemoryCard value={answers[7]} onCardClick={() => handleCardClick(7)} isReversed={reversed[7]} isDisabled={disabled[7]}/>
      </div>
      <div className="board-row">
          <MemoryCard value={answers[8]} onCardClick={() => handleCardClick(8)} isReversed={reversed[8]} isDisabled={disabled[8]}/>
          <MemoryCard value={answers[9]} onCardClick={() => handleCardClick(9)} isReversed={reversed[9]} isDisabled={disabled[9]}/>
          <MemoryCard value={answers[10]} onCardClick={() => handleCardClick(10)} isReversed={reversed[10]} isDisabled={disabled[10]}/>
          <MemoryCard value={answers[11]} onCardClick={() => handleCardClick(11)} isReversed={reversed[11]} isDisabled={disabled[11]}/>
      </div>
    </div>
  );
}

export default App;
