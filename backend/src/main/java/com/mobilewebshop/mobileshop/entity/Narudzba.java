package com.mobilewebshop.mobileshop.entity;

import java.math.BigDecimal;
import java.time.LocalDateTime;

import org.hibernate.annotations.CreationTimestamp;
import jakarta.persistence.*;

@Entity
@Table(name = "narudzbe")
public class Narudzba {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "korisnik_id", nullable = false)
    private Korisnik korisnik;

    @Column(name = "ukupna_cijena", nullable = false, precision = 10, scale = 2)
    private BigDecimal ukupnaCijena;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, length = 20)
    private StatusNarudzbe status = StatusNarudzbe.NA_CEKANJU;

    @Column(name = "adresa_dostave", nullable = false, length = 255)
    private String adresaDostave;

    @Column(nullable = false, length = 100)
    private String grad;

    @Column(name = "postanski_broj", nullable = false, length = 20)
    private String postanskiBroj;

    @Column(name = "broj_telefona", nullable = false, length = 30)
    private String brojTelefona;

    @CreationTimestamp
    @Column(name = "datum_narudzbe", updatable = false)
    private LocalDateTime datumNarudzbe;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Korisnik getKorisnik() {
        return korisnik;
    }

    public void setKorisnik(Korisnik korisnik) {
        this.korisnik = korisnik;
    }

    public BigDecimal getUkupnaCijena() {
        return ukupnaCijena;
    }

    public void setUkupnaCijena(BigDecimal ukupnaCijena) {
        this.ukupnaCijena = ukupnaCijena;
    }

    public StatusNarudzbe getStatus() {
        return status;
    }

    public void setStatus(StatusNarudzbe status) {
        this.status = status;
    }

    public String getAdresaDostave() {
        return adresaDostave;
    }

    public void setAdresaDostave(String adresaDostave) {
        this.adresaDostave = adresaDostave;
    }

    public String getGrad() {
        return grad;
    }

    public void setGrad(String grad) {
        this.grad = grad;
    }

    public String getPostanskiBroj() {
        return postanskiBroj;
    }

    public void setPostanskiBroj(String postanskiBroj) {
        this.postanskiBroj = postanskiBroj;
    }

    public String getBrojTelefona() {
        return brojTelefona;
    }

    public void setBrojTelefona(String brojTelefona) {
        this.brojTelefona = brojTelefona;
    }

    public LocalDateTime getDatumNarudzbe() {
        return datumNarudzbe;
    }

    public void setDatumNarudzbe(LocalDateTime datumNarudzbe) {
        this.datumNarudzbe = datumNarudzbe;
    }
}
