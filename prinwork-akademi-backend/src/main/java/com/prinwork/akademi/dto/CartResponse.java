package com.prinwork.akademi.dto;

import java.util.List;

public class CartResponse {

    private String email;
    private int itemCount;
    private List<CartItemLine> items;

    public static class CartItemLine {
        private Long packageId;
        private String title;
        private int quantity;

        public Long getPackageId() { return packageId; }
        public void setPackageId(Long packageId) { this.packageId = packageId; }

        public String getTitle() { return title; }
        public void setTitle(String title) { this.title = title; }

        public int getQuantity() { return quantity; }
        public void setQuantity(int quantity) { this.quantity = quantity; }
    }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public int getItemCount() { return itemCount; }
    public void setItemCount(int itemCount) { this.itemCount = itemCount; }

    public List<CartItemLine> getItems() { return items; }
    public void setItems(List<CartItemLine> items) { this.items = items; }
}
