import React from 'react';
import { Container, Box, Typography, Grid, Paper, Button, List, ListItem, ListItemIcon, ListItemText, Divider, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PublicIcon from '@mui/icons-material/Public';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SchoolIcon from '@mui/icons-material/School';

export default function EbayInfoPage({ onNavigate }) {
    return (
        <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', pb: 8 }}>
            {/* Hero Section */}
            <Box sx={{
                bgcolor: '#FB9E1B',
                color: 'white',
                py: 8,
                px: 2,
                backgroundImage: 'linear-gradient(45deg, #FB9E1B 30%, #FFB74D 90%)',
                textAlign: 'center'
            }}>
                <Container maxWidth="md">
                    <img src="/ebay-card.png" alt="Ebay Prinwork" style={{ maxHeight: 150, marginBottom: 20, borderRadius: 10, boxShadow: '0 4px 20px rgba(0,0,0,0.2)', backgroundColor: 'white', padding: '10px' }} />
                    <Typography variant="h3" fontWeight="bold" gutterBottom>
                        Türkiye’den Dünyaya eBay ile Satış Rehberi
                    </Typography>
                    <Typography variant="h6" sx={{ opacity: 0.9, mb: 4 }}>
                        "Dünyanın en köklü pazaryerinde, milyonlarca alıcının olduğu bir sahnede yerinizi alın!"
                    </Typography>
                    <Button variant="contained" color="secondary" size="large" onClick={() => onNavigate('home')} sx={{ fontWeight: 'bold', px: 4, py: 1.5, fontSize: '1.1rem' }}>
                        Kursları İncele & Kayıt Ol
                    </Button>
                </Container>
            </Box>

            <Container maxWidth="lg" sx={{ mt: -4 }}>
                {/* Stats Section */}
                <Paper elevation={3} sx={{ p: 4, borderRadius: 4, mb: 6, bgcolor: 'background.paper' }}>
                    <Grid container spacing={4} alignItems="center">
                        <Grid item xs={12} md={6}>
                            <Typography variant="h5" color="primary" fontWeight="bold" gutterBottom>
                                KISACA E-İHRACAT
                            </Typography>
                            <Typography paragraph color="text.secondary">
                                Dünya nüfusu hızla artıyor ve insanların e-ticaret alışkanlığı her yıl katlanarak artıyor.
                                Şu an dünyada satılan her 4 üründen 1'i e-ticaret araçları ile gerçekleşiyor.
                            </Typography>
                            <List>
                                <ListItem>
                                    <ListItemIcon><TrendingUpIcon color="secondary" /></ListItemIcon>
                                    <ListItemText
                                        primary={<Typography color="text.primary">2023 E-Ticaret Hacmi: 4.4 Trilyon $</Typography>}
                                        secondary={<Typography color="text.secondary" variant="body2">2028 Öngörüsü: 7 Trilyon $</Typography>}
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon><PublicIcon color="secondary" /></ListItemIcon>
                                    <ListItemText
                                        primary={<Typography color="text.primary">Günlük Satış Hacmi: 20 Milyar $</Typography>}
                                        secondary={<Typography color="text.secondary" variant="body2">Global sahnede yerinizi alın.</Typography>}
                                    />
                                </ListItem>
                            </List>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box sx={{ bgcolor: 'rgba(251, 158, 27, 0.1)', p: 3, borderRadius: 2, border: '1px solid rgba(251, 158, 27, 0.3)' }}>
                                <Typography variant="h6" gutterBottom fontWeight="bold" color="primary">Küresel Perakende E-Ticaret Payı</Typography>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                    <Typography color="text.primary">2015</Typography>
                                    <Typography fontWeight="bold" color="text.primary">%7</Typography>
                                </Box>
                                <Box sx={{ width: '100%', bgcolor: 'rgba(255,255,255,0.1)', height: 8, borderRadius: 4, mb: 2 }}>
                                    <Box sx={{ width: '7%', bgcolor: 'primary.main', height: '100%', borderRadius: 4 }} />
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                    <Typography color="text.primary">2023</Typography>
                                    <Typography fontWeight="bold" color="text.primary">%22</Typography>
                                </Box>
                                <Box sx={{ width: '100%', bgcolor: 'rgba(255,255,255,0.1)', height: 8, borderRadius: 4, mb: 2 }}>
                                    <Box sx={{ width: '22%', bgcolor: 'primary.main', height: '100%', borderRadius: 4 }} />
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                    <Typography color="text.primary">2025 (Hedef)</Typography>
                                    <Typography fontWeight="bold" color="text.primary">%25</Typography>
                                </Box>
                                <Box sx={{ width: '100%', bgcolor: 'rgba(255,255,255,0.1)', height: 8, borderRadius: 4 }}>
                                    <Box sx={{ width: '25%', bgcolor: 'primary.main', height: '100%', borderRadius: 4 }} />
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Paper>

                {/* What is eBay Section */}
                <Grid container spacing={4} sx={{ mb: 6 }}>
                    <Grid item xs={12} md={6}>
                        <Paper elevation={2} sx={{ p: 4, height: '100%', borderRadius: 4, transition: '0.3s', bgcolor: 'background.paper', '&:hover': { transform: 'translateY(-5px)', bgcolor: 'rgba(255,255,255,0.05)' } }}>
                            <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ color: '#E53238' }}>eBay Nedir?</Typography> {/* eBay Red */}
                            <Typography paragraph color="text.secondary">
                                1995’te kurulan, açık artırma ve sabit fiyat modelini birleştiren dünyanın ilk online pazaryeridir.
                                Aylık 610+ milyon aktif ziyaret ve 134+ milyon aktif alıcı kitlesiyle devasa bir potansiyel sunar.
                            </Typography>
                            <Typography paragraph color="text.secondary">
                                <strong style={{ color: 'white' }}>Neden Güçlü?</strong> Niş kategoriler, koleksiyon, el yapımı, ikinci el ve vintage ürünlerde dünyanın en güçlü alıcı kitlesine sahiptir.
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Paper elevation={2} sx={{ p: 4, height: '100%', borderRadius: 4, transition: '0.3s', bgcolor: 'background.paper', '&:hover': { transform: 'translateY(-5px)', bgcolor: 'rgba(255,255,255,0.05)' } }}>
                            <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ color: '#0064D2' }}>Neden eBay Az Konuşuluyor?</Typography> {/* eBay Blue */}
                            <Typography paragraph color="text.secondary">
                                2016'da PayPal'ın Türkiye'den çekilmesiyle Türk satıcılar eBay'den uzaklaştı. Ancak <strong style={{ color: 'white' }}>2021 yılında eBay ve PayPal ayrıldı!</strong>
                            </Typography>
                            <Typography paragraph sx={{ bgcolor: 'rgba(61, 220, 89, 0.1)', p: 2, borderRadius: 2, borderLeft: '4px solid #3DDC59', color: 'text.primary' }}>
                                Artık eBay, ödemeleri direkt olarak <strong style={{ color: '#3DDC59' }}>Payoneer</strong> hesabınıza gönderiyor. Bu, Türkiye'den sorunsuz ödeme alabileceğiniz ve rekabetin az olduğu devasa bir fırsat kapısıdır.
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>

                {/* Curriculum Section */}
                <Box sx={{ mb: 6 }}>
                    <Typography variant="h4" textAlign="center" fontWeight="bold" gutterBottom sx={{ mb: 4 }}>
                        eBay Eğitim Programı Müfredatı
                    </Typography>

                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <Accordion defaultExpanded sx={{ bgcolor: 'background.paper' }}>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                    <Typography fontWeight="bold">📌 Modül 1-4: Temeller & Hesap Kurulumu</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <List dense>
                                        <ListItem><ListItemIcon><CheckCircleIcon color="primary" fontSize="small" /></ListItemIcon><ListItemText primary="eBay ve Global E-Ticaret Dünyası" /></ListItem>
                                        <ListItem><ListItemIcon><CheckCircleIcon color="primary" fontSize="small" /></ListItemIcon><ListItemText primary="Hesap Açılışı & Vergi Bilgilendirmesi" /></ListItem>
                                        <ListItem><ListItemIcon><CheckCircleIcon color="primary" fontSize="small" /></ListItemIcon><ListItemText primary="Payoneer Kurulumu & eBay Entegrasyonu" /></ListItem>
                                        <ListItem><ListItemIcon><CheckCircleIcon color="primary" fontSize="small" /></ListItemIcon><ListItemText primary="SWOT Analizi & Ürün/Rakip Araştırması" /></ListItem>
                                    </List>
                                </AccordionDetails>
                            </Accordion>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Accordion defaultExpanded sx={{ bgcolor: 'background.paper' }}>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                    <Typography fontWeight="bold">🚀 Modül 5-8: Listeleme & SEO & Prinwork</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <List dense>
                                        <ListItem><ListItemIcon><CheckCircleIcon color="primary" fontSize="small" /></ListItemIcon><ListItemText primary="Profesyonel Ürün Listeleme & HTML Şablonlar" /></ListItem>
                                        <ListItem><ListItemIcon><CheckCircleIcon color="primary" fontSize="small" /></ListItemIcon><ListItemText primary="eBay SEO: Cassini Algoritması" /></ListItem>
                                        <ListItem><ListItemIcon><CheckCircleIcon color="primary" fontSize="small" /></ListItemIcon><ListItemText primary="Ürün Fotoğraflama & Yapay Zeka Araçları" /></ListItem>
                                        <ListItem><ListItemIcon><CheckCircleIcon color="primary" fontSize="small" /></ListItemIcon><ListItemText primary="Prinwork ile Stoksuz Satış Modeli" /></ListItem>
                                    </List>
                                </AccordionDetails>
                            </Accordion>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <Accordion sx={{ bgcolor: 'background.paper' }}>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                    <Typography fontWeight="bold">📈 Modül 9-12: Lojistik & Markalaşma</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Grid container>
                                        <Grid item xs={12} md={6}>
                                            <List dense>
                                                <ListItem><ListItemIcon><CheckCircleIcon color="primary" fontSize="small" /></ListItemIcon><ListItemText primary="ShipEntegra ile Lojistik Yönetimi" /></ListItem>
                                                <ListItem><ListItemIcon><CheckCircleIcon color="primary" fontSize="small" /></ListItemIcon><ListItemText primary="Gümrük & İade Süreçleri" /></ListItem>
                                            </List>
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <List dense>
                                                <ListItem><ListItemIcon><CheckCircleIcon color="primary" fontSize="small" /></ListItemIcon><ListItemText primary="Satış Psikolojisi & Algısal Değer" /></ListItem>
                                                <ListItem><ListItemIcon><CheckCircleIcon color="primary" fontSize="small" /></ListItemIcon><ListItemText primary="Markalaşma & Ölçekleme Stratejileri" /></ListItem>
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
                    <SchoolIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
                    <Typography variant="h4" fontWeight="bold" gutterBottom>
                        Global Sahnede Yerinizi Alın
                    </Typography>
                    <Typography variant="h6" color="text.secondary" sx={{ mb: 4, maxWidth: 600, mx: 'auto' }}>
                        eBay ile döviz geliri elde etmek, marka kurmak ve e-ihracat dünyasına adım atmak için eğitim paketlerimizi inceleyin.
                    </Typography>
                    <Button variant="contained" size="large" onClick={() => onNavigate('home')} sx={{ px: 6, py: 2, borderRadius: 8, fontSize: '1.2rem', fontWeight: 'bold', background: 'linear-gradient(45deg, #FB9E1B 30%, #FFB74D 90%)' }}>
                        Paketleri İncele
                    </Button>
                </Box>

            </Container>
        </Box>
    );
}
