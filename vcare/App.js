import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';

import Header from './screens/learn/Header';
import StartGameScreen from './screens/learn/StartGameScreen'
import StartGame from './screens/learn/GameScreen';
import GameScreen from './screens/learn/GameScreen';
import GameOverScreen from './screens/learn/GameOverScreen';
export default function App() {

  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);
  
  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
    setGuessRounds(0);
  };

  const gameOverHandler = numOfRounds => {
    setGuessRounds(numOfRounds);
  };

  let content = <StartGameScreen onStartGame={startGameHandler} />;

  if (userNumber && guessRounds <= 0) {
    content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />;
  } else if (guessRounds > 0) {
    content = <GameOverScreen />;
  }
  
  return (
    <View style={layout.screen}>
      <Header title = "Guess a number" />
        {content}
    </View>
  );
}

const layout = StyleSheet.create({
  screen: {
    flex: 1
  }
});