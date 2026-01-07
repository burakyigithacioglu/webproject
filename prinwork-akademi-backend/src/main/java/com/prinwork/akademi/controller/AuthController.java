package com.prinwork.akademi.controller;

import com.prinwork.akademi.dto.LoginRequest;
import com.prinwork.akademi.dto.RegisterRequest;
import com.prinwork.akademi.entity.User;
import com.prinwork.akademi.repository.UserRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final UserRepository userRepository;

    public AuthController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    // === KAYIT OL (REGISTER) ===
    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody RegisterRequest request) {
        // 1. E-posta kontrolü
        if (userRepository.existsByEmail(request.getEmail())) {
            return ResponseEntity.badRequest().body("Bu e-posta adresi zaten kullanımda!");
        }

        // 2. Yeni kullanıcı oluşturma
        User newUser = new User();

        // DÜZELTME BURADA: İsim ve Soyismi birleştirip 'fullName' yapıyoruz
        String fullName = request.getFirstName() + " " + request.getLastName();
        newUser.setFullName(fullName);

        newUser.setEmail(request.getEmail());
        newUser.setPhone(request.getPhone());
        newUser.setPassword(request.getPassword());

        userRepository.save(newUser);

        return ResponseEntity.ok("Kayıt başarılı! Giriş yapabilirsiniz.");
    }

    // === GİRİŞ YAP (LOGIN) ===
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request) {
        // 1. Kullanıcıyı bul
        Optional<User> userOpt = userRepository.findByEmail(request.getEmail());

        if (userOpt.isEmpty()) {
            return ResponseEntity.status(401).body("Kullanıcı bulunamadı veya şifre hatalı.");
        }

        User user = userOpt.get();

        // 2. Şifre Kontrolü
        if (!user.getPassword().equals(request.getPassword())) {
            return ResponseEntity.status(401).body("Kullanıcı bulunamadı veya şifre hatalı.");
        }

        return ResponseEntity.ok(user);
    }
}