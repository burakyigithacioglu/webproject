package com.prinwork.akademi.service;

import com.prinwork.akademi.dto.CartResponse;
import com.prinwork.akademi.entity.Cart;
import com.prinwork.akademi.entity.CartItem;
import com.prinwork.akademi.entity.Course;
import com.prinwork.akademi.entity.User;
import com.prinwork.akademi.repository.CartItemRepository;
import com.prinwork.akademi.repository.CartRepository;
import com.prinwork.akademi.repository.CourseRepository;
import com.prinwork.akademi.repository.UserRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;

@Service
public class CartService {

    private final CartRepository cartRepository;
    private final CartItemRepository cartItemRepository;
    private final CourseRepository courseRepository; // İsim değişti
    private final UserRepository userRepository;

    public CartService(CartRepository cartRepository,
                       CartItemRepository cartItemRepository,
                       CourseRepository courseRepository,
                       UserRepository userRepository) {
        this.cartRepository = cartRepository;
        this.cartItemRepository = cartItemRepository;
        this.courseRepository = courseRepository;
        this.userRepository = userRepository;
    }

    @Transactional
    public CartResponse addToCart(String email, Long courseId) { // packageId -> courseId oldu
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("Kullanıcı bulunamadı: " + email));

        Cart cart = cartRepository.findByUserId(user.getId()).orElseGet(() -> {
            Cart c = new Cart();
            c.setUser(user);
            return cartRepository.save(c);
        });

        Course course = courseRepository.findById(courseId)
                .orElseThrow(() -> new RuntimeException("Kurs bulunamadı"));

        CartItem item = cartItemRepository.findByCartIdAndCourseId(cart.getId(), course.getId()).orElse(null);

        if (item == null) {
            item = new CartItem();
            item.setCart(cart);
            item.setCourse(course); // setTrainingPackage yerine setCourse
            item.setQuantity(1);
        } else {
            item.setQuantity(item.getQuantity() + 1);
        }
        cartItemRepository.save(item);

        return getCart(email);
    }

    @Transactional(readOnly = true)
    public CartResponse getCart(String email) {
        User user = userRepository.findByEmail(email).orElse(null);
        if (user == null) return new CartResponse();

        Cart cart = cartRepository.findByUserId(user.getId()).orElse(null);

        CartResponse r = new CartResponse();
        r.setEmail(email);

        if (cart == null) {
            r.setItemCount(0);
            r.setItems(new ArrayList<>());
            return r;
        }

        var items = cart.getItems();

        int count = 0;
        var lines = new ArrayList<CartResponse.CartItemLine>();
        for (CartItem ci : items) {
            CartResponse.CartItemLine line = new CartResponse.CartItemLine();
            // Frontend bozulmasın diye DTO'daki packageId alanını kullanmaya devam ediyoruz ama veriyi Course'dan alıyoruz
            line.setPackageId(ci.getCourse().getId());
            line.setTitle(ci.getCourse().getTitle());
            line.setQuantity(ci.getQuantity());
            lines.add(line);
            count += ci.getQuantity();
        }

        r.setItemCount(count);
        r.setItems(lines);
        return r;
    }

    @Transactional
    public void clearCart(String email) {
        User user = userRepository.findByEmail(email).orElse(null);
        if (user != null) {
            Cart cart = cartRepository.findByUserId(user.getId()).orElse(null);
            if (cart != null) {
                cartItemRepository.deleteAllByCartId(cart.getId());
            }
        }
    }
}