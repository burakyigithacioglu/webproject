package com.prinwork.akademi.service;

import com.prinwork.akademi.config.PaymentProperties;
import com.prinwork.akademi.dto.CheckoutResponse;
import com.prinwork.akademi.entity.Cart;
import com.prinwork.akademi.entity.CartItem;
import com.prinwork.akademi.entity.User;
import com.prinwork.akademi.repository.CartRepository;
import com.prinwork.akademi.repository.UserRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.util.ArrayList;

@Service
public class CheckoutService {

    private final CartRepository cartRepository;
    private final UserRepository userRepository;
    private final PaymentProperties paymentProperties;

    public CheckoutService(CartRepository cartRepository,
                           UserRepository userRepository,
                           PaymentProperties paymentProperties) {
        this.cartRepository = cartRepository;
        this.userRepository = userRepository;
        this.paymentProperties = paymentProperties;
    }

    @Transactional(readOnly = true)
    public CheckoutResponse checkout(String email) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("Kullanıcı bulunamadı"));

        Cart cart = cartRepository.findByUserId(user.getId()).orElse(null);

        CheckoutResponse r = new CheckoutResponse();
        r.setIban(paymentProperties.getIban());
        r.setAccountName(paymentProperties.getAccountName());
        r.setBankName(paymentProperties.getBankName());
        r.setCurrency(paymentProperties.getCurrency());

        if (cart == null || cart.getItems().isEmpty()) {
            r.setItemCount(0);
            r.setTotalUsd(0);
            r.setItems(new ArrayList<>());
            r.setPaymentNote("Sepet boş.");
            return r;
        }

        int count = 0;
        BigDecimal totalAmount = BigDecimal.ZERO;
        var itemLines = new ArrayList<String>();

        for (CartItem ci : cart.getItems()) {
            count += ci.getQuantity();

            // YENİ KISIM: Course içinden fiyat alıyoruz
            BigDecimal price = ci.getCourse().getPrice();
            if(price == null) price = BigDecimal.ZERO;

            BigDecimal lineTotal = price.multiply(BigDecimal.valueOf(ci.getQuantity()));

            totalAmount = totalAmount.add(lineTotal);

            itemLines.add(ci.getCourse().getTitle() + " x" + ci.getQuantity() + " (" + lineTotal + " " + r.getCurrency() + ")");
        }

        r.setItemCount(count);
        r.setTotalUsd(totalAmount.doubleValue());
        r.setItems(itemLines);

        r.setPaymentNote(
                "Ödeme için " + r.getCurrency() + " tutarı havale/EFT ile gönderiniz. " +
                        "Açıklama: " + email + " - PRINWORK AKADEMI"
        );

        return r;
    }
}