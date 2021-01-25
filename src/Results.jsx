import React, { useState, useEffect } from 'react';

function Results(props) {

  const searchOptions = {
    
    type: '',
    random: 'random',
    api: 'https://official-joke-api.appspot.com/jokes/',
  };

  const [jokes, setJokes] = useState();
  const [punchlines, setPunch] = useState();
  const url = `${searchOptions.api}${searchOptions.random}`
  console.log(url)
  let response =''
  let jsonResponse=''

  const getJoke = async () => {
   
    response = await fetch(url)
    jsonResponse = await response.json()
    console.log(jsonResponse)
    setJokes(jsonResponse)
    setPunch("") 

  }

  function getPunch(){
    setPunch(jokes.punchline) 
    console.log("hello")
    console.log(jokes)
  }
 
  useEffect(() => {

    getJoke()
  
  }, [])

  return (
    <div>

      <h1>{jokes && jokes.setup}<br></br></h1>
      <h1>{punchlines}<br></br></h1>
      <button class="button" onClick={getJoke}> <h4>Click for a joke</h4></button>
      <button class="button" onClick={getPunch}><h4>Punchline</h4></button>
    </div>
  )
}
export default Results;

