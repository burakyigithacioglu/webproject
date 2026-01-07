import React from 'react';
import { Container, Box, Typography, Grid, Paper, Button, List, ListItem, ListItemIcon, ListItemText, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PublicIcon from '@mui/icons-material/Public';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SchoolIcon from '@mui/icons-material/School';
import StorefrontIcon from '@mui/icons-material/Storefront';
import DomainIcon from '@mui/icons-material/Domain';

export default function ShopifyInfoPage({ onNavigate }) {
    return (
        <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', pb: 8 }}>
            {/* Hero Section */}
            <Box sx={{
                bgcolor: '#95BF47', // Shopify Green
                color: 'white',
                py: 8,
                px: 2,
                backgroundImage: 'linear-gradient(45deg, #95BF47 30%, #5E8E3E 90%)',
                textAlign: 'center'
            }}>
                <Container maxWidth="md">
                    <img src="/shopify-card.png" alt="Shopify Prinwork" style={{ maxHeight: 150, marginBottom: 20, borderRadius: 10, boxShadow: '0 4px 20px rgba(0,0,0,0.2)' }}
                        onError={(e) => { e.target.style.display = 'none'; }} />
                    <Typography variant="h3" fontWeight="bold" gutterBottom>
                        Shopify ile Kendi Markanı Yarat
                    </Typography>
                    <Typography variant="h6" sx={{ opacity: 0.9, mb: 4 }}>
                        "Sadece ürün satmak mı istiyorsun, yoksa bir marka yaratıp globalde yerini almak mı?"
                    </Typography>
                    <Button variant="contained" sx={{ bgcolor: 'white', color: '#5E8E3E', fontWeight: 'bold', px: 4, py: 1.5, fontSize: '1.1rem', '&:hover': { bgcolor: '#f0f0f0' } }} onClick={() => onNavigate('home')}>
                        Kursları İncele & Kayıt Ol
                    </Button>
                </Container>
            </Box>

            <Container maxWidth="lg" sx={{ mt: -4 }}>
                {/* Intro Stats / Why Shopify */}
                <Paper elevation={3} sx={{ p: 4, borderRadius: 4, mb: 6, bgcolor: 'background.paper' }}>
                    <Grid container spacing={4} alignItems="center">
                        <Grid item xs={12} md={6}>
                            <Typography variant="h5" color="#5E8E3E" fontWeight="bold" gutterBottom>
                                NEDEN SHOPIFY?
                            </Typography>
                            <Typography paragraph color="text.secondary">
                                Shopify, tamamen size ait bir e-ticaret mağazasıdır. Pazaryeri değil, komisyon derdi yok, sınır yok.
                                Kontrol tamamen sizde, marka sizin.
                            </Typography>
                            <List>
                                <ListItem>
                                    <ListItemIcon><DomainIcon sx={{ color: '#95BF47' }} /></ListItemIcon>
                                    <ListItemText
                                        primary={<Typography color="text.primary">Tam Kontrol</Typography>}
                                        secondary={<Typography color="text.secondary" variant="body2">Kurallar senin, tasarım senin, müşteriler senin.</Typography>}
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon><StorefrontIcon sx={{ color: '#95BF47' }} /></ListItemIcon>
                                    <ListItemText
                                        primary={<Typography color="text.primary">Marka İnşası</Typography>}
                                        secondary={<Typography color="text.secondary" variant="body2">Sadece ürün satmazsın, marka değeri inşa edersin.</Typography>}
                                    />
                                </ListItem>
                            </List>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box sx={{ bgcolor: 'rgba(149, 191, 71, 0.1)', p: 3, borderRadius: 2, border: '1px solid rgba(149, 191, 71, 0.3)' }}>
                                <Typography variant="h6" gutterBottom fontWeight="bold" color="#5E8E3E">Avantajları</Typography>
                                <List dense>
                                    <ListItem><ListItemIcon><CheckCircleIcon color="success" fontSize="small" /></ListItemIcon><ListItemText primary="Pazaryeri komisyonu yok (%1 civarı)" /></ListItem>
                                    <ListItem><ListItemIcon><CheckCircleIcon color="success" fontSize="small" /></ListItemIcon><ListItemText primary="Tüm trafik ve data size ait" /></ListItem>
                                    <ListItem><ListItemIcon><CheckCircleIcon color="success" fontSize="small" /></ListItemIcon><ListItemText primary="Google, Meta, TikTok reklam entegrasyonları" /></ListItem>
                                    <ListItem><ListItemIcon><CheckCircleIcon color="success" fontSize="small" /></ListItemIcon><ListItemText primary="Dropshipping & POD & Dijital Ürün imkanı" /></ListItem>
                                    <ListItem><ListItemIcon><CheckCircleIcon color="success" fontSize="small" /></ListItemIcon><ListItemText primary="Upsell & E-mail Marketing otomasyonları" /></ListItem>
                                </List>
                            </Box>
                        </Grid>
                    </Grid>
                </Paper>

                {/* Detailed Info Cards */}
                <Grid container spacing={4} sx={{ mb: 6 }}>
                    <Grid item xs={12} md={6}>
                        <Paper elevation={2} sx={{ p: 4, height: '100%', borderRadius: 4, bgcolor: 'background.paper' }}>
                            <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ color: '#5E8E3E' }}>Shopify Nedir?</Typography>
                            <Typography paragraph color="text.secondary">
                                Shopify, kendi markanızı kurarak satış yapabileceğiniz, tamamen size ait kişisel e-ticaret altyapısıdır.
                            </Typography>
                            <Typography paragraph color="text.secondary">
                                <strong style={{ color: 'white' }}>Dijital Dükkan + Marka Merkezi:</strong> Bir pazaryerine bağlı kalmadan, kendi kurallarınızla büyüyebileceğiniz gerçek bir sıçrama noktasıdır.
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Paper elevation={2} sx={{ p: 4, height: '100%', borderRadius: 4, bgcolor: 'background.paper' }}>
                            <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ color: '#2E7D32' }}>Pazaryeri vs Shopify</Typography>
                            <Typography paragraph color="text.secondary">
                                Pazaryerlerinde kalıp kurallara uymak zorunda kalırsınız. Shopify'da ise kuralları siz yazarsınız.
                            </Typography>
                            <Typography paragraph sx={{ bgcolor: 'rgba(251, 192, 45, 0.1)', p: 2, borderRadius: 2, borderLeft: '4px solid #FBC02D', color: 'text.primary' }}>
                                "Bir gün markam olacak" demeyi bırakıp, bugün kurmaya başlayın for global free trade.
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>

                {/* Curriculum Section */}
                <Box sx={{ mb: 6 }}>
                    <Typography variant="h4" textAlign="center" fontWeight="bold" gutterBottom sx={{ mb: 4 }}>
                        Shopify Eğitim Programı Müfredatı
                    </Typography>

                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <Accordion defaultExpanded sx={{ bgcolor: 'background.paper' }}>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                    <Typography fontWeight="bold">📌 Temeller & Mağaza Kurulumu</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <List dense>
                                        <ListItem><ListItemIcon><CheckCircleIcon sx={{ color: '#95BF47' }} fontSize="small" /></ListItemIcon><ListItemText primary="Shopify Paneli & Plan Seçimi" /></ListItem>
                                        <ListItem><ListItemIcon><CheckCircleIcon sx={{ color: '#95BF47' }} fontSize="small" /></ListItemIcon><ListItemText primary="Tema Kurulumu & Özelleştirme (PageFly)" /></ListItem>
                                        <ListItem><ListItemIcon><CheckCircleIcon sx={{ color: '#95BF47' }} fontSize="small" /></ListItemIcon><ListItemText primary="Domain & Kurumsal Mail Entegrasyonu" /></ListItem>
                                        <ListItem><ListItemIcon><CheckCircleIcon sx={{ color: '#95BF47' }} fontSize="small" /></ListItemIcon><ListItemText primary="Ödeme Altyapıları & Sanal POS Kurulumu" /></ListItem>
                                    </List>
                                </AccordionDetails>
                            </Accordion>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Accordion defaultExpanded sx={{ bgcolor: 'background.paper' }}>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                    <Typography fontWeight="bold">🔎 Ürün & Uygulamalar</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <List dense>
                                        <ListItem><ListItemIcon><CheckCircleIcon sx={{ color: '#95BF47' }} fontSize="small" /></ListItemIcon><ListItemText primary="Ürün Araştırması & Rakip Analizi" /></ListItem>
                                        <ListItem><ListItemIcon><CheckCircleIcon sx={{ color: '#95BF47' }} fontSize="small" /></ListItemIcon><ListItemText primary="Upsell, Cross-sell & Bundle Uygulamaları" /></ListItem>
                                        <ListItem><ListItemIcon><CheckCircleIcon sx={{ color: '#95BF47' }} fontSize="small" /></ListItemIcon><ListItemText primary="Mail Marketing & Otomasyonlar" /></ListItem>
                                        <ListItem><ListItemIcon><CheckCircleIcon sx={{ color: '#95BF47' }} fontSize="small" /></ListItemIcon><ListItemText primary="Yapay Zeka ile İçerik/Görsel Üretimi" /></ListItem>
                                    </List>
                                </AccordionDetails>
                            </Accordion>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <Accordion sx={{ bgcolor: 'background.paper' }}>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                    <Typography fontWeight="bold">🚀 Reklam & Pazarlama (Meta & Google)</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Grid container>
                                        <Grid item xs={12} md={6}>
                                            <List dense>
                                                <ListItem><ListItemIcon><CheckCircleIcon sx={{ color: '#95BF47' }} fontSize="small" /></ListItemIcon><ListItemText primary="Meta (Facebook/Instagram) Reklam Kurguları" /></ListItem>
                                                <ListItem><ListItemIcon><CheckCircleIcon sx={{ color: '#95BF47' }} fontSize="small" /></ListItemIcon><ListItemText primary="Business Manager & Pixel Kurulumu" /></ListItem>
                                                <ListItem><ListItemIcon><CheckCircleIcon sx={{ color: '#95BF47' }} fontSize="small" /></ListItemIcon><ListItemText primary="Hedef Kitle & Retargeting Stratejileri" /></ListItem>
                                            </List>
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <List dense>
                                                <ListItem><ListItemIcon><CheckCircleIcon sx={{ color: '#95BF47' }} fontSize="small" /></ListItemIcon><ListItemText primary="Google Ads (Arama & Alışveriş) Kurulumu" /></ListItem>
                                                <ListItem><ListItemIcon><CheckCircleIcon sx={{ color: '#95BF47' }} fontSize="small" /></ListItemIcon><ListItemText primary="Dönüşüm Takibi & Optimizasyon" /></ListItem>
                                                <ListItem><ListItemIcon><CheckCircleIcon sx={{ color: '#95BF47' }} fontSize="small" /></ListItemIcon><ListItemText primary="Sosyal Medya İçerik & Influencer Stratejileri" /></ListItem>
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
                    <SchoolIcon sx={{ fontSize: 60, color: '#5E8E3E', mb: 2 }} />
                    <Typography variant="h4" fontWeight="bold" gutterBottom>
                        Markanızı İnşa Edin
                    </Typography>
                    <Typography variant="h6" color="text.secondary" sx={{ mb: 4, maxWidth: 600, mx: 'auto' }}>
                        Global e-ticaret dünyasında kendi kurallarınızla oynamak için Shopify eğitimlerimize katılın.
                    </Typography>
                    <Button variant="contained" size="large" onClick={() => onNavigate('home')} sx={{ px: 6, py: 2, borderRadius: 8, fontSize: '1.2rem', fontWeight: 'bold', bgcolor: '#95BF47', '&:hover': { bgcolor: '#7DA03B' } }}>
                        Paketleri İncele
                    </Button>
                </Box>
            </Container>
        </Box>
    );
}
