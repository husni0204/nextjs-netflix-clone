import React from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import { AppBar, Button, MenuItem, Select, TextField, Toolbar } from '@mui/material'
import BorderedBottomBox from '../../Wrapper/BorderedBottomBox'

const Header = ({OpenModal}) => {
  return (
    <BorderedBottomBox>
      <AppBar
        sx={{
          backgroundColor: 'transparent',
          padding: '25px 20px',
          position: 'absolute'
        }}
        elevation={0}
      >
        <Toolbar>
          <Grid container alignItems="center" spacing={2}>
            <Grid item xs>
              <Image
                src="/__images/netflix.svg"
                height="45px"
                width="167px"
                layout="intrinsic"
                alt="Netflix logo"
              />
            </Grid>
            <Grid item xs={'auto'}>
              <Select
                name="lang"
                variant="outlined"
                size="small"
                defaultValue={'ID'}
                sx={{
                  borderWidth: '2px',
                  borderStyle: 'solid',
                  borderColor: 'common.white',
                  color: 'common.white',
                  '& .MuiSelect-icon': {
                    color: 'common.white'
                  },
                  '& .MuiOutlinedInput-notchedOutline': {
                    border: 'none'
                  }
                }}
              >
                <MenuItem value={'ID'}>Bahasa Indonesia</MenuItem>
                <MenuItem value={'EN'}>English</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={'auto'}>
              <Button variant="contained" color="primary" onClick={OpenModal}>Sign In</Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
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
          priority={true}
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
    </BorderedBottomBox>
  )
}

export default Header