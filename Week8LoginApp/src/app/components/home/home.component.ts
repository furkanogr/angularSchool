import { Kayit } from './../../models/kayit';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  kayitlar: Kayit[];
  ara: string = "";
  sira: string = "adsoyad";
  sayfa: number = 1;
  limit: number = 10;

  constructor(
    public servis: DataService
  ) { }

  ngOnInit(): void {
    this.KayitSayfala();
  }

  KayitAraSirala() {
    this.servis.KayitAraSirala(this.ara, this.sira).subscribe((d: Kayit[]) => {
      this.kayitlar = d;
    });
  }

  KayitSayfala() {
    this.servis.KayitSayfala(this.sayfa, this.limit).subscribe((d: Kayit[]) => {
      this.kayitlar = d;
    })
  }
  OncekiSayfa() {
    this.sayfa -= 1;
    this.KayitSayfala();
  }

  SonrakiSayfa() {
    this.sayfa += 1;
    this.KayitSayfala();
  }

  LimitBelirle(d: number) {
   this.limit=d;
   this.KayitSayfala();
  }

  Ara(d: string) {
    this.ara = d;
    this.KayitAraSirala();
  }
  Sirala(s: string) {
    this.sira = s;
    this.KayitAraSirala();
  }


}
