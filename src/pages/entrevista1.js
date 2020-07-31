import { Achievement, Info } from "grommet-icons"
import { Anchor, Box, Button, Grommet, Heading, Image } from "grommet"
import React, { useEffect, useState } from "react"

import Confetti from 'react-confetti'
//import Image from "../components/image"
import Layout from "../components/layout"
import { Link } from "gatsby"
import Typist from 'react-typist';

const Entrevista = () => {
    const [score, setScore] = useState(0)
    const [colorArray, setColorArray] = useState([])
    const [currentColor, setCurrentColor] = useState()


    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    let index = 0
    console.log(colorArray)
    useEffect(() => {
        while (index < 10) {
            let color = getRandomColor()
            setCurrentColor(color)

            index = index + 1
        }

    }, [])
    useEffect(() => {

        setColorArray([...colorArray, currentColor]);

    }, [currentColor])



    return (
        <Grommet>
            <Box direction="column" width="100%">



                {colorArray?.map((color, index) => {
                    return (
                        <Box background={color}>{index}</Box>
                    )

                })}

            </Box>

            <Box direction="column" align="center" alignContent="center" margin={{ horizontal: 'auto' }}>
                <Box direction="row" pad="medium" gap="large">
                    <Button primary color="black" label={"add".toLocaleUpperCase()} onClick={() => { setScore((score) => (score + 1)) }}></Button>
                    <Button primary color="black" label={"substract".toLocaleUpperCase()} onClick={() => { setScore((score) => (score - 2)) }}></Button>
                    <Button primary color="black" label={"divide".toLocaleUpperCase()} onClick={() => { setScore((score) => (score / 3)) }}></Button>
                    <Button primary color="black" label={"reset".toLocaleUpperCase()} onClick={() => { setScore(0) }}></Button>
                </Box>
                <Heading textAlign="center">{score}</Heading>
            </Box>
        </Grommet >
    )
}

export default Entrevista
