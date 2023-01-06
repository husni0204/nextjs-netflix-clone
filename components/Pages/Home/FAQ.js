import React from 'react'
import BorderedBottomBox from '../../Wrapper/BorderedBottomBox'
import { Accordion, AccordionDetails, AccordionSummary, Button, Container, Grid, Stack, TextField, Typography, styled } from '@mui/material'
import { ExpandMore } from '@mui/icons-material'
import { useState } from 'react'

const CustomAccordion = styled(Accordion)(({ theme }) => ({
    backgroundColor: theme.palette.grey[900],
    color: theme.palette.common.white
}))

const CustomAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
    borderBottom: `1px solid ${theme.palette.common.black}`,
    padding: theme.spacing(1, 3),
    '&.Mui-expand': {
        padding: theme.spacing(0, 3)
    }
}))

const FAQ = () => {
    const [activeItem, setActiveItem] = useState(false)

    const handleChange = (panel) => (event, isExpanded) => {
        setActiveItem(isExpanded ? panel : false)
    }

    return (
        <BorderedBottomBox>

            <Container maxWidth="md" sx={{py:6}}>
                <Typography
                    variant="h3"
                    component="h3"
                    color="common.white"
                    align="center"
                    sx={{mb:6}}
                >
                    Frequently Asked Question
                </Typography>
                <Stack spacing={1} mb={8}>
                    <CustomAccordion square expanded={activeItem === 'panel1'} onChange={handleChange('panel1')}>
                        <CustomAccordionSummary
                            expandIcon={<ExpandMore />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography variant="h5">Apa itu Netflix ?</Typography>
                        </CustomAccordionSummary>
                        <AccordionDetails>
                            <Typography variant="h5" sx={{ mb: 4 }}>
                                Netflix adalah layanan streaming yang menawarkan berbagai acara TV pemenang penghargaan, film, anime, dokumenter, dan banyak lagi di ribuan perangkat yang terhubung ke Internet
                            </Typography>
                            <Typography variant="h5">
                                Kamu bisa menonton sepuasnya, kapan pun kamu mau, tanpa satu iklan pun – semuanya dengan satu harga bulanan yang murah. Selalu ada tontonan baru dan acara TV serta film baru yang ditambahkan setiap minggu!
                            </Typography>
                        </AccordionDetails>
                    </CustomAccordion>
                    <CustomAccordion square expanded={activeItem === 'panel2'} onChange={handleChange('panel2')}>
                        <CustomAccordionSummary
                            expandIcon={<ExpandMore />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography variant="h5">Berapa biaya berlangganan Netflix ?</Typography>
                        </CustomAccordionSummary>
                        <AccordionDetails>
                            <Typography variant="h5" sx={{ mb: 4 }}>
                                Tonton Netflix di smartphone, tablet, Smart TV, laptop, atau perangkat streaming-mu, semuanya dengan satu harga bulanan tetap Rentang harga mulai dari Rp54.000 hingga Rp186.000 per bulan. Tanpa biaya ekstra, tanpa kontrak.
                            </Typography>
                        </AccordionDetails>
                    </CustomAccordion>
                    <CustomAccordion square expanded={activeItem === 'panel3'} onChange={handleChange('panel3')}>
                        <CustomAccordionSummary
                            expandIcon={<ExpandMore />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography variant="h5">Dimana saya bisa menonton ?</Typography>
                        </CustomAccordionSummary>
                        <AccordionDetails>
                            <Typography variant="h5" sx={{ mb: 4 }}>
                                Tonton di mana pun, kapan pun. Masuk ke akun Netflix-mu untuk menonton langsung di netflix.com dari komputer pribadi atau di perangkat yang terhubung ke Internet dan mendukung aplikasi Netflix, termasuk smart TV, smartphone, tablet, pemutar media streaming, dan konsol game.
                            </Typography>
                            <Typography variant="h5">
                                Kamu juga bisa men-download acara favoritmu dengan aplikasi iOS, Android, atau Windows 10. Gunakan download untuk menonton saat kamu di perjalanan dan tidak punya koneksi Internet. Bawa Netflix ke mana saja.
                            </Typography>
                        </AccordionDetails>
                    </CustomAccordion>
                    <CustomAccordion square expanded={activeItem === 'panel4'} onChange={handleChange('panel4')}>
                        <CustomAccordionSummary
                            expandIcon={<ExpandMore />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography variant="h5">Bagaimana cara membatalkannya ?</Typography>
                        </CustomAccordionSummary>
                        <AccordionDetails>
                            <Typography variant="h5" sx={{ mb: 4 }}>
                                Netflix fleksibel. Tanpa kontrak menyebalkan dan tanpa komitmen. Kamu dapat dengan mudah membatalkan akunmu secara online dengan dua kali klik. Tanpa biaya pembatalan – mulai atau hentikan akunmu kapan pun.
                            </Typography>
                        </AccordionDetails>
                    </CustomAccordion>
                    <CustomAccordion square expanded={activeItem === 'panel5'} onChange={handleChange('panel5')}>
                        <CustomAccordionSummary
                            expandIcon={<ExpandMore />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography variant="h5">Apa yang bisa ditonton di Netflix ?</Typography>
                        </CustomAccordionSummary>
                        <AccordionDetails>
                            <Typography variant="h5" sx={{ mb: 4 }}>
                                Netflix memiliki pustaka lengkap yang berisi film panjang, film dokumenter, acara TV, anime, Netflix original pemenang penghargaan, dan lebih banyak lagi. Tonton sepuasnya, kapan pun kamu mau.
                            </Typography>
                        </AccordionDetails>
                    </CustomAccordion>
                    <CustomAccordion square expanded={activeItem === 'panel6'} onChange={handleChange('panel6')}>
                        <CustomAccordionSummary
                            expandIcon={<ExpandMore />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography variant="h5">Apakah Netflix sesuai bagi anak-anak ?</Typography>
                        </CustomAccordionSummary>
                        <AccordionDetails>
                            <Typography variant="h5" sx={{ mb: 4 }}>
                                Pengalaman Netflix Anak disertakan dalam keanggotaan agar kamu punya kontrol orang tua saat anak-anak menikmati acara TV dan film untuk keluarga di rumah.

                            </Typography>
                            <Typography variant="h5">
                                Profil anak dilengkapi kontrol orang tua yang dilindungi PIN sehingga kamu bisa membatasi rating usia konten yang bisa ditonton anak dan memblokir judul tertentu yang tidak boleh ditonton anak-anak.
                            </Typography>
                        </AccordionDetails>
                    </CustomAccordion>
                </Stack>
                <Typography
                    variant="h6"
                    component="p"
                    color="common.white"
                    textAlign="center"
                    sx={{ my: 3 }}
                >
                    Ready to watch? Enter your email to create or restart your membership.
                </Typography>
                <Grid container>
                    <Grid item xs>
                        <TextField variant="filled" label="email address" fullWidth sx={{ bgcolor: 'common.white' }} />
                    </Grid>
                    <Grid item xs="auto">
                        <Button variant="contained" size="large" color="primary" sx={{ height: '100%', borderRadius: '2px' }}>
                            Get Started
                        </Button>
                    </Grid>
                </Grid>
            </Container>
            
        </BorderedBottomBox>
    )
}

export default FAQ