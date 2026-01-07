package com.prinwork.akademi.controller;

import com.prinwork.akademi.dto.CartResponse;
import com.prinwork.akademi.dto.CheckoutResponse;
import com.prinwork.akademi.service.CartService;
import com.prinwork.akademi.service.CheckoutService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/cart")
public class CartController {

    private final CartService cartService;
    private final CheckoutService checkoutService;

    public CartController(CartService cartService, CheckoutService checkoutService) {
        this.cartService = cartService;
        this.checkoutService = checkoutService;
    }

    @PostMapping("/add")
    // Frontend'den 'packageId' gelse bile biz onu 'courseId' olarak alıyoruz, sorun yok.
    public CartResponse add(@RequestParam String email, @RequestParam(name = "packageId") Long courseId) {
        return cartService.addToCart(email, courseId);
    }

    @GetMapping
    public CartResponse get(@RequestParam String email) {
        return cartService.getCart(email);
    }

    @PostMapping("/clear")
    public void clear(@RequestParam String email) {
        cartService.clearCart(email);
    }

    @GetMapping("/checkout")
    public CheckoutResponse checkout(@RequestParam String email) {
        return checkoutService.checkout(email);
    }
}