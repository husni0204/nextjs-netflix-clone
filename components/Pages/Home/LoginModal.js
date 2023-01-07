import { Box, Button, Checkbox, FormControl, FormHelperText, Grid, InputAdornment, Modal, TextField, Typography } from "@mui/material"
import { useState } from "react";
import Image from "next/image"

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'common.white',
    boxShadow: 24,
    p: 4,
};

const LoginModal = ({open, CloseModal}) => {
    const [showPassword, setShowPassword] = useState(false)

    return (
        <Modal open={open} onClose={CloseModal}>
            <Box sx={style}>
                <Typography variant="h4" component="h1" sx={{mb:4}}>
                    Sign In
                </Typography>
                <Grid sx={{mb:2}}>
                    <form>
                        <FormControl sx={{mb:2}} fullWidth>
                            <TextField
                                id="email"
                                name="email"
                                label="Email atau Nomor Telephon"
                                variant="filled"
                            />
                            <FormHelperText>
                                Please enter a valid email or phone number.
                            </FormHelperText>
                        </FormControl>
                        <FormControl sx={{ mb: 4 }} fullWidth>
                            <TextField
                                id="password"
                                name="password"
                                type={showPassword ? 'text' : 'password'}
                                label="password"
                                variant="filled"
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <Button onClick={()=>setShowPassword(!showPassword)}>
                                                {showPassword ? 'Hide' : 'Show'}
                                            </Button>
                                        </InputAdornment>
                                    )
                                }}
                            />
                            <FormHelperText>
                                Your password must contain between 4 and 60 characters.
                            </FormHelperText>
                        </FormControl>
                        <Button type="submit" variant="contained" size="large" fullWidth>
                            Sign In
                        </Button>
                    </form>
                </Grid>
                <Grid container alignItems="center" justifyContent="space-between" sx={{mb:1}}>
                    <Box>
                        <Checkbox />
                        <Typography variant="caption">
                            Ingat saya
                        </Typography>
                    </Box>
                    <Typography variant="caption" component="a" href="#">
                        Perlu Bantuan ?
                    </Typography>
                </Grid>
                <Grid container alignItems="center" sx={{mb:2}}>
                    <Image
                        src="/__images/facebook.png"
                        height={20}
                        width={20}
                        layout="fixed"
                        alt="facebook login"
                    />
                    <Typography variant="caption" component="a" href="#" sx={{ml:1}}>
                        Masuk dengan Facebook
                    </Typography>
                </Grid>
                <Grid>
                    <Typography variant="body1" component="span">
                        Baru di Netflix ?
                    </Typography>
                    <Typography variant="body1" color="primary" component="a" href="#">
                        &nbsp;Daftar sekarang
                    </Typography>
                </Grid>
                <Grid>
                    <Typography variant="caption">
                        This page is protected by Google reCAPTCHA to ensure you are not a bot.
                    </Typography>
                    <Typography variant="caption" color="primary" component="a" href="#">
                        Learn more
                    </Typography>
                </Grid>
            </Box>
        </Modal>
    )
}

export default LoginModal