import React from 'react';
import { Container, Box, Typography, Grid, Paper, Button, List, ListItem, ListItemIcon, ListItemText, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PublicIcon from '@mui/icons-material/Public';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SchoolIcon from '@mui/icons-material/School';

export default function EtsyInfoPage({ onNavigate }) {
    return (
        <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', pb: 8 }}>
            {/* Hero Section - Matching eBay Header */}
            <Box sx={{
                bgcolor: '#F56400', // Etsy Orange
                color: 'white',
                py: 8,
                px: 2,
                backgroundImage: 'linear-gradient(45deg, #F56400 30%, #FF8A33 90%)',
                textAlign: 'center'
            }}>
                <Container maxWidth="md">
                    <img src="/etsy-card.png" alt="Etsy Prinwork" style={{ maxHeight: 150, marginBottom: 20, borderRadius: 10, boxShadow: '0 4px 20px rgba(0,0,0,0.2)', backgroundColor: 'white', padding: '10px' }} />
                    <Typography variant="h3" fontWeight="bold" gutterBottom>
                        Yaratıcı Girişimcilerin Global Pazaryeri
                    </Typography>
                    <Typography variant="h6" sx={{ opacity: 0.9, mb: 4 }}>
                        "Dünyanın her yerinde milyonlarca insan sadece bir ürünle hayatını değiştirdi."
                    </Typography>
                    <Button variant="contained" sx={{ bgcolor: 'white', color: '#F56400', fontWeight: 'bold', px: 4, py: 1.5, fontSize: '1.1rem', '&:hover': { bgcolor: '#f0f0f0' } }} onClick={() => onNavigate('home')}>
                        Kursları İncele & Kayıt Ol
                    </Button>
                </Container>
            </Box>

            <Container maxWidth="lg" sx={{ mt: -4 }}>
                {/* Stats Section */}
                <Paper elevation={3} sx={{ p: 4, borderRadius: 4, mb: 6, bgcolor: 'background.paper' }}>
                    <Grid container spacing={4} alignItems="center">
                        <Grid item xs={12} md={6}>
                            <Typography variant="h5" color="#F56400" fontWeight="bold" gutterBottom>
                                KISACA E-İHRACAT
                            </Typography>
                            <Typography paragraph color="text.secondary">
                                Dünya nüfusu hızla artıyor ve insanların e-ticaret alışkanlığı her yıl katlanarak artıyor.
                                Şu an dünyada satılan her 4 üründen 1'i e-ticaret araçları ile gerçekleşiyor.
                            </Typography>
                            <List>
                                <ListItem>
                                    <ListItemIcon><TrendingUpIcon color="warning" /></ListItemIcon>
                                    <ListItemText
                                        primary={<Typography color="text.primary">2023 E-Ticaret Hacmi: 4.4 Trilyon $</Typography>}
                                        secondary={<Typography color="text.secondary" variant="body2">2028 Öngörüsü: 7 Trilyon $</Typography>}
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon><PublicIcon color="warning" /></ListItemIcon>
                                    <ListItemText
                                        primary={<Typography color="text.primary">Günlük Satış Hacmi: 20 Milyar $</Typography>}
                                        secondary={<Typography color="text.secondary" variant="body2">Global sahnede yerinizi alın.</Typography>}
                                    />
                                </ListItem>
                            </List>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box sx={{ bgcolor: 'rgba(245, 100, 0, 0.1)', p: 3, borderRadius: 2, border: '1px solid rgba(245, 100, 0, 0.3)' }}>
                                <Typography variant="h6" gutterBottom fontWeight="bold" color="#F56400">Küresel Perakende E-Ticaret Payı</Typography>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                    <Typography color="text.primary">2015</Typography>
                                    <Typography fontWeight="bold" color="text.primary">%7</Typography>
                                </Box>
                                <Box sx={{ width: '100%', bgcolor: 'rgba(255,255,255,0.1)', height: 8, borderRadius: 4, mb: 2 }}>
                                    <Box sx={{ width: '7%', bgcolor: '#F56400', height: '100%', borderRadius: 4 }} />
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                    <Typography color="text.primary">2023</Typography>
                                    <Typography fontWeight="bold" color="text.primary">%22</Typography>
                                </Box>
                                <Box sx={{ width: '100%', bgcolor: 'rgba(255,255,255,0.1)', height: 8, borderRadius: 4, mb: 2 }}>
                                    <Box sx={{ width: '22%', bgcolor: '#F56400', height: '100%', borderRadius: 4 }} />
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                    <Typography color="text.primary">2025 (Hedef)</Typography>
                                    <Typography fontWeight="bold" color="text.primary">%25</Typography>
                                </Box>
                                <Box sx={{ width: '100%', bgcolor: 'rgba(255,255,255,0.1)', height: 8, borderRadius: 4 }}>
                                    <Box sx={{ width: '25%', bgcolor: '#F56400', height: '100%', borderRadius: 4 }} />
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Paper>

                {/* What is Etsy Section */}
                <Grid container spacing={4} sx={{ mb: 6 }}>
                    <Grid item xs={12} md={6}>
                        <Paper elevation={2} sx={{ p: 4, height: '100%', borderRadius: 4, transition: '0.3s', bgcolor: 'background.paper', '&:hover': { transform: 'translateY(-5px)', bgcolor: 'rgba(255,255,255,0.05)' } }}>
                            <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ color: '#F56400' }}>Etsy Nedir?</Typography>
                            <Typography paragraph color="text.secondary">
                                Etsy, tasarım odaklı, yaratıcı ve niş ürünlerin satıldığı uluslararası bir pazaryeridir. Dünyanın her yerinden insanlar; tek bir ürünle, şirket kurmadan, stok yapmadan gelir elde edebilir.
                            </Typography>
                            <Typography paragraph color="text.secondary">
                                <strong style={{ color: 'white' }}>Farkı Ne?</strong> Etsy'de fiyatlar değil ürünler yarışır. Üründen çok hikayeyi satarsınız.
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Paper elevation={2} sx={{ p: 4, height: '100%', borderRadius: 4, transition: '0.3s', bgcolor: 'background.paper', '&:hover': { transform: 'translateY(-5px)', bgcolor: 'rgba(255,255,255,0.05)' } }}>
                            <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ color: '#0064D2' }}>Neden Etsy?</Typography>
                            <Typography paragraph color="text.secondary">
                                "İngilizce bilmiyorum", "Kargo karışık", "Şirketim yok" diyorsanız, Etsy tam size göre!
                            </Typography>
                            <Typography paragraph sx={{ bgcolor: 'rgba(61, 220, 89, 0.1)', p: 2, borderRadius: 2, borderLeft: '4px solid #3DDC59', color: 'text.primary' }}>
                                ✅ Şirket zorunluluğu yok.<br />
                                ✅ Payoneer gerekmez, direkt TR bankasına ödeme.<br />
                                ✅ Organik trafik yüksek, reklamsız satış mümkün.
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>

                {/* Curriculum Section */}
                <Box sx={{ mb: 6 }}>
                    <Typography variant="h4" textAlign="center" fontWeight="bold" gutterBottom sx={{ mb: 4 }}>
                        Etsy Eğitim Programı Müfredatı
                    </Typography>

                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <Accordion defaultExpanded sx={{ bgcolor: 'background.paper' }}>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                    <Typography fontWeight="bold">📌 Modül 1-4: Temeller & Analiz</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <List dense>
                                        <ListItem><ListItemIcon><CheckCircleIcon sx={{ color: '#F56400' }} fontSize="small" /></ListItemIcon><ListItemText primary="Etsy Yol Haritası & Politikalar" /></ListItem>
                                        <ListItem><ListItemIcon><CheckCircleIcon sx={{ color: '#F56400' }} fontSize="small" /></ListItemIcon><ListItemText primary="Mağaza Açılışı & Doğrulama" /></ListItem>
                                        <ListItem><ListItemIcon><CheckCircleIcon sx={{ color: '#F56400' }} fontSize="small" /></ListItemIcon><ListItemText primary="Algoritma & SEO Temelleri" /></ListItem>
                                        <ListItem><ListItemIcon><CheckCircleIcon sx={{ color: '#F56400' }} fontSize="small" /></ListItemIcon><ListItemText primary="Ürün Araştırması & Rakip Analizi (E-Rank)" /></ListItem>
                                    </List>
                                </AccordionDetails>
                            </Accordion>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Accordion defaultExpanded sx={{ bgcolor: 'background.paper' }}>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                    <Typography fontWeight="bold">🚀 Modül 5-8: Ürün & Listeleme</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <List dense>
                                        <ListItem><ListItemIcon><CheckCircleIcon sx={{ color: '#F56400' }} fontSize="small" /></ListItemIcon><ListItemText primary="Çok Satan Ürünleri Bulma" /></ListItem>
                                        <ListItem><ListItemIcon><CheckCircleIcon sx={{ color: '#F56400' }} fontSize="small" /></ListItemIcon><ListItemText primary="Profesyonel Ürün Görselleri & Mockup" /></ListItem>
                                        <ListItem><ListItemIcon><CheckCircleIcon sx={{ color: '#F56400' }} fontSize="small" /></ListItemIcon><ListItemText primary="Mağaza Dashboard & Kargo Ayarları" /></ListItem>
                                        <ListItem><ListItemIcon><CheckCircleIcon sx={{ color: '#F56400' }} fontSize="small" /></ListItemIcon><ListItemText primary="SEO Uyumlu Ürün Listeleme" /></ListItem>
                                    </List>
                                </AccordionDetails>
                            </Accordion>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <Accordion sx={{ bgcolor: 'background.paper' }}>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                    <Typography fontWeight="bold">📈 Modül 9-12: Reklam & Süreç Yönetimi</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Grid container>
                                        <Grid item xs={12} md={6}>
                                            <List dense>
                                                <ListItem><ListItemIcon><CheckCircleIcon sx={{ color: '#F56400' }} fontSize="small" /></ListItemIcon><ListItemText primary="Etsy Ads (Reklam) Yönetimi" /></ListItem>
                                                <ListItem><ListItemIcon><CheckCircleIcon sx={{ color: '#F56400' }} fontSize="small" /></ListItemIcon><ListItemText primary="Sipariş & Gönderim Süreçleri" /></ListItem>
                                            </List>
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <List dense>
                                                <ListItem><ListItemIcon><CheckCircleIcon sx={{ color: '#F56400' }} fontSize="small" /></ListItemIcon><ListItemText primary="Müşteri Memnuniyeti & Review Yönetimi" /></ListItem>
                                                <ListItem><ListItemIcon><CheckCircleIcon sx={{ color: '#F56400' }} fontSize="small" /></ListItemIcon><ListItemText primary="Print on Demand & Stoksuz Satış" /></ListItem>
                                            </List>
                                        </Grid>
                                    </Grid>
                                </AccordionDetails>
                            </Accordion>
                        </Grid>
                    </Grid>
                </Box>

                {/* Call to Action */}
                <Box sx={{ textAlign: 'center', py: 6, bgcolor: 'background.paper', borderRadius: 4, boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
                    <SchoolIcon sx={{ fontSize: 60, color: '#F56400', mb: 2 }} />
                    <Typography variant="h4" fontWeight="bold" gutterBottom>
                        Global Sahnede Yerinizi Alın
                    </Typography>
                    <Typography variant="h6" color="text.secondary" sx={{ mb: 4, maxWidth: 600, mx: 'auto' }}>
                        Etsy ile döviz geliri elde etmek ve kendi, özgür işinizi kurmak için hemen başlayın.
                    </Typography>
                    <Button variant="contained" size="large" onClick={() => onNavigate('home')} sx={{ px: 6, py: 2, borderRadius: 8, fontSize: '1.2rem', fontWeight: 'bold', background: 'linear-gradient(45deg, #F56400 30%, #FF8A33 90%)' }}>
                        Paketleri İncele
                    </Button>
                </Box>

            </Container>
        </Box>
    );
}
