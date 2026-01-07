import React from 'react';
import { Container, Box, Typography, Grid, Paper, Button, List, ListItem, ListItemIcon, ListItemText, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PublicIcon from '@mui/icons-material/Public';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SchoolIcon from '@mui/icons-material/School';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

export default function AmazonInfoPage({ onNavigate }) {
    return (
        <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', pb: 8 }}>
            {/* Hero Section */}
            <Box sx={{
                bgcolor: '#232F3E', // Amazon Dark Blue
                color: 'white',
                py: 8,
                px: 2,
                backgroundImage: 'linear-gradient(45deg, #232F3E 30%, #37475A 90%)',
                textAlign: 'center'
            }}>
                <Container maxWidth="md">
                    <img src="/amazon-card.png" alt="Amazon Prinwork" style={{ maxHeight: 150, marginBottom: 20, borderRadius: 10, boxShadow: '0 4px 20px rgba(0,0,0,0.2)' }}
                        onError={(e) => { e.target.style.display = 'none'; }} />
                    <Typography variant="h3" fontWeight="bold" gutterBottom sx={{ color: '#FF9900' }}> {/* Amazon Orange Text */}
                        Amazon Handmade ile Global Satış
                    </Typography>
                    <Typography variant="h6" sx={{ opacity: 0.9, mb: 4 }}>
                        "Dünyanın en büyük pazaryerinin sanatçı platformunda yerinizi alın!"
                    </Typography>
                    <Button variant="contained" sx={{ bgcolor: '#FF9900', color: '#232F3E', fontWeight: 'bold', px: 4, py: 1.5, fontSize: '1.1rem', '&:hover': { bgcolor: '#F08804' } }} onClick={() => onNavigate('home')}>
                        Kursları İncele & Kayıt Ol
                    </Button>
                </Container>
            </Box>

            <Container maxWidth="lg" sx={{ mt: -4 }}>
                {/* Intro Stats - Matching eBay layout */}
                <Paper elevation={3} sx={{ p: 4, borderRadius: 4, mb: 6, bgcolor: 'background.paper' }}>
                    <Grid container spacing={4} alignItems="center">
                        <Grid item xs={12} md={6}>
                            <Typography variant="h5" color="#FF9900" fontWeight="bold" gutterBottom>
                                KISACA E-İHRACAT
                            </Typography>
                            <Typography paragraph color="text.secondary">
                                Dünya nüfusu hızla artıyor ve insanların e-ticaret alışkanlığı her yıl katlanarak artıyor.
                                Şu an dünyada satılan her 4 üründen 1'i e-ticaret araçları ile gerçekleşiyor.
                            </Typography>
                            <List>
                                <ListItem>
                                    <ListItemIcon><TrendingUpIcon sx={{ color: '#FF9900' }} /></ListItemIcon>
                                    <ListItemText
                                        primary={<Typography color="text.primary">2023 E-Ticaret Hacmi: 4.4 Trilyon $</Typography>}
                                        secondary={<Typography color="text.secondary" variant="body2">2028 Öngörüsü: 7 Trilyon $</Typography>}
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon><PublicIcon sx={{ color: '#FF9900' }} /></ListItemIcon>
                                    <ListItemText
                                        primary={<Typography color="text.primary">Günlük Satış Hacmi: 20 Milyar $</Typography>}
                                        secondary={<Typography color="text.secondary" variant="body2">Amerika ve Avrupa pazarında büyük fırsat.</Typography>}
                                    />
                                </ListItem>
                            </List>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box sx={{ bgcolor: 'rgba(255, 153, 0, 0.1)', p: 3, borderRadius: 2, border: '1px solid rgba(255, 153, 0, 0.3)' }}>
                                <Typography variant="h6" gutterBottom fontWeight="bold" color="#E65100">Küresel Perakende E-Ticaret Payı</Typography>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                    <Typography color="text.primary">2015</Typography>
                                    <Typography fontWeight="bold" color="text.primary">%7</Typography>
                                </Box>
                                <Box sx={{ width: '100%', bgcolor: 'rgba(255,255,255,0.1)', height: 8, borderRadius: 4, mb: 2 }}>
                                    <Box sx={{ width: '7%', bgcolor: '#FF9900', height: '100%', borderRadius: 4 }} />
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                    <Typography color="text.primary">2023</Typography>
                                    <Typography fontWeight="bold" color="text.primary">%22</Typography>
                                </Box>
                                <Box sx={{ width: '100%', bgcolor: 'rgba(255,255,255,0.1)', height: 8, borderRadius: 4, mb: 2 }}>
                                    <Box sx={{ width: '22%', bgcolor: '#FF9900', height: '100%', borderRadius: 4 }} />
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                    <Typography color="text.primary">2025 (Hedef)</Typography>
                                    <Typography fontWeight="bold" color="text.primary">%25</Typography>
                                </Box>
                                <Box sx={{ width: '100%', bgcolor: 'rgba(255,255,255,0.1)', height: 8, borderRadius: 4 }}>
                                    <Box sx={{ width: '25%', bgcolor: '#FF9900', height: '100%', borderRadius: 4 }} />
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Paper>

                {/* What is Amazon Handmade */}
                <Grid container spacing={4} sx={{ mb: 6 }}>
                    <Grid item xs={12} md={6}>
                        <Paper elevation={2} sx={{ p: 4, height: '100%', borderRadius: 4, bgcolor: 'background.paper' }}>
                            <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ color: '#232F3E' }}>Amazon Handmade Nedir?</Typography>
                            <Typography paragraph color="text.secondary">
                                Amazon'un el yapımı ürün odaklı alt pazaryeridir. Sadece ürün yüklemek değil, marka olma yolculuğudur.
                            </Typography>
                            <Typography paragraph color="text.secondary">
                                <strong style={{ color: 'white' }}>Kabul Şartları:</strong> Ürünün tamamen el yapımı veya tasarım olması, profesyonel sunum ve doğru başvuru dosyası gerektirir.
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Paper elevation={2} sx={{ p: 4, height: '100%', borderRadius: 4, bgcolor: 'background.paper' }}>
                            <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ color: '#E65100' }}>Avantajları</Typography>
                            <List dense>
                                <ListItem><ListItemIcon><LocalShippingIcon sx={{ color: '#FF9900' }} /></ListItemIcon><ListItemText primary="FBA (Fulfillment by Amazon) ile otomatik satış & kargo" /></ListItem>
                                <ListItem><ListItemIcon><PublicIcon sx={{ color: '#FF9900' }} /></ListItemIcon><ListItemText primary="ABD & Avrupa pazarına tek panelden erişim" /></ListItem>
                                <ListItem><ListItemIcon><MonetizationOnIcon sx={{ color: '#FF9900' }} /></ListItemIcon><ListItemText primary="Prime etiketi ile müşteri güveni ve hızlı teslimat" /></ListItem>
                            </List>
                        </Paper>
                    </Grid>
                </Grid>

                {/* Curriculum Section */}
                <Box sx={{ mb: 6 }}>
                    <Typography variant="h4" textAlign="center" fontWeight="bold" gutterBottom sx={{ mb: 4 }}>
                        Amazon Handmade Eğitim Programı
                    </Typography>

                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <Accordion defaultExpanded sx={{ bgcolor: 'background.paper' }}>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                    <Typography fontWeight="bold">📌 1. Bölüm: Analiz & Listeleme</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <List dense>
                                        <ListItem><ListItemIcon><CheckCircleIcon sx={{ color: '#FF9900' }} fontSize="small" /></ListItemIcon><ListItemText primary="Seller Central Paneli & Başvuru Süreci" /></ListItem>
                                        <ListItem><ListItemIcon><CheckCircleIcon sx={{ color: '#FF9900' }} fontSize="small" /></ListItemIcon><ListItemText primary="Ürün & Rakip Analizi (Helium 10, Jungle Scout)" /></ListItem>
                                        <ListItem><ListItemIcon><CheckCircleIcon sx={{ color: '#FF9900' }} fontSize="small" /></ListItemIcon><ListItemText primary="SEO Odaklı Liste Yazımı (Başlık, Bullet Points)" /></ListItem>
                                        <ListItem><ListItemIcon><CheckCircleIcon sx={{ color: '#FF9900' }} fontSize="small" /></ListItemIcon><ListItemText primary="A+ Content & Marka Hikayesi Oluşturma" /></ListItem>
                                    </List>
                                </AccordionDetails>
                            </Accordion>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Accordion defaultExpanded sx={{ bgcolor: 'background.paper' }}>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                    <Typography fontWeight="bold">🚀 2. Bölüm: Reklam & Süreç</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <List dense>
                                        <ListItem><ListItemIcon><CheckCircleIcon sx={{ color: '#FF9900' }} fontSize="small" /></ListItemIcon><ListItemText primary="Amazon PPC (Reklam) Temelleri & Stratejileri" /></ListItem>
                                        <ListItem><ListItemIcon><CheckCircleIcon sx={{ color: '#FF9900' }} fontSize="small" /></ListItemIcon><ListItemText primary="Kampanya Kurulumu & Optimizasyon" /></ListItem>
                                        <ListItem><ListItemIcon><CheckCircleIcon sx={{ color: '#FF9900' }} fontSize="small" /></ListItemIcon><ListItemText primary="Kişiselleştirme (Customization) Paneli" /></ListItem>
                                        <ListItem><ListItemIcon><CheckCircleIcon sx={{ color: '#FF9900' }} fontSize="small" /></ListItemIcon><ListItemText primary="FBA Gönderim Planı & Stok Yönetimi" /></ListItem>
                                    </List>
                                </AccordionDetails>
                            </Accordion>
                        </Grid>
                    </Grid>
                </Box>

                {/* Call to Action */}
                <Box sx={{ textAlign: 'center', py: 6, bgcolor: 'background.paper', borderRadius: 4, boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
                    <SchoolIcon sx={{ fontSize: 60, color: '#232F3E', mb: 2 }} />
                    <Typography variant="h4" fontWeight="bold" gutterBottom>
                        Amerika ve Avrupa'ya Açılın
                    </Typography>
                    <Typography variant="h6" color="text.secondary" sx={{ mb: 4, maxWidth: 600, mx: 'auto' }}>
                        Amazon Handmade ile dolar kazanmaya başlamak için şimdi eğitime katılın.
                    </Typography>
                    <Button variant="contained" size="large" onClick={() => onNavigate('home')} sx={{ px: 6, py: 2, borderRadius: 8, fontSize: '1.2rem', fontWeight: 'bold', bgcolor: '#FF9900', color: '#232F3E', '&:hover': { bgcolor: '#F08804' } }}>
                        Paketleri İncele
                    </Button>
                </Box>
            </Container>
        </Box>
    );
}
