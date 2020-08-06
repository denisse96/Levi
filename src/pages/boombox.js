import { Achievement, Info } from "grommet-icons"
import { Anchor, Box, Button, Grommet, Heading, Image } from "grommet"
import React, { useState } from "react"

import Aus from "../components/image"
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

    const [label, setLabel] = useState("¡Vamos a crear arte!")
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
                        <Heading color="black" level={1} textAlign="center">
                            ¡Hola Levi!
                        </Heading>
                        <Heading color="lightBlue" level={1} textAlign="center">
                            Soy Spark el perro
                    </Heading>

                    </Typist>
                    {mision1 == true ? <Heading color="lightRed" margin={{ horizontal: 'auto' }} level={3} textAlign="center">
                        {label}
                    </Heading> : <Heading color="lightRed" margin={{ horizontal: 'auto' }} level={3} textAlign="center">

                        </Heading>}
                    <Image height="medium" src="https://firebasestorage.googleapis.com/v0/b/ferropartes-d4a43.appspot.com/o/dog.png?alt=media&token=6dc2cbc5-7f50-4289-b4b4-d1b36ab3e639"></Image>

                    {mision1 &&
                        <>
                            <Button primary label="Leer Misión 1 " onClick={() => setinstMision1(true)} />
                            {instmision1 && <Box animation="slideRight">
                                <Heading level={3}>1. Aprende a hacer un sello   </Heading>
                                <Heading level={3}>2. Agrega un sprite </Heading>
                                <Heading level={3}>3. Agrega la pluma </Heading>
                                <Heading level={3}>4. ¡Haz que tu sprite sea un sello! </Heading>
                                <Heading level={3}>****¿Puedes hacer que el sprite haga sonido al colocar un sello? ***** </Heading>


                                <Box direction="row" gap="medium">
                                    <Button primary href="https://csfirst.withgoogle.com/c/cs-first/en/art/introduction-and-discovery/extensions/wallpaper.html" label="Aprende a hacer un sello" onClick={() => setMakey(!makey)} target="_blank">
                                    </Button>
                                    <Button primary href="https://scratch.mit.edu/projects/editor/?tutorial=getStarted" label="Abrir Scratch" onClick={() => setMakey(!makey)} target="_blank">
                                    </Button>

                                    <Button primary label="¡Listo!" onClick={() => {
                                        setMakey(!makey)
                                        setScore((score) => (score + 10000))
                                        setMision1(false)
                                        setLabel('Vamos a hacer graffiti')
                                    }} icon={<Achievement />}></Button>

                                </Box>

                            </Box>
                            }
                        </>}


                    {mision1 === false &&
                        <>
                            <Heading level={3}>1. Aprende a hacer graffiti</Heading>
                            <Heading level={3}>2. Agrega un sprite</Heading>
                            <Heading level={3}>3. Agrega la pluma </Heading>
                            <Heading level={3}>4. Haz que el sprite pinte graffiti </Heading>
                            <Button primary onClick={(score) => (
                                setScore(score + 1000)
                            )} label="Aprende a hacer Graffiti" target="_blank" href="https://csfirst.withgoogle.com/c/cs-first/en/art/graffiti/moving-and-stamping.html" ></Button>
                            <Anchor margin={{ horizontal: 'auto', top: "small" }} label="¡Felicidades!" href="https://firebasestorage.googleapis.com/v0/b/ferropartes-d4a43.appspot.com/o/Levi%20(1).pdf?alt=media&token=67c7484d-2509-493b-9489-3145cbcd8ad4"></Anchor>
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
