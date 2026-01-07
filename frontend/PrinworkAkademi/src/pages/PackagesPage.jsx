import React, { useEffect, useState } from 'react';
import api from '../api/api';
import { Card, CardContent, CardMedia, Typography, Button, Container, Box, Tabs, Tab, Chip } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PersonIcon from '@mui/icons-material/Person';

import { resolveImageUrl } from '../config/config';

export default function PackagesPage({ onAddToCart, onNavigate }) {
    const [packages, setPackages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState('ALL');

    useEffect(() => {
        loadPackages();
    }, []);

    const loadPackages = async () => {
        setLoading(true);
        try {
            // Fetch all packages initially, filtering will be done client-side or we could fetch by category
            const data = await api.getPackages({});
            setPackages(data);
        } catch (error) {
            console.error("Failed to load packages", error);
        } finally {
            setLoading(false);
        }
    };

    const handleTabChange = (event, newValue) => {
        setSelectedCategory(newValue);
    };

    // Filter packages based on selected tab
    const filteredPackages = selectedCategory === 'ALL'
        ? packages
        : selectedCategory === 'VIDEO'
            ? packages.filter(pkg => ['EBAY', 'ETSY', 'AMAZON', 'SHOPIFY'].includes(pkg.marketplace))
            : packages.filter(pkg => pkg.marketplace === selectedCategory || pkg.trainingType === selectedCategory);

    // Mock categories for tabs - mapping to marketplaces/types for demo
    const categories = [
        { label: 'ALL', value: 'ALL' },
        { label: 'AMAZON', value: 'AMAZON' },
        { label: 'ETSY', value: 'ETSY' },
        { label: 'SHOPIFY', value: 'SHOPIFY' },
        { label: 'EBAY', value: 'EBAY' },
        { label: 'VIDEO', value: 'VIDEO' },
    ];

    if (loading) return <Container><Typography sx={{ mt: 4 }}>Loading packages...</Typography></Container>;

    return (
        <Container maxWidth={false} sx={{ mt: 4, maxWidth: '1440px' }}>
            {/* Header Section */}
            <Box sx={{ mb: 4 }}>
                <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
                    Our Online Courses
                </Typography>

                <Tabs
                    value={selectedCategory}
                    onChange={handleTabChange}
                    textColor="primary"
                    indicatorColor="primary"
                    variant="scrollable"
                    scrollButtons="auto"
                    sx={{
                        '& .MuiTab-root': { fontWeight: 'bold', fontSize: '0.9rem' }
                    }}
                >
                    {categories.map((cat) => (
                        <Tab key={cat.value} label={cat.label} value={cat.value} />
                    ))}
                </Tabs>
            </Box>

            <Box sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 3,
                justifyContent: 'flex-start'
            }}>
                {filteredPackages.map((pkg) => {
                    const isEbay = pkg.marketplace === 'EBAY';
                    const isEtsy = pkg.marketplace === 'ETSY';
                    const isShopify = pkg.marketplace === 'SHOPIFY';
                    const isAmazon = pkg.marketplace === 'AMAZON';

                    let displayImage = resolveImageUrl(pkg.imageUrl) || "https://via.placeholder.com/400x250";
                    if (isEbay) displayImage = "/ebay-card.png";
                    if (isEtsy) displayImage = "/etsy-card.png";
                    if (isShopify) displayImage = "/shopify-card.png";
                    if (isAmazon) displayImage = "/amazon-card.png";

                    // YouTube playlist URLs for each platform
                    const youtubeLinks = {
                        EBAY: 'https://www.youtube.com/playlist?list=PLF-DWamEMyNFjl_nBaBom3Gynn-R0j45O',
                        ETSY: 'https://www.youtube.com/playlist?list=PLF-DWamEMyNFxbRZAG9w-Bhkgbh1VQDqB',
                        AMAZON: 'https://www.youtube.com/playlist?list=PLF-DWamEMyNHsjjIFZSfE-RJdvw22khcl',
                        SHOPIFY: 'https://www.youtube.com/playlist?list=PLF-DWamEMyNF_FqCJxSP_jN0brgVaxxGR'
                    };

                    const handleCardClick = () => {
                        // If VIDEO tab is selected, open YouTube playlist
                        if (selectedCategory === 'VIDEO' && isSpecialCard) {
                            const marketplace = pkg.marketplace;
                            if (youtubeLinks[marketplace]) {
                                window.open(youtubeLinks[marketplace], '_blank');
                                return;
                            }
                        }
                        // Otherwise navigate to info pages
                        if (isEbay) onNavigate('ebay-info');
                        if (isEtsy) onNavigate('etsy-info');
                        if (isShopify) onNavigate('shopify-info');
                        if (isAmazon) onNavigate('amazon-info');
                    };

                    const isSpecialCard = isEbay || isEtsy || isShopify || isAmazon;

                    let cardBgColor = 'transparent';
                    if (isEbay) cardBgColor = '#FB9E1B';
                    if (isEtsy) cardBgColor = '#F56400';
                    if (isShopify) cardBgColor = '#95BF47';
                    if (isAmazon) cardBgColor = '#232F3E';

                    return (
                        <Card key={pkg.id} sx={{
                            width: 'calc((100% - 48px) / 3)', // 1/3 minus gap (24px * 2 gaps)
                            minWidth: '280px',
                            display: 'flex',
                            flexDirection: 'column',
                            borderRadius: 4,
                            boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                            transition: 'transform 0.2s',
                            '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 8px 24px rgba(0,0,0,0.1)' },
                            '@media (max-width: 900px)': {
                                width: 'calc((100% - 24px) / 2)' // 2 columns on tablet
                            },
                            '@media (max-width: 600px)': {
                                width: '100%' // 1 column on mobile
                            },
                            cursor: isSpecialCard ? 'pointer' : 'default'
                        }}
                            onClick={handleCardClick}
                        >
                            <Box sx={{ position: 'relative' }}>
                                <CardMedia
                                    component="img"
                                    height="220"
                                    image={displayImage}
                                    alt={pkg.title}
                                    sx={{ objectFit: isSpecialCard ? 'contain' : 'cover', p: isSpecialCard ? 2 : 0, bgcolor: cardBgColor }}
                                    onError={(e) => {
                                        if (isSpecialCard) e.target.style.opacity = 0.5; // Visual cue if missing
                                    }}
                                />
                                <Chip
                                    label={`$${pkg.price || 0}`}
                                    color="primary"
                                    sx={{
                                        position: 'absolute',
                                        bottom: 16,
                                        left: 16,
                                        fontWeight: 'bold',
                                        fontSize: '1rem'
                                    }}
                                />
                            </Box>

                            <CardContent sx={{ flexGrow: 1, pt: 3, display: 'flex', flexDirection: 'column' }}>
                                <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                                    {pkg.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                                    Lecturer <Box component="span" sx={{ color: 'secondary.main', fontWeight: 'bold' }}>Admin</Box> in <Box component="span" sx={{ color: 'secondary.main' }}>Creative Design</Box>
                                </Typography>

                                <Typography variant="body2" color="text.secondary" sx={{ mb: 2, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                                    {pkg.description}
                                </Typography>

                                {isSpecialCard && (
                                    <Button
                                        size="small"
                                        sx={{ mb: 2, alignSelf: 'start', fontWeight: 'bold' }}
                                        onClick={(e) => {
                                            e.stopPropagation(); // prevent card click
                                            handleCardClick();
                                        }}
                                    >
                                        Detayları İncele →
                                    </Button>
                                )}

                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: 'text.secondary', fontSize: '0.85rem', mt: 'auto', borderTop: '1px solid rgba(255,255,255,0.1)', pt: 2, width: '100%' }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <PersonIcon sx={{ fontSize: 16, mr: 0.5 }} />
                                        2006
                                    </Box>
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <AccessTimeIcon sx={{ fontSize: 16, mr: 0.5 }} />
                                        12h 28m
                                    </Box>
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <MenuBookIcon sx={{ fontSize: 16, mr: 0.5 }} />
                                        Lectures
                                    </Box>
                                </Box>
                            </CardContent>
                            <Box sx={{ p: 2, pt: 0 }}>
                                <Button
                                    variant="outlined"
                                    fullWidth
                                    color="primary"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        onAddToCart(pkg.id);
                                    }}
                                    sx={{ borderRadius: 2, textTransform: 'none', fontWeight: 'bold' }}
                                >
                                    Add to Cart
                                </Button>
                            </Box>
                        </Card>
                    );
                })}
            </Box>
        </Container>
    );
}
