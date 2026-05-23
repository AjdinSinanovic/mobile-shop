package com.mobilewebshop.mobileshop.service;
import com.mobilewebshop.mobileshop.entity.Korisnik;
import com.mobilewebshop.mobileshop.repository.KorisnikRepository;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class KorisnikService {

	private final KorisnikRepository korisnikRepository;

	public KorisnikService(KorisnikRepository korisnikRepository) {
		this.korisnikRepository = korisnikRepository;
	}


	public Korisnik login(String email, String password){
		Korisnik user = korisnikRepository.findByEmail(email);
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

		if (user == null){
			throw new RuntimeException("Korisnik ne postoji");
		} 

		if (!encoder.matches(password, user.getSifra())){
			throw new RuntimeException("Pogrešna šifra");
		}
		return user;
	}

	public Korisnik register(Korisnik user){
		boolean postoji = korisnikRepository.existsByEmail(user.getEmail());
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

		if(postoji){
			throw new RuntimeException("Korisnik vec postoji");
		}

		String sifra = user.getSifra();
		String sifraHash = encoder.encode(sifra);
		user.setSifra(sifraHash);

		return korisnikRepository.save(user);
	}

}
