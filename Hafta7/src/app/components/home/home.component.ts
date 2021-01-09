import { Sonuc } from './../../models/sonuc';
import { Component, OnInit } from '@angular/core';
import { Kayit } from 'src/app/models/kayit';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  kayitlar: Kayit[];
  secKayit: Kayit = new Kayit();
  sonuc: Sonuc = new Sonuc;
  constructor(
    public servis: DataService
  ) { }

  ngOnInit(){
    this.KayitListele();
    this.secKayit.id = 0;
    
  }

  KayitListele() {
    this.servis.KayitListele().subscribe((d: Kayit[]) => { this.kayitlar = d; });
  }

  Kaydet() {
    var tarih =new Date();
    if (this.secKayit.id==0) {
      this.secKayit.id =Math.floor(Math.random()*1000);
      this.secKayit.kayTarih=tarih.getTime().toString();
      this.secKayit.duzTarih=tarih.getTime().toString();

      this.servis.KayitEkle(this.secKayit).subscribe(d =>{
        this.sonuc.islem =true;
        this.sonuc.mesaj ="Kayıt Eklendi..";
        this.KayitListele();
        this.secKayit= new Kayit();
        this.secKayit.id=0;
      },err=>{
        this.sonuc.islem =false;
        this.sonuc.mesaj ="Hata Oluştu..";
      });
    }
    else{

    }

  }

  Duzenle() {

  }

  Sil() {

  }

}
