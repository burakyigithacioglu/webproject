package com.prinwork.akademi.controller;

import com.prinwork.akademi.config.PaymentProperties;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class PaymentController {

    private final PaymentProperties paymentProperties;

    public PaymentController(PaymentProperties paymentProperties) {
        this.paymentProperties = paymentProperties;
    }

    @GetMapping("/api/payment-info")
    public Map<String, String> paymentInfo() {
        return Map.of(
                "iban", paymentProperties.getIban(),
                "accountName", paymentProperties.getAccountName(),
                "bankName", paymentProperties.getBankName(),
                "currency", paymentProperties.getCurrency()
        );
    }
}
