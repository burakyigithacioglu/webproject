import React, { useEffect, useState } from 'react';
import api from '../api/api';
import { Container, Typography, List, ListItem, ListItemText, Button, Paper, Box, Divider, Alert, Grid, Step, StepLabel, Stepper, ListItemAvatar, Avatar, Chip, IconButton } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { toast } from 'react-toastify';

export default function CartPage({ email, onCartUpdate }) {
    const [cart, setCart] = useState(null);
    const [checkoutDetails, setCheckoutDetails] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadCart();
    }, [email]);

    const loadCart = async () => {
        setLoading(true);
        try {
            const data = await api.getCart(email);
            setCart(data);
            setCheckoutDetails(null);
        } catch (error) {
            console.error("Failed to load cart", error);
        } finally {
            setLoading(false);
        }
    };

    const handleClearCart = async () => {
        try {
            await api.clearCart(email);
            toast.success("Sepet temizlendi.");
            loadCart();
            if (onCartUpdate) onCartUpdate();
        } catch (error) {
            toast.error("Sepet temizlenemedi.");
        }
    };

    const handleCheckout = async () => {
        try {
            const data = await api.getCheckout(email);
            setCheckoutDetails(data);
        } catch (error) {
            console.error("Checkout failed", error);
            toast.error("Ödeme bilgileri alınamadı.");
        }
    };

    if (loading) return (
        <Container sx={{ mt: 10, textAlign: 'center' }}>
            <Typography variant="h6" color="text.secondary">Sepet yükleniyor...</Typography>
        </Container>
    );

    if (!cart || !cart.items || cart.items.length === 0) {
        return (
            <Container sx={{ mt: 10, textAlign: 'center', minHeight: '60vh' }}>
                <Paper elevation={0} sx={{ p: 6, bgcolor: 'background.paper', borderRadius: 4 }}>
                    <Typography variant="h4" fontWeight="bold" gutterBottom color="text.secondary">Sepetiniz Boş</Typography>
                    <Typography sx={{ mb: 4 }} color="text.secondary">E-ihracat eğitimlerimize göz atarak hemen kazanmaya başlayın.</Typography>
                    <Button variant="contained" href="/" sx={{ bgcolor: '#F56400', '&:hover': { bgcolor: '#E65100' }, px: 4, py: 1.5 }}>
                        Kursları İncele
                    </Button>
                </Paper>
            </Container>
        );
    }

    return (
        <Container maxWidth="lg" sx={{ mt: 6, mb: 12 }}>
            <Typography variant="h4" gutterBottom fontWeight="bold" sx={{ mb: 4, textAlign: 'center' }}>
                Güvenli Ödeme
            </Typography>

            <Grid container spacing={4}>
                {/* Left Column: Cart Items */}
                <Grid item xs={12} md={8}>
                    <Paper elevation={0} sx={{ p: 4, border: '1px solid rgba(255,255,255,0.1)', borderRadius: 4, mb: 4, bgcolor: 'background.paper' }}>
                        <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            Sepetim ({cart.items.length} Ürün)
                            <Button size="small" color="error" startIcon={<DeleteOutlineIcon />} onClick={handleClearCart}>
                                Temizle
                            </Button>
                        </Typography>
                        <Divider sx={{ mb: 2 }} />
                        <List>
                            {cart.items.map((item, index) => (
                                <React.Fragment key={index}>
                                    <ListItem alignItems="flex-start" sx={{ px: 0, py: 3 }}>
                                        <ListItemAvatar sx={{ mr: 2 }}>
                                            <Avatar variant="rounded" sx={{ width: 80, height: 60, bgcolor: 'rgba(255,255,255,0.05)', color: 'text.secondary' }}>
                                                <LocalOfferIcon />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={<Typography variant="h6" fontWeight="bold" sx={{ color: '#333' }}>{item.title}</Typography>}
                                            secondary={
                                                <Box sx={{ mt: 1 }}>
                                                    <Typography variant="body2" color="text.secondary">Adet: {item.quantity}</Typography>
                                                    <Chip label="Eğitim Paketi" size="small" color="primary" variant="outlined" sx={{ mt: 1, borderColor: '#F56400', color: '#F56400' }} />
                                                </Box>
                                            }
                                        />
                                    </ListItem>
                                    <Divider />
                                </React.Fragment>
                            ))}
                        </List>
                    </Paper>

                    {/* Trust Badges - Desktop */}
                    <Box sx={{ display: { xs: 'none', md: 'block' }, mt: 4 }}>
                        <Typography variant="subtitle2" color="text.secondary" textAlign="center" gutterBottom>
                            GLOBAL GÜVENLİK ORTAKLARIMIZ
                        </Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4, opacity: 0.6, filter: 'invert(1) grayscale(100%)' }}>
                            <img src="/shipentegra-logo.png" alt="ShipEntegra" style={{ height: 30 }} />
                            <img src="/prinwork-logo.png" alt="Prinwork" style={{ height: 30 }} />
                            <img src="/ocl-logo.png" alt="OCL" style={{ height: 30 }} />
                        </Box>
                    </Box>
                </Grid>

                {/* Right Column: Checkout Summary */}
                <Grid item xs={12} md={4}>
                    <Paper elevation={4} sx={{ p: 4, borderRadius: 4, bgcolor: 'background.paper', position: 'sticky', top: 100 }}>
                        <Typography variant="h6" fontWeight="bold" gutterBottom>
                            Sipariş Özeti
                        </Typography>
                        <Divider sx={{ mb: 3 }} />

                        {checkoutDetails ? (
                            <>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                                    <Typography color="text.secondary">Toplam Tutar:</Typography>
                                    <Typography variant="h5" fontWeight="bold" color="primary">
                                        ${checkoutDetails.totalPrice}
                                    </Typography>
                                </Box>

                                <Box sx={{ mt: 3, p: 2, bgcolor: 'rgba(33, 150, 243, 0.1)', borderRadius: 2, border: '1px dashed #2196f3' }}>
                                    <Typography variant="subtitle2" fontWeight="bold" color="primary" gutterBottom>
                                        Banka Bilgileri
                                    </Typography>
                                    <Typography variant="body2" sx={{ whiteSpace: 'pre-line', color: 'text.primary' }}>
                                        {checkoutDetails.bankInfo}
                                    </Typography>
                                </Box>

                                <Alert severity="info" sx={{ mt: 3, fontSize: '0.85rem' }}>
                                    Ödemenizi yukarıdaki IBAN numarasına gönderdikten sonra siparişiniz onaylanacaktır.
                                </Alert>

                                <Button
                                    fullWidth
                                    variant="contained"
                                    size="large"
                                    color="success"
                                    sx={{ mt: 3, py: 1.5, fontWeight: 'bold' }}
                                    onClick={() => toast.info('Demo: Sipariş tamamlandı!')}
                                >
                                    Siparişi Tamamla <VerifiedUserIcon sx={{ ml: 1, fontSize: 20 }} />
                                </Button>
                            </>
                        ) : (
                            <>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                                    <Typography color="text.secondary">Ara Toplam:</Typography>
                                    <Typography fontWeight="bold">-</Typography>
                                </Box>
                                <Typography variant="caption" color="text.secondary" paragraph>
                                    Ödeme adımında vergiler ve toplam tutar hesaplanacaktır.
                                </Typography>
                                <Button
                                    fullWidth
                                    variant="contained"
                                    size="large"
                                    onClick={handleCheckout}
                                    sx={{
                                        bgcolor: '#232F3E',
                                        color: 'white',
                                        py: 1.5,
                                        fontWeight: 'bold',
                                        '&:hover': { bgcolor: '#37475A' }
                                    }}
                                >
                                    Ödemeye Geç <ArrowForwardIosIcon sx={{ ml: 1, fontSize: 16 }} />
                                </Button>
                            </>
                        )}

                        <Box sx={{ mt: 4, textAlign: 'center' }}>
                            <Typography variant="caption" color="text.secondary" display="block" gutterBottom>
                                SSL Korumalı Güvenli Ödeme
                            </Typography>
                            <VerifiedUserIcon color="success" sx={{ fontSize: 32, opacity: 0.8 }} />
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
}
