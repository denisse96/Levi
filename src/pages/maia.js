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
              ¡Hola Maia Eileen!
          </Heading>
            <Heading color="#ff5756" level={1} textAlign="center">
              Soy Spark el perro
          </Heading>
         
   
          </Typist>
          {mision1 == true ? <Heading color="lightRed" margin={{ horizontal: 'auto' }} level={3} textAlign="center">
            {label}
          </Heading> : <Heading color="lightRed" margin={{ horizontal: 'auto' }} level={3} textAlign="center">
              ¡Ayúdame a conocer Scratch!
        </Heading>}
        <Box  height="medium" width='medium' background="url(https://scratch-diplomas-wizeline.s3.us-east-2.amazonaws.com/02bac95a04a65600a095ae5948d87756-dog-cartoon-by-vexels.png)"></Box>
          {mision1 &&
            <>
              <Button primary label="Leer Misión 1 " onClick={() => setinstMision1(true)} />
              {instmision1 && <Box animation="slideRight">
                <Heading level={3}>1. Abre scratch</Heading>
                <Heading level={3}>2. Agrega un fondo</Heading>
                <Heading level={3}>3. Agrega un sprite</Heading>
                <Heading level={3}>4. Haz que tu sprite hable </Heading>
                <Heading level={3}>5. Haz que tu sprite gire 10 veces</Heading>
                <Heading level={3}> BONUS : Haz que tu sprite haga un sonido al acabar</Heading>
                
                <Box direction="row" gap="medium">
                  <Button primary href="https://scratch.mit.edu/projects/editor/?tutorial=getStarted" label="Abrir Scratch" target="_blank">
                  </Button>
                  <Button label="Pista 1" onClick={() => setHints(!hints)} icon={<Info></Info>}></Button>
                  <Button primary label="¡Listo!" onClick={() => {
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
              <Heading level={3}>7. Agrega otro sprite </Heading>
              <Heading level={3}>8. Agrega el evento "Al hacer clic en este objeto"  </Heading>
              <Heading level={3}>9. Cada vez que selecciones el objeto, haz que cambie de vestuario </Heading>
              <Heading level={3}>BONUS: Haz que los dos sprites se saluden y luego uno desaparezca </Heading>
              <Box direction="row" gap="medium"> 
              <Button label="Pista 2" onClick={() => setHints2(!hints2)} icon={<Info></Info>}></Button>
              <Button primary label="¡Listo!" onClick={() => {
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
            <Heading level={3}>11. Agrega sonido a uno de tus sprites</Heading>  
            <Heading level={3}>10. Agrega un título a tu historia</Heading>
            <Button primary label="¡Listo!" onClick={() => {
                    setScore((score) => (score + 10000))
                    setMision4(true)
                  }} icon={<Achievement />}></Button>    
            </Box>
           
          }

          {
            mision4 && 
            <Box direction="column">  
            <Heading level={1}>Crea tu propia historia</Heading>  
            <Heading level={3}>Con dos sprites</Heading>
            <Heading level={3}>Un sonido</Heading>
            <Heading level={3}>Un cambio de vestuario </Heading>
            <Heading level={3}>Un efecto</Heading>
            <Button primary target="_blank" label="¡Listo!" href="https://scratch-diplomas-wizeline.s3.us-east-2.amazonaws.com/Maia+Eileen.pdf" onClick={() => {
                    setScore((score) => (score + 10000))
                    
                  }} icon={<Achievement />}></Button>    
            </Box>
           
          }     



          <Box animation={{ type: "pulse", delay: "8000" }}>
            <Heading textAlign="center">
              Puntos  {score}
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
