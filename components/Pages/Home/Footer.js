import { Box, Container, Grid, MenuItem, Select, Stack, Typography } from "@mui/material"

const Footer = () => {
  return (
      <Box sx={{ bgcolor: 'common.black', color: 'grey.700' }}>
          <Container maxWidth="md" sx={{ py: 6 }}>
              <Stack spacing={4}>
                  <Typography >
                      Ada pertanyaan? Hubungi 007-803-321-2148
                  </Typography>
                  <Box>
                      <Grid container spacing={4}>
                          <Grid item xs={6} md={3}>
                              <Stack spacing={2}>
                                  <Typography variant="caption" component="a" href="#">
                                      Tanya Jawab
                                  </Typography>
                                  <Typography variant="caption" component="a" href="#">
                                      Hubungan Investor
                                  </Typography>
                                  <Typography variant="caption" component="a" href="#">
                                      Cara Menonton
                                  </Typography>
                                  <Typography variant="caption" component="a" href="#">
                                      Informasi Perusahaan
                                  </Typography>
                                  <Typography variant="caption" component="a" href="#">
                                      Hanya di Netflix
                                  </Typography>
                              </Stack>
                          </Grid>
                          <Grid item xs={6} md={3}>
                              <Stack spacing={2}>
                                  <Typography variant="caption" component="a" href="#">
                                      Pusat Bantuan
                                  </Typography>
                                  <Typography variant="caption" component="a" href="#">
                                      Lowongan Kerja
                                  </Typography>
                                  <Typography variant="caption" component="a" href="#">
                                      Ketentuan Penggunaan
                                  </Typography>
                                  <Typography variant="caption" component="a" href="#">
                                      Hubungi Kami
                                  </Typography>
                              </Stack>
                          </Grid>
                          <Grid item xs={6} md={3}>
                              <Stack spacing={2}>
                                  <Typography variant="caption" component="a" href="#">
                                      Akun
                                  </Typography>
                                  <Typography variant="caption" component="a" href="#">
                                      Tukar Kartu Hadiah
                                  </Typography>
                                  <Typography variant="caption" component="a" href="#">
                                      Privasi
                                  </Typography>
                                  <Typography variant="caption" component="a" href="#">
                                      Uji Kecepatan
                                  </Typography>
                              </Stack>
                          </Grid>
                          <Grid item xs={6} md={3}>
                              <Stack spacing={2}>
                                  <Typography variant="caption" component="a" href="#">
                                      Pusat Media
                                  </Typography>
                                  <Typography variant="caption" component="a" href="#">
                                      Beli Kartu Hadiah
                                  </Typography>
                                  <Typography variant="caption" component="a" href="#">
                                      Preferensi Cookie
                                  </Typography>
                                  <Typography variant="caption" component="a" href="#">
                                      Informasi Legal
                                  </Typography>
                              </Stack>
                          </Grid>
                      </Grid>
                  </Box>
                  <Box>
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
                  </Box>
                  <Typography variant="caption">
                      Netflix Indonesia
                  </Typography>
              </Stack>
          </Container>
      </Box>
  )
}

export default Footer