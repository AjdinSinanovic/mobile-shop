package com.mobilewebshop.mobileshop.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.mobilewebshop.mobileshop.entity.Korisnik;

public interface KorisnikRepository extends JpaRepository<Korisnik, Long> {
    Korisnik findByBrojTelefona(String brojTelefona);
    Korisnik findByEmail(String Email);
    
    boolean existsByEmail(String Email);
}
