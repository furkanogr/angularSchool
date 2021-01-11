import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public apiUrl = "http://localhost:3000/";

  constructor(
    public http: HttpClient
  ) { }

  OturumKontrol() {
    var token = localStorage.getItem("token");
    if (token) {
      return true;
    } else {
      return false;
    }
  }

  YetkiKontrol(yetkiler) {
    var sonuc: boolean = false;
    var uyeYetkiler: string[] = JSON.parse(localStorage.getItem("uyeYetkileri"));

    if (yetkiler) {
      yetkiler.forEach(element => {
        if (uyeYetkiler.indexOf(element) > -1) {
          sonuc = true;
          return false;
        }
      });
    }

    return sonuc;
  }

  UyeLogin(k: string, p: string) {
    return this.http.get(this.apiUrl + "uye?kadi=" + k + "&parola=" + p);

  }

  KayitAraSirala(ara: string, sira: string) {
    return this.http.get(this.apiUrl + "kayit?q=" + ara + "&_sort=" + sira);
  }

  KayitSayfala(p: number, lim: number) {
    return this.http.get(this.apiUrl + "kayit?_page=" + p + "_&limit=" + lim);
  }
  ParolaUret(s: number) {
    var st: string = "qwertyuopasdfghjklizxcvbnm0123456789";
    var p = "";
    for (let i = 0; i < s; i++) {
      var r = Math.floor(Math.random() * st.length);
      p += st.charAt(r)

    }
    return p;
  }
}
