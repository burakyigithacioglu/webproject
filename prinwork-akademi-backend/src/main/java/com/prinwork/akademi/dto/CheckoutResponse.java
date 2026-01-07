package com.prinwork.akademi.dto;

import java.util.List;

public class CheckoutResponse {

    private String iban;
    private String accountName;
    private String bankName;
    private String currency;

    private double unitPriceUsd;
    private int itemCount;
    private double totalUsd;

    private String paymentNote;
    private List<String> items;

    public String getIban() { return iban; }
    public void setIban(String iban) { this.iban = iban; }

    public String getAccountName() { return accountName; }
    public void setAccountName(String accountName) { this.accountName = accountName; }

    public String getBankName() { return bankName; }
    public void setBankName(String bankName) { this.bankName = bankName; }

    public String getCurrency() { return currency; }
    public void setCurrency(String currency) { this.currency = currency; }

    public double getUnitPriceUsd() { return unitPriceUsd; }
    public void setUnitPriceUsd(double unitPriceUsd) { this.unitPriceUsd = unitPriceUsd; }

    public int getItemCount() { return itemCount; }
    public void setItemCount(int itemCount) { this.itemCount = itemCount; }

    public double getTotalUsd() { return totalUsd; }
    public void setTotalUsd(double totalUsd) { this.totalUsd = totalUsd; }

    public String getPaymentNote() { return paymentNote; }
    public void setPaymentNote(String paymentNote) { this.paymentNote = paymentNote; }

    public List<String> getItems() { return items; }
    public void setItems(List<String> items) { this.items = items; }
}
