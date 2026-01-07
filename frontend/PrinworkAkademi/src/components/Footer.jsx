import React from 'react';
import { Box, Container, Typography, Grid, Link, IconButton, Divider } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function Footer() {
    return (
        <Box sx={{ bgcolor: '#1a1a1a', color: 'white', pt: 8, pb: 4, mt: 'auto', borderTop: '4px solid #F56400' }}>
            <Container maxWidth="lg">

                {/* Stakeholders Section */}
                <Box sx={{ mb: 6, textAlign: 'center' }}>
                    <Typography variant="h6" sx={{ color: '#F56400', fontWeight: 'bold', mb: 3, letterSpacing: 1.5, textTransform: 'uppercase' }}>
                        Global Çözüm Ortaklarımız
                    </Typography>
                    <Grid container spacing={6} justifyContent="center" alignItems="center">
                        <Grid item xs={6} md={3}>
                            <Link href="https://www.shipentegra.com/?utm_source=google&utm_medium=cpc&utm_campaign=gads-branding-campaign&utm_term=all&utm_content=gads-branding-campaign&gad_source=1&gad_campaignid=20672232604&gclid=CjwKCAiA9aPKBhBhEiwAyz82J8ELNSz3cDgyRj0k6363nvLRBrNJXkQlDlOGjG6eqrfZ4Ab8NB65ZhoCvIYQAvD_BwE" target="_blank">
                                <Box
                                    component="img"
                                    src="/shipentegra-logo.png"
                                    alt="ShipEntegra"
                                    sx={{
                                        width: '150px',
                                        height: '80px',
                                        objectFit: 'contain',
                                        transition: 'all 0.3s',
                                        '&:hover': { transform: 'scale(1.05)' }
                                    }}
                                />
                            </Link>
                        </Grid>
                        <Grid item xs={6} md={3}>
                            <Link href="https://prinwork.com" target="_blank">
                                <Box
                                    component="img"
                                    src="/prinwork-logo.png"
                                    alt="Prinwork"
                                    sx={{
                                        width: '150px',
                                        height: '80px',
                                        objectFit: 'contain',
                                        transition: 'all 0.3s',
                                        '&:hover': { transform: 'scale(1.05)' }
                                    }}
                                />
                            </Link>
                        </Grid>
                        <Grid item xs={6} md={3}>
                            <Link href="https://oneclicklister.com" target="_blank">
                                <Box
                                    component="img"
                                    src="/ocl-logo.png"
                                    alt="One Click Lister"
                                    sx={{
                                        width: '150px',
                                        height: '80px',
                                        objectFit: 'contain',
                                        transition: 'all 0.3s',
                                        '&:hover': { transform: 'scale(1.05)' }
                                    }}
                                />
                            </Link>
                        </Grid>
                    </Grid>
                </Box>

                <Divider sx={{ bgcolor: 'rgba(255,255,255,0.1)', mb: 6 }} />

                {/* Main Footer Links */}
                <Grid container spacing={4} sx={{ mb: 6 }}>
                    <Grid item xs={12} md={4}>
                        <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
                            <img src="/logo.png" alt="Prinwork Akademi" style={{ height: 40, marginRight: 10 }} />
                            <Typography variant="h6" fontWeight="bold">PRINWORK AKADEMİ</Typography>
                        </Box>
                        <Typography variant="body2" sx={{ color: 'grey.500', mb: 2 }}>
                            E-ihracat yolculuğunuzda ihtiyacınız olan tüm eğitim ve araçlar tek bir platformda.
                        </Typography>
                        <Box>
                            <IconButton href="https://www.instagram.com/prinworkxakademi/" target="_blank" sx={{ color: 'grey.400', '&:hover': { color: '#E1306C' } }}><InstagramIcon /></IconButton>
                            <IconButton href="https://www.youtube.com/@prinwork" target="_blank" sx={{ color: 'grey.400', '&:hover': { color: '#FF0000' } }}><YouTubeIcon /></IconButton>
                            <IconButton href="https://tr.linkedin.com/company/prinwork" target="_blank" sx={{ color: 'grey.400', '&:hover': { color: '#0077b5' } }}><LinkedInIcon /></IconButton>
                            <IconButton href="https://www.facebook.com/prinwork/?locale=tr_TR" target="_blank" sx={{ color: 'grey.400', '&:hover': { color: '#1877F2' } }}><FacebookIcon /></IconButton>
                            <IconButton href="https://x.com/prinworkcom/with_replies" target="_blank" sx={{ color: 'grey.400', '&:hover': { color: '#1DA1F2' } }}><TwitterIcon /></IconButton>
                        </Box>
                    </Grid>

                    <Grid item xs={6} md={2}>
                        <Typography variant="subtitle1" fontWeight="bold" gutterBottom sx={{ color: 'white' }}>Platform</Typography>
                        <Link href="/" color="grey.500" display="block" underline="hover" sx={{ mb: 1 }}>Kurslar</Link>
                        <Link href="#" color="grey.500" display="block" underline="hover" sx={{ mb: 1 }}>Eğitmenler</Link>
                        <Link href="#" color="grey.500" display="block" underline="hover" sx={{ mb: 1 }}>Blog</Link>
                    </Grid>

                    <Grid item xs={6} md={2}>
                        <Typography variant="subtitle1" fontWeight="bold" gutterBottom sx={{ color: 'white' }}>Kurumsal</Typography>
                        <Link href="#" color="grey.500" display="block" underline="hover" sx={{ mb: 1 }}>Hakkımızda</Link>
                        <Link href="#" color="grey.500" display="block" underline="hover" sx={{ mb: 1 }}>İletişim</Link>
                        <Link href="#" color="grey.500" display="block" underline="hover" sx={{ mb: 1 }}>Kariyer</Link>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <Typography variant="subtitle1" fontWeight="bold" gutterBottom sx={{ color: 'white' }}>İletişim</Typography>
                        <Typography variant="body2" color="grey.500" sx={{ mb: 1 }}>Koza Plaza, İstanbul</Typography>
                        <Typography variant="body2" color="grey.500" sx={{ mb: 1 }}>0850 242 2304</Typography>
                        <Typography variant="body2" color="grey.500">info@prinwork.com</Typography>
                    </Grid>
                </Grid>

                <Divider sx={{ bgcolor: 'rgba(255,255,255,0.1)', mb: 4 }} />

                {/* Copyright */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 2 }}>
                    <Typography variant="body2" color="grey.600">
                        © 2024 Prinwork Akademi. Tüm hakları saklıdır.
                    </Typography>
                    <Box>
                        <Link href="#" color="grey.600" underline="hover" sx={{ mr: 2 }}>Gizlilik Politikası</Link>
                        <Link href="#" color="grey.600" underline="hover">Kullanım Şartları</Link>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}
