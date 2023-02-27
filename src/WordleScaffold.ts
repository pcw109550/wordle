import {
  Field,
  SmartContract,
  state,
  State,
  method,
  Struct,
  Circuit,
  Poseidon,
  UInt32,
} from 'snarkyjs';

export class Word extends Struct({
  encodedWord: [Field, Field, Field, Field, Field],
}) {
  static fromString(word: string) {
    const lowerCaseWord = word.toLowerCase();

    let encodedWord = [];
    for (var i = 0; i < 5; i++) {
      // Test if character is lowercase letter
      if (/^[a-z]+$/.test(lowerCaseWord[i]) === true) {
        encodedWord.push(Field(word.charCodeAt(i) - 96));
      } else {
        // If character is not lowercase letter push 1 value (an 'a' character)
        encodedWord.push(Field(1));
      }
    }
    return new Word({ encodedWord });
  }

  hash() {
    return Poseidon.hash(this.encodedWord);
  }
}

export class Wordle extends SmartContract {
  @state(Field) solutionHash = State<Field>();
  @state(UInt32) turnNumber = State<UInt32>();
  @state(Word) lastGuess = State<Word>();

  init() {
    super.init();
    // Set the solution to the word 'hello'
    
    // Set the turn number to zero

    // Set the inital guess to 'aaaaa'
    // It won't be possible to generate a hint until the guesser updates this

  }

  @method publishGuess(guess: Word) {
    // Grab turnNumber from the Mina network

    // Check that it is the guessers turn

    // Increment the turn number

    // Check that all values are between 1 and 26 (valid letter configuration)
 
    // Set lastGuess to new guess

  }

  @method publishHint(solution: Word) {
    // Grab turnNumber from the Mina network

    // Add one and mod to check if it is hint generators turn

    // Increment the turn number

    // Grab solution hash from the Mina network

    // Check that the solution we provide matches the one on-chain

    // Grab lastGuess from the Mina network

    // Check green letters
    // Iterate thorough every index
    for (let i = 0; i < 5; i++) {
      // Check if the letters at this index match


      // If the letters match then add 200 to the letter in lastGuess

    }

    // Add yellow letter hints
    // Iterate through every possible combination of indexes
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        // Check if the letters at these indexes match

        // If the letters match then add 100 to the letter in lastGuess

        // If the letters match then set the value in solution to zero
        // This way we only count correct letters in the wrong position once

      }
    }

    // Set lastGuess to our new lastGuess which includes hints
    
  }
}
