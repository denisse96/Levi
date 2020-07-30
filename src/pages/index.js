import { Achievement, Info } from "grommet-icons"
import { Anchor, Box, Button, Grommet, Heading, Image } from "grommet"
import React, { useState } from "react"

import Confetti from 'react-confetti'
//import Image from "../components/image"
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

  const [label, setLabel] = useState("¡Ayúdame a poder comerme la dona!")
  const [sure, setSure] = useState(false)
  let labelmision1 = "¡Ayúdame a poder comerme la dona!"
  if (!mision1) {
    labelmision1 = "¡Ayúdame a cambiar de vestuario!"
  }
  console.log(mision1)
  console.log(label)


  return (
    <Grommet>
      <Box margin={{ horizontal: 'auto' }} >
        <Box margin="auto" direction="column" alignContent="center" background="f7f6f6" gap="large">
          <Typist cursor={{ show: "true", hideWhenDone: "true", element: '' }}>
            <Heading color="#f42926" level={1} textAlign="center">
              ¡Hola Levi!
          </Heading>
            <Heading color="#ff5756" level={1} textAlign="center">
              Soy Pulpi el Pulpo
          </Heading>

          </Typist>
          {mision1 == true ? <Heading color="lightRed" margin={{ horizontal: 'auto' }} level={3} textAlign="center">
            {label}
          </Heading> : <Heading color="lightRed" margin={{ horizontal: 'auto' }} level={3} textAlign="center">
              ¡Ayúdame a cambiar de vestuario!
        </Heading>}

          <Box height="medium" margin={{ horizontal: 'auto' }} width="medium" background={"url('https://firebasestorage.googleapis.com/v0/b/ferropartes-d4a43.appspot.com/o/Picture1.png?alt=media&token=885392e8-9f21-47fb-82d6-da4fb804b701')"}></Box>
          {mision1 &&
            <>
              <Button primary label="Leer Misión 1 " onClick={() => setinstMision1(true)} />
              {instmision1 && <Box animation="slideRight">
                <Heading level={3}>1. Abre scratch</Heading>
                <Heading level={3}>2. Agrega un fondo</Heading>
                <Heading level={3}>3. Agrega un sprite</Heading>
                <Heading level={3}>4. Agrega que el sprite se mueva cada vez que das space</Heading>
                <Heading level={3}>5. Agrega un segundo sprite para que el primero se destruya al segundo </Heading>
                <Box direction="row" gap="medium">
                  <Button primary href="https://scratch.mit.edu/projects/editor/?tutorial=getStarted" label="Abrir Scratch" target="_blank">
                  </Button>
                  <Button label="Pista 1" onClick={() => setHints(!hints)} icon={<Info></Info>}></Button>
                  <Button label="Pista 2" onClick={() => setHints2(!hints2)} icon={<Info></Info>}></Button>
                  <Button primary label="¡Listo!" onClick={() => {
                    setMakey(!makey)
                    setScore((score) => (score + 10000))
                  }} icon={<Achievement />}></Button>

                </Box>

              </Box>
              }
            </>}
          {hints &&
            <Image width="medium" src="https://firebasestorage.googleapis.com/v0/b/ferropartes-d4a43.appspot.com/o/Screen%20Shot%202020-07-29%20at%2020.20.26.png?alt=media&token=fce7d394-fe9e-48ef-a7b2-2cd0eefb47f6"></Image>
          }
          {hints2 &&

            <Image width="medium"
              src="https://firebasestorage.googleapis.com/v0/b/ferropartes-d4a43.appspot.com/o/Screen%20Shot%202020-07-29%20at%2020.34.48.png?alt=media&token=3ae0c3aa-b321-4098-b7f8-c1b30e5b170d"></Image>

          }
          {makey && mision1 &&
            <Box direction="column">
              <Heading level={3}>6. Agrega Makey Makey a Scratch</Heading>

              <Image margin="auto" width="500px" height="800px" src="https://firebasestorage.googleapis.com/v0/b/ferropartes-d4a43.appspot.com/o/Screen%20Shot%202020-07-29%20at%2020.51.01.png?alt=media&token=e6207767-2cb8-4506-a9c0-2f7d6819405a"></Image>
              <Heading level={3}>7. Conecta a computadora y a banana</Heading>

              <Image width="medium" height="600px" src="https://firebasestorage.googleapis.com/v0/b/ferropartes-d4a43.appspot.com/o/Screen%20Shot%202020-07-29%20at%2021.11.31.png?alt=media&token=7b0423c8-62ab-4b73-b12b-a10416df6f31"></Image>
              <Image width="large" height="700px" src="https://firebasestorage.googleapis.com/v0/b/ferropartes-d4a43.appspot.com/o/Screen%20Shot%202020-07-29%20at%2021.12.01.png?alt=media&token=3554f0d9-ed0e-4157-9a74-fce6fc0f53f0"></Image>
              <Heading level={3}>8. Toca la banana para que el sprite salte</Heading>
              <Button primary label="¡Listo!" onClick={() => {
                setMision1(false)
                setLabel("¡Ayúdame a cambiar de vestuario!")
                setScore((score) => (score + 10000))
              }} icon={<Achievement />}></Button>

            </Box>}
          {mision1 === false &&
            <>
              <Heading level={3}>1. Agrega un sprite</Heading>
              <Heading level={3}>2. Agrega un fondo</Heading>
              <Heading level={3}>3. Cada vez que das enter el vestuario del sprite debe de cambiar </Heading>
              <Button label="Finish" target="_blank" href="https://firebasestorage.googleapis.com/v0/b/ferropartes-d4a43.appspot.com/o/Levi.pdf?alt=media&token=f3ef974a-c5b4-415a-8e43-d6af06964a8f" icon={<Achievement></Achievement>}></Button>
            </>

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
