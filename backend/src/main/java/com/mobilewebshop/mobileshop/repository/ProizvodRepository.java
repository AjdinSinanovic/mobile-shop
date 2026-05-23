package com.mobilewebshop.mobileshop.repository;

import com.mobilewebshop.mobileshop.entity.Proizvod;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProizvodRepository extends JpaRepository<Proizvod, Long> {
}
