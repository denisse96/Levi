import { Box, Button, Grommet, Heading, } from "grommet"
import React, { useState } from "react"

import { Achievement } from "grommet-icons"
import Image from "../components/image"
import Layout from "../components/layout"
import { Link } from "gatsby"
import Typist from 'react-typist';

const IndexPage = () => {
  const [score, setScore] = useState(0)
  const [mision1, setMision1] = useState(false)
  const [mision2, setMision2] = useState(false)
  const [sure, setSure] = useState(false)


  return (
    <Grommet>
      <Box style={{ maxWidth: '1280px' }} margin={{ horizontal: 'auto' }} >
        <Box margin="auto" direction="column" alignContent="center" gap="large">
          <Typist cursor={{ show: "true", hideWhenDone: "true", element: '' }}>
            <Heading color="purple" level={1} textAlign="center">
              ¡Hola Levi!
          </Heading>
            <Heading color="purple" level={1} textAlign="center">
              Soy Bob el austronauta
          </Heading>
            <Heading color="lightRed" level={3} textAlign="center">
              completa la siguiente misión en scratch para poder ganar 1000 puntos
          </Heading>
          </Typist>
          <Image />
          <Button size="small" onClick={() => setMision1(true)} label="Misión 1" primary target="_blank" href="https://csfirst.withgoogle.com/c/cs-first/en/an-unusual-discovery/an-unusual-discovery/an-unusual-discovery.html" ></Button>
          {mision1 && <Button size="small" label="finished" primary color="orange" onClick={() => setSure(true)}></Button>}
          {sure && <Box animation="slideRight" direction="column" gap="large">
            <Heading>¿Estás seguro que acabaste?</Heading>
            <Button size="small" label="Sí" primary onClick={() => setScore(score + 1000)}></Button>
            <Button size="small" label="No" primary onClick={() => setScore(score - 1000)}></Button>
            {score < 0 && <Heading level={4} textAlign="center" margin="auto" > ¡Vuelve a intenterlo!</Heading>}
            {score > 0 &&
              <Box direction="column" gap="large" >
                <Button size="small" label="Misión 2" onClick={() => {
                  setMision2(true)
                  setScore(score + 1000)
                }} target="_blank" primary color="orange" href="https://csfirst.withgoogle.com/c/cs-first/en/an-unusual-discovery/an-unusual-discovery/extensions/code-a-color-change.html" ></Button>
                {mision2 && <Button size="large" label="¡Felicidades!" target="_blank" href="https://firebasestorage.googleapis.com/v0/b/ferropartes-d4a43.appspot.com/o/Levi.pdf?alt=media&token=94f70470-81ad-4bc8-8830-a9625a16737a" icon={<Achievement></Achievement>}></Button>}
              </Box>}
          </Box>}


          <Box animation={{ type: "pulse", delay: "8000" }}>
            <Heading textAlign="center">
              Puntos actuales {score}
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
