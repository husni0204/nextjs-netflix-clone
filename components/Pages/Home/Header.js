import React from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import { Button, TextField } from '@mui/material'

const Header = () => {
  return (
    <Box>
      <Box
        sx={{
          position: 'relative',
          height: '745px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          '&::after': {
            position: 'absolute',
            content: '""',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            background: 'rgba(0, 0, 0, 0.4)',
            backgroundImage: `linear-gradient(
              to Bottom,
              rgba(0, 0, 0, 0.6) 0,
              rgba(0, 0, 0, 0) 60%,
              rgba(0, 0, 0, 0.8) 100%
            )`
          }
        }}
      >
        <Image
          src={"/__images/backdrop.jpg"}
          layout="fill"
          objectFit="cover"
          alt="Backdrop Netflix" />
        <Container maxWidth="md" sx={{position: 'relative', zIndex: 1000}}>
          <Typography
            variant="h2"
            component="h1"
            color="common.white"
            fontWeight={"600"}
            textAlign="center"
          >
            Unlimited movies, TV Shows, and more.
          </Typography>
          <Typography
            variant="h5"
            component="p"
            color="common.white"
            textAlign="center"
            gutterBottom
          >
            Watch anywhere, Cancel anytime.
          </Typography>
          <Typography
            variant="h6"
            component="p"
            color="common.white"
            textAlign="center"
            sx={{my: 3}}
          >
            Ready to watch? Enter your email to create or restart your membership.
          </Typography>
          <Grid container>
            <Grid item xs>
              <TextField variant="filled" label="email address" fullWidth sx={{bgcolor: 'common.white'}}/>
            </Grid>
            <Grid item xs="auto">
              <Button variant="contained" size="large" color="primary" sx={{height: '100%', borderRadius: '2px'}}>
                Get Started
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  )
}

export default Header