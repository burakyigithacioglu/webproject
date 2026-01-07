// src/config/config.js

// Vite + proxy kullanırken en temiz yöntem:
// API istekleri: "/api" (Vite proxy -> http://localhost:8080/api)
// Görseller: "/images" (Vite proxy -> http://localhost:8080/images)
export const API_BASE_URL = "/api";
export const IMAGES_BASE_URL = "/images";

// DB'den "/images/coffee.jpg" gibi path gelirse tarayıcıda çalışır hale getirir.
// Eğer full URL gelirse (http/https) aynen döner.
export const resolveImageUrl = (pathOrUrl) => {
    if (!pathOrUrl) return "";

    if (/^https?:\/\//i.test(pathOrUrl)) {
        return pathOrUrl;
    }

    let p = pathOrUrl;
    if (!p.startsWith("/")) p = `/${p}`;

    // "/images/..." ise direkt çalışır. değilse images base'e ekleriz.
    if (p.startsWith("/images/")) return p;

    return `${IMAGES_BASE_URL}${p}`;
};
