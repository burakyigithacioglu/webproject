package com.prinwork.akademi.repository;
import com.prinwork.akademi.entity.CartItem;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;
public interface CartItemRepository extends JpaRepository<CartItem, Long> {
    void deleteAllByCartId(Long cartId);
    Optional<CartItem> findByCartIdAndCourseId(Long cartId, Long courseId);
}