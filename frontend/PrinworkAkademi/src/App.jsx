import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import PackagesPage from "./pages/PackagesPage";
import CartPage from "./pages/CartPage";
import api from "./api/api";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const theme = createTheme({
  palette: {
    mode: 'dark', // Switch to dark mode
    primary: {
      main: '#FB9E1B', // Prinwork Orange
    },
    secondary: {
      main: '#3DDC59', // Green
    },
    background: {
      default: '#121212', // Very dark grey/black
      paper: '#1E1E1E', // Slightly lighter for cards/papers
    },
    text: {
      primary: '#ffffff',
      secondary: '#b0b0b0',
    },
  },
  typography: {
    fontFamily: 'Inter, Arial, sans-serif', // More premium font
    allVariants: {
      color: '#ffffff',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 'bold',
          textTransform: 'none',
          borderRadius: 8,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          backgroundImage: 'none', // Remove default MUI overlay
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        }
      }
    }
  },
});

const USER_EMAIL = "test@mail.com"; // Hardcoded for demo

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import EbayInfoPage from "./pages/EbayInfoPage";
import EtsyInfoPage from "./pages/EtsyInfoPage";
import ShopifyInfoPage from "./pages/ShopifyInfoPage";
import AmazonInfoPage from "./pages/AmazonInfoPage";
import AboutPage from "./pages/AboutPage";
import Footer from "./components/Footer";

export default function App() {
  const [page, setPage] = useState('home');
  const [cartCount, setCartCount] = useState(0);
  const [user, setUser] = useState(null); // Stores user info if logged in

  useEffect(() => {
    // Check for existing token/user on mount
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      updateCartCount(JSON.parse(storedUser).email);
    } else {
      setPage('login');
    }
  }, []);

  const updateCartCount = async (email) => {
    try {
      if (!email) return;
      const cart = await api.getCart(email);
      setCartCount(cart?.items?.length || 0);
    } catch (e) {
      console.error("Failed to update cart count", e);
    }
  };

  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
    setPage('home');
    updateCartCount(userData.email);
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
    setPage('login');
  };

  const handleAddToCart = async (packageId) => {
    try {
      if (!user) {
        toast.warning("Please login first");
        setPage('login');
        return;
      }
      await api.addToCart(user.email, packageId);
      toast.success("Added to cart!");
      updateCartCount(user.email);
    } catch (e) {
      toast.error("Failed to add to cart: " + e.message);
    }
  };

  const educationDiscount = true; // TODO: Fetch from backend/profile

  // Public/Auth routes
  if (page === 'login') {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <LoginPage onLogin={handleLogin} onNavigate={setPage} />
      </ThemeProvider>
    );
  }

  if (page === 'register') {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RegisterPage onNavigate={setPage} />
      </ThemeProvider>
    );
  }

  // Protected routes
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {educationDiscount && (
        <div style={{ padding: '10px', backgroundColor: '#3DDC59', color: 'white', textAlign: 'center', fontWeight: 'bold' }}>
          🎓 Eğitim İndirimi Aktif!
        </div>
      )}
      <Navbar onNavigate={setPage} cartCount={cartCount} onLogout={handleLogout} user={user} />

      {page === 'home' && (
        <PackagesPage onAddToCart={handleAddToCart} onNavigate={setPage} />
      )}

      {page === 'ebay-info' && (
        <EbayInfoPage onNavigate={setPage} />
      )}

      {page === 'etsy-info' && (
        <EtsyInfoPage onNavigate={setPage} />
      )}

      {page === 'shopify-info' && (
        <ShopifyInfoPage onNavigate={setPage} />
      )}

      {page === 'amazon-info' && (
        <AmazonInfoPage onNavigate={setPage} />
      )}

      {page === 'cart' && (
        <CartPage email={user?.email} onCartUpdate={() => updateCartCount(user?.email)} />
      )}

      {page === 'about' && (
        <AboutPage />
      )}


      <ToastContainer position="bottom-right" autoClose={3000} />
      <Footer />
    </ThemeProvider>
  );
}
