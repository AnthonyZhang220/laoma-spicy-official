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
      img: "./images/items/beef.png",
      name: "MaLa Tang|麻辣烫",
      description: "Malatang means 'hot spicy soup'. The base broth is made by slow-cooking roasted bones and bone marrow with 18 herbs and spices, including Sichuan pepper, star anise and mandarin peel."
    },
    {
      img: "./images/drypot.jpg",
      name: "MaLa XiangGuo|麻辣香锅",
      description: "MaLa XiangGuo is a Chinese dish prepared by stir frying. The preparation process involves placing the required ingredients in the pot, stir frying and adding seasoning."
    },
    {
      img: "./images/entree.jpg",
      name: "Appetizer|小吃",
      description: "Steamed / Fried dumplings. "
    },
  ]
  return (
    <Box className="special"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        pt: "50px",
        pb: "100px",
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
          Our Special
        </Typography>
        <Typography variant="h5">
          Made with authentic chinese ingredients.
        </Typography>
      </Box>
      <Box className="special-display-container" sx={{ mt: 5 }}>
        {specialDish?.map(({ img, name, description }, index) => (
          <Paper sx={{
            width: 325,
            height: 500,
            borderRadius: "18px",
            boxShadow: "rgb(0 0 0 / 10%) 0px 10px 50px",
            textAlign: "center",
          }} key={index}>
            <Box className="special-display-img-container" sx={{
              width: "110%",
              marginLeft: "-5%",
              marginTop: "-5%",
            }}>
              <CardMedia
                component="img"
                height="350"
                image={img}
                alt={name}
                sx={{ borderRadius: "50%", objectFit: "cover" }}
              />
            </Box>
            <CardContent>
              <Typography variant="h5">
                {name}
              </Typography>
              <Typography variant="body2">
                {description}
              </Typography>
            </CardContent>
          </Paper>
        ))}
      </Box>
    </Box>
  )
}

