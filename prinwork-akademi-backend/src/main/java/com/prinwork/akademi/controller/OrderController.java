package com.prinwork.akademi.controller;

import com.prinwork.akademi.entity.Course;
import com.prinwork.akademi.entity.Order;
import com.prinwork.akademi.entity.User;
import com.prinwork.akademi.repository.CourseRepository;
import com.prinwork.akademi.repository.OrderRepository;
import com.prinwork.akademi.repository.UserRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/orders")
public class OrderController {

    private final OrderRepository orderRepository;
    private final CourseRepository courseRepository;
    private final UserRepository userRepository;

    public OrderController(OrderRepository orderRepository, CourseRepository courseRepository, UserRepository userRepository) {
        this.orderRepository = orderRepository;
        this.courseRepository = courseRepository;
        this.userRepository = userRepository;
    }

    @PostMapping
    public ResponseEntity<?> create(@RequestBody Map<String, Object> request) {
        String email = (String) request.get("email");
        Long courseId = ((Number) request.get("courseId")).longValue();

        User user = userRepository.findByEmail(email).orElseThrow(() -> new RuntimeException("Kullanıcı bulunamadı"));
        Course course = courseRepository.findById(courseId).orElseThrow(() -> new RuntimeException("Kurs bulunamadı"));

        Order order = new Order();
        order.setUser(user);
        order.setCourse(course);
        order.setStatus("COMPLETED");
        orderRepository.save(order);

        return ResponseEntity.ok("Sipariş alındı");
    }
}