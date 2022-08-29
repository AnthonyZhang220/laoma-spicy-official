import React from 'react'
import Box from '@mui/material/Box'
import { Typography } from '@mui/material'

export default function Special() {
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
      }}>
      <Box className="speciall-title">
        <Typography variant="h2">
          Our Special Dish
        </Typography>
      </Box>
    </Box>
  )
}

