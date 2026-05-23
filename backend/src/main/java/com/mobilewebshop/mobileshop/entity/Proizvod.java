package com.mobilewebshop.mobileshop.entity;

import java.math.BigDecimal;
import java.time.LocalDateTime;

import org.hibernate.annotations.CreationTimestamp;
import jakarta.persistence.*;

@Entity
@Table(name = "proizvodi")
public class Proizvod {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 255)
    private String naziv;

    @Column(columnDefinition = "TEXT")
    private String opis;

    @Column(nullable = false, precision = 10, scale = 2)
    private BigDecimal cijena;

    @Column(name = "slika_url", length = 500)
    private String slikaUrl;

    @Column(name = "kolicina_na_stanju")
    private Integer kolicinaNaStanju = 0;

    @CreationTimestamp
    @Column(name = "kreiran_u", updatable = false)
    private LocalDateTime kreiranU;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNaziv() {
        return naziv;
    }

    public void setNaziv(String naziv) {
        this.naziv = naziv;
    }

    public String getOpis() {
        return opis;
    }

    public void setOpis(String opis) {
        this.opis = opis;
    }

    public BigDecimal getCijena() {
        return cijena;
    }

    public void setCijena(BigDecimal cijena) {
        this.cijena = cijena;
    }

    public String getSlikaUrl() {
        return slikaUrl;
    }

    public void setSlikaUrl(String slikaUrl) {
        this.slikaUrl = slikaUrl;
    }

    public Integer getKolicinaNaStanju() {
        return kolicinaNaStanju;
    }

    public void setKolicinaNaStanju(Integer kolicinaNaStanju) {
        this.kolicinaNaStanju = kolicinaNaStanju;
    }

    public LocalDateTime getKreiranU() {
        return kreiranU;
    }

    public void setKreiranU(LocalDateTime kreiranU) {
        this.kreiranU = kreiranU;
    }
}
