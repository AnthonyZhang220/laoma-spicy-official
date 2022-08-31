import React from 'react'
import Box from '@mui/material/Box'
import { Typography } from '@mui/material'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import "./Special.scss"

export default function Special() {
  const specialDish = [
    {
      img: "",
      name: "MaLaTang | 麻辣烫",
      description: ""
    },
    {
      img: "",
      name: "Dry Hot Pot | 麻辣香锅",
      description: ""
    },
    {
      img: "",
      name: "Dessert | 点心",
      description: "2222222222222222222222222"
    },
  ]
  return (
    <Box className="special"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        pt: "50px",
        pb: "50px",
        margin: "0 auto",
        maxWidth: "1400px",
        flexDirection: "column",
      }}>
      <Box className="special-title" sx={{
        display: "flex", flexDirection: "column", justifyContent: "center",
        alignItems: "center",
        m: 2,
        p: 2,
      }}>
        <Typography variant="h2">
          Our Special Dish
        </Typography>
        <Typography variant="h5">
          Made with authentic chinese ingredients.
        </Typography>
      </Box>
      <Box className="special-display-container">
        {specialDish?.map(({ img, name, description }, index) => (
          <Card sx={{
            width: 325,
            height: 450,
            borderRadius: "18px",
            boxShadow: "rgb(0 0 0 / 10%) 0px 10px 50px",
            textAlign: "center",
          }} key={index}>
            <CardMedia
              component="img"
              height="225"
              image={img}
              alt={name}
              sx={{ border: "none" }}
            />
            <CardContent>
              <Typography  variant="h5">
                {name}
              </Typography>
              <Typography  variant="body1">
                {description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  )
}

