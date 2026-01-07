import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { IconButton } from '@mui/material';

export default function Navbar({ onNavigate, cartCount, user, onLogout }) {
    return (
        <AppBar position="static" sx={{ bgcolor: 'background.paper', borderBottom: '1px solid rgba(255,255,255,0.05)' }} elevation={0}>
            <Toolbar>
                {/* Logo Area */}
                <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1, cursor: 'pointer' }} onClick={() => onNavigate('home')}>
                    <img src="/logo.png" alt="Logo" style={{ height: 40, marginRight: 10, backgroundColor: 'white', borderRadius: '50%' }} />
                    <Typography variant="h6" component="div">
                        Prinwork Akademi
                    </Typography>
                </Box>

                {/* Menu Items */}
                <Button color="inherit" onClick={() => onNavigate('home')}>Packages</Button>
                <Button color="inherit" onClick={() => onNavigate('about')}>Hakkımızda</Button>

                <IconButton color="inherit" onClick={() => onNavigate('cart')}>
                    <Badge badgeContent={cartCount} color="secondary">
                        <ShoppingCartIcon />
                    </Badge>
                    <Typography variant="button" sx={{ ml: 1 }}>
                        CART
                    </Typography>
                </IconButton>

                {user && (
                    <Box sx={{ ml: 2, display: 'flex', alignItems: 'center' }}>
                        <Typography variant="caption" sx={{ mr: 1 }}>
                            {user.email}
                        </Typography>
                        <Button color="secondary" variant="contained" size="small" onClick={onLogout}>
                            Logout
                        </Button>
                    </Box>
                )}
            </Toolbar>
        </AppBar>
    );
}
