
  function reverseCase(sentence) {
    if (sentence.includes("Nemo ")){
      return "I found Nemo at " + (sentence.split(" ").indexOf("Nemo")+1)+ "!"
    }else{
      return "I can't find Nemo :("
    }
  }