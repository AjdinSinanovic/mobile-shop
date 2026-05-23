package com.mobilewebshop.mobileshop.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mobilewebshop.mobileshop.entity.Korisnik;
import com.mobilewebshop.mobileshop.service.KorisnikService;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "http://localhost:3000")
public class AuthController {
    
    private final KorisnikService korisnikService;

    public AuthController(KorisnikService korisnikService){
        this.korisnikService = korisnikService;
    }

    @PostMapping("/login")
    public Korisnik login(@RequestBody Korisnik user){
        return korisnikService.login(user.getEmail(), user.getSifra());
    }

    @PostMapping("/register")
    public Korisnik register(@RequestBody Korisnik user){
        return korisnikService.register(user);
    }      
}
