import React from 'react'
import Box from '@mui/material/Box'
import { Typography } from '@mui/material'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'

export default function Special() {
  const specialDish = [
    {
      img: "",
      name: "",
      description: ""
    },
    {
      img: "",
      name: "",
      description: ""
    },
    {
      img: "",
      name: "",
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
      <Box>
        <Grid container xs={12}>
          {specialDish?.map(({ img, name, description }, index) => (
            <Grid item xs={4} key={index}>
              <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", }}>
                <Paper elevation={0} sx={{ m: 2, width: 350, height: 450, borderRadius: "18px", boxShadow: "rgb(0 0 0 / 10%) 0px 10px 50px", }}>
                  <img src={img} alt="name" />
                  <Typography variant="h4">
                    {name}
                  </Typography>
                  <Typography variant="body1">
                    {description}
                  </Typography>
                </Paper>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  )
}

