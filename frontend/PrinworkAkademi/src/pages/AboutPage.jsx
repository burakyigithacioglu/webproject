import React from 'react';
import { Container, Box, Typography, Grid, Paper } from '@mui/material';
import BusinessIcon from '@mui/icons-material/Business';
import PublicIcon from '@mui/icons-material/Public';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

export default function AboutPage() {
    return (
        <Container maxWidth="xl" sx={{ mt: 8, mb: 12, px: { xs: 2, sm: 3, md: 4 } }}>
            {/* Hero Section */}
            <Box sx={{ textAlign: 'center', mb: 8 }}>
                <Typography variant="h3" component="h1" fontWeight="bold" gutterBottom>
                    Hakkımızda
                </Typography>
                <Typography variant="h6" color="text.secondary" sx={{ maxWidth: '800px', mx: 'auto', mt: 3 }}>
                    Global e-ticaret pazarında başarınız için güvenilir iş ortağınız
                </Typography>
            </Box>

            {/* Company Introduction */}
            <Paper elevation={0} sx={{ p: 6, mb: 6, borderRadius: 4, bgcolor: 'background.paper', border: '1px solid rgba(255,255,255,0.1)' }}>
                <Typography variant="h4" fontWeight="bold" gutterBottom>
                    Prinwork Akademi
                </Typography>
                <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'text.secondary' }}>
                    Prinwork Akademi, global e-ticaret platformlarında faaliyet gösteren işletmelere yönelik kapsamlı eğitim ve danışmanlık hizmetleri sunan öncü bir kuruluştur. Amazon, eBay, Etsy ve Shopify gibi dünyanın en büyük e-ticaret platformlarında başarılı olmak isteyen girişimcilere ve işletmelere profesyonel rehberlik sağlıyoruz.
                </Typography>
                <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'text.secondary' }}>
                    Sektörde uzun yıllara dayanan deneyimimiz ve uzman kadromuzla, e-ihracat süreçlerinin tüm aşamalarında müşterilerimize stratejik destek sunuyoruz. Misyonumuz, Türk girişimcilerin global pazarlarda rekabet gücünü artırarak, sürdürülebilir ve karlı işletmeler kurmalarına katkı sağlamaktır.
                </Typography>
            </Paper>

            {/* Core Values */}
            <Typography variant="h4" fontWeight="bold" textAlign="center" sx={{ mb: 6 }}>
                Değerlerimiz
            </Typography>
            <Box sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 3,
                mb: 8,
                justifyContent: 'center'
            }}>
                <Box sx={{
                    flex: { xs: '1 1 100%', sm: '1 1 calc(50% - 12px)', lg: '1 1 calc(25% - 18px)' },
                    minWidth: { xs: '100%', sm: 'calc(50% - 12px)', lg: 'calc(25% - 18px)' },
                    maxWidth: { xs: '100%', sm: 'calc(50% - 12px)', lg: 'calc(25% - 18px)' }
                }}>
                    <Paper elevation={0} sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', borderRadius: 4, bgcolor: 'background.paper', border: '1px solid rgba(255,255,255,0.1)', transition: 'transform 0.2s', '&:hover': { transform: 'translateY(-4px)' } }}>
                        <BusinessIcon sx={{ fontSize: 60, color: '#F56400', mb: 2 }} />
                        <Typography variant="h6" fontWeight="bold" gutterBottom>
                            Profesyonellik
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ flexGrow: 1 }}>
                            Kurumsal standartlarda hizmet anlayışı ile müşterilerimize en yüksek kalitede eğitim ve danışmanlık sunuyoruz.
                        </Typography>
                    </Paper>
                </Box>
                <Box sx={{
                    flex: { xs: '1 1 100%', sm: '1 1 calc(50% - 12px)', lg: '1 1 calc(25% - 18px)' },
                    minWidth: { xs: '100%', sm: 'calc(50% - 12px)', lg: 'calc(25% - 18px)' },
                    maxWidth: { xs: '100%', sm: 'calc(50% - 12px)', lg: 'calc(25% - 18px)' }
                }}>
                    <Paper elevation={0} sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', borderRadius: 4, bgcolor: 'background.paper', border: '1px solid rgba(255,255,255,0.1)', transition: 'transform 0.2s', '&:hover': { transform: 'translateY(-4px)' } }}>
                        <PublicIcon sx={{ fontSize: 60, color: '#F56400', mb: 2 }} />
                        <Typography variant="h6" fontWeight="bold" gutterBottom>
                            Global Vizyon
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ flexGrow: 1 }}>
                            Dünya pazarlarındaki güncel trendleri takip ederek, müşterilerimizi uluslararası başarıya hazırlıyoruz.
                        </Typography>
                    </Paper>
                </Box>
                <Box sx={{
                    flex: { xs: '1 1 100%', sm: '1 1 calc(50% - 12px)', lg: '1 1 calc(25% - 18px)' },
                    minWidth: { xs: '100%', sm: 'calc(50% - 12px)', lg: 'calc(25% - 18px)' },
                    maxWidth: { xs: '100%', sm: 'calc(50% - 12px)', lg: 'calc(25% - 18px)' }
                }}>
                    <Paper elevation={0} sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', borderRadius: 4, bgcolor: 'background.paper', border: '1px solid rgba(255,255,255,0.1)', transition: 'transform 0.2s', '&:hover': { transform: 'translateY(-4px)' } }}>
                        <TrendingUpIcon sx={{ fontSize: 60, color: '#F56400', mb: 2 }} />
                        <Typography variant="h6" fontWeight="bold" gutterBottom>
                            Sürekli Gelişim
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ flexGrow: 1 }}>
                            E-ticaret ekosistemindeki değişimleri yakından takip ederek, eğitim içeriklerimizi sürekli güncel tutuyoruz.
                        </Typography>
                    </Paper>
                </Box>
                <Box sx={{
                    flex: { xs: '1 1 100%', sm: '1 1 calc(50% - 12px)', lg: '1 1 calc(25% - 18px)' },
                    minWidth: { xs: '100%', sm: 'calc(50% - 12px)', lg: 'calc(25% - 18px)' },
                    maxWidth: { xs: '100%', sm: 'calc(50% - 12px)', lg: 'calc(25% - 18px)' }
                }}>
                    <Paper elevation={0} sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', borderRadius: 4, bgcolor: 'background.paper', border: '1px solid rgba(255,255,255,0.1)', transition: 'transform 0.2s', '&:hover': { transform: 'translateY(-4px)' } }}>
                        <SupportAgentIcon sx={{ fontSize: 60, color: '#F56400', mb: 2 }} />
                        <Typography variant="h6" fontWeight="bold" gutterBottom>
                            Müşteri Odaklılık
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ flexGrow: 1 }}>
                            Her müşterimizin ihtiyaçlarına özel çözümler üreterek, başarılarına ortak olmayı hedefliyoruz.
                        </Typography>
                    </Paper>
                </Box>
            </Box>

            {/* Services Overview */}
            <Paper elevation={0} sx={{ p: 6, borderRadius: 4, bgcolor: 'background.paper', border: '1px solid rgba(255,255,255,0.1)' }}>
                <Typography variant="h4" fontWeight="bold" gutterBottom>
                    Hizmetlerimiz
                </Typography>
                <Grid container spacing={3} sx={{ mt: 2, width: '100%' }}>
                    <Grid item xs={12} md={6}>
                        <Box sx={{ mb: 3 }}>
                            <Typography variant="h6" fontWeight="bold" gutterBottom color="primary">
                                E-İhracat Eğitimleri
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Amazon, eBay, Etsy ve Shopify platformlarında satış yapmak isteyen girişimciler için kapsamlı video eğitim serileri sunuyoruz. Hesap açılışından ürün listelemeye, pazarlama stratejilerinden müşteri yönetimine kadar tüm süreçleri detaylı şekilde ele alıyoruz.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box sx={{ mb: 3 }}>
                            <Typography variant="h6" fontWeight="bold" gutterBottom color="primary">
                                Danışmanlık Hizmetleri
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                E-ticaret işletmenizi bir üst seviyeye taşımak için uzman kadromuzla birebir danışmanlık hizmeti veriyoruz. Pazar analizi, rekabet stratejileri ve operasyonel optimizasyon konularında profesyonel destek sağlıyoruz.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box sx={{ mb: 3 }}>
                            <Typography variant="h6" fontWeight="bold" gutterBottom color="primary">
                                Platform Entegrasyonları
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lojistik, ödeme sistemleri ve stok yönetimi gibi kritik süreçlerde güvenilir iş ortaklarımızla entegre çözümler sunarak, operasyonel verimliliğinizi artırıyoruz.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box sx={{ mb: 3 }}>
                            <Typography variant="h6" fontWeight="bold" gutterBottom color="primary">
                                Sürekli Destek
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Eğitimlerimizi tamamlayan müşterilerimize, e-ticaret yolculuklarında karşılaştıkları zorluklarda destek olmak için sürekli iletişim kanalları sağlıyoruz.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Paper>

            {/* Call to Action */}
            <Box sx={{ textAlign: 'center', mt: 8, p: 6, borderRadius: 4, bgcolor: 'rgba(245, 100, 0, 0.1)', border: '2px solid #F56400' }}>
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                    Global E-Ticaret Yolculuğunuza Bugün Başlayın
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                    Prinwork Akademi ile dünya pazarlarında yerinizi alın. Profesyonel eğitimlerimiz ve uzman desteğimizle başarıya ulaşın.
                </Typography>
            </Box>
        </Container>
    );
}
