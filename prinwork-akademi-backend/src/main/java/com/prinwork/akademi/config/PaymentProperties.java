package com.prinwork.akademi.config;

import org.springframework.boot.context.properties.ConfigurationProperties;

@ConfigurationProperties(prefix = "prinwork.payment")
public class PaymentProperties {
    private String iban;
    private String accountName;
    private String bankName;
    private String currency;

    public String getIban() { return iban; }
    public void setIban(String iban) { this.iban = iban; }

    public String getAccountName() { return accountName; }
    public void setAccountName(String accountName) { this.accountName = accountName; }

    public String getBankName() { return bankName; }
    public void setBankName(String bankName) { this.bankName = bankName; }

    public String getCurrency() { return currency; }
    public void setCurrency(String currency) { this.currency = currency; }
}
