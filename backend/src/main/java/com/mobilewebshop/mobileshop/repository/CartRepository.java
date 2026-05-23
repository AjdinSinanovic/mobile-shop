package com.mobilewebshop.mobileshop.repository;

import com.mobilewebshop.mobileshop.entity.Cart;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CartRepository extends JpaRepository<Cart, Long> {
}
