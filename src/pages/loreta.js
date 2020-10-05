import { Achievement, Info } from "grommet-icons"
import { Anchor, Box, Button, Grommet, Heading, Image } from "grommet"
import React, { useState } from "react"

import Aus from "../components/image"
import Confetti from 'react-confetti'
import Layout from "../components/layout"
import { Link } from "gatsby"
import Typist from 'react-typist';

const IndexPage = () => {
  const [score, setScore] = useState(0)
  const [mision1, setMision1] = useState(true)
  const [instmision1, setinstMision1] = useState(false)
  const [hints, setHints] = useState(false)
  const [hints2, setHints2] = useState(false)
  const [makey, setMakey] = useState(false)

  const [label, setLabel] = useState("¡Ayúdame a conocer Scratch!")
  const [sure, setSure] = useState(false)
  const [mision3, setMision3] = useState(false)
  const [mision4, setMision4] = useState(false)
  console.log(mision1)
  console.log(label)


  return (
    <Grommet>
      <Box margin={{ horizontal: 'auto' }} >
        <Box margin="auto" direction="column" alignContent="center" background="f7f6f6" gap="large">
          <Typist cursor={{ show: "true", hideWhenDone: "true", element: '' }}>
            <Heading color="#f42926" level={1} textAlign="center">
              ¡Hi Loreta!
          </Heading>
            <Heading color="#ff5756" level={1} textAlign="center">
             I am Spark the dog 
          </Heading>
         
   
          </Typist>
          {mision1 == true ? <Heading color="lightRed" margin={{ horizontal: 'auto' }} level={3} textAlign="center">
            {label}
          </Heading> : <Heading color="lightRed" margin={{ horizontal: 'auto' }} level={3} textAlign="center">
              Help me with Scratch!
        </Heading>}
        <Box  height="medium" width='medium' background="url(https://scratch-diplomas-wizeline.s3.us-east-2.amazonaws.com/02bac95a04a65600a095ae5948d87756-dog-cartoon-by-vexels.png)"></Box>
          {mision1 &&
            <>
              <Button primary label="Leer Misión 1 " onClick={() => setinstMision1(true)} />
              {instmision1 && <Box animation="slideRight">
                <Heading level={3}>1. Open Scratch</Heading>
                <Heading level={3}>2. Add a background</Heading>
                <Heading level={3}>3. Add a sprite</Heading>
                <Heading level={3}>4. Make your sprite talk </Heading>
                <Heading level={3}>5. Make your sprite spin 10 times</Heading>
                <Heading level={3}> BONUS : Add a sound at the end of the conversation</Heading>
                
                <Box direction="row" gap="medium">
                  <Button primary href="https://scratch.mit.edu/projects/editor/?tutorial=getStarted" label="Abrir Scratch" target="_blank">
                  </Button>
                  <Button label="Clue 1" onClick={() => setHints(!hints)} icon={<Info></Info>}></Button>
                  <Button primary label="Done!" onClick={() => {
                    setMakey(!makey)
                    setScore((score) => (score + 10000))
                  }} icon={<Achievement />}></Button>

                </Box>

              </Box>
              }
            </>}
          {hints &&
            <Image width="medium" src="https://scratch-diplomas-wizeline.s3.us-east-2.amazonaws.com/Screen+Shot+2020-10-05+at+17.19.48.png"></Image>
          }
          {makey && mision1 &&
          <>
            <Box direction="column">    
              <Heading level={3}>7. Add a second scratch </Heading>
              <Heading level={3}>8. Add the event on sprite click </Heading>
              <Heading level={3}>9. Make a costume change everytime you click the sprite</Heading>
              <Heading level={3}>BONUS:Make the two sprites greet each other and make one disappear</Heading>
              <Box direction="row" gap="medium"> 
              <Button label="Clue 2" onClick={() => setHints2(!hints2)} icon={<Info></Info>}></Button>
              <Button primary label="Done!" onClick={() => {
                    setScore((score) => (score + 10000))
                    setMision3(true)
                  }} icon={<Achievement />}></Button>           
                  </Box>
              </Box>    
              </> 
            }
            {hints2 &&
            <Image width="medium" src="https://scratch-diplomas-wizeline.s3.us-east-2.amazonaws.com/Screen+Shot+2020-10-05+at+17.48.15.png"></Image>
          }

          {
            mision3 && 
            <Box direction="column">  
            <Heading level={3}>11. Add sounds to each sprite</Heading>  
            <Heading level={3}>10. Add a title to your story</Heading>
            <Button primary label="Done!" onClick={() => {
                    setScore((score) => (score + 10000))
                    setMision4(true)
                  }} icon={<Achievement />}></Button>    
            </Box>
           
          }

          {
            mision4 && 
            <Box direction="column">  
            <Heading level={1}>Create your own story</Heading>  
            <Heading level={3}>Two sprites</Heading>
            <Heading level={3}>One sound </Heading>
            <Heading level={3}>One change of costume </Heading>
            <Heading level={3}>One special effect</Heading>
            <Button primary target="_blank" label="¡Listo!" href="https://scratch-diplomas-wizeline.s3.us-east-2.amazonaws.com/Loreta.pdf" onClick={() => {
                    setScore((score) => (score + 10000))
                    
                  }} icon={<Achievement />}></Button>    
            </Box>
           
          }     



          <Box animation={{ type: "pulse", delay: "8000" }}>
            <Heading textAlign="center">
              Score  {score}
            </Heading>
          </Box>
        </Box>

        <div style={{ maxWidth: `300px` }}>

        </div>
      </Box>
    </Grommet >
  )
}

export default IndexPage
