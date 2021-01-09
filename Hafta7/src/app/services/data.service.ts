import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Kayit } from '../models/kayit';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public apiUrl = "http://localhost:3000/";

  constructor(
    public http: HttpClient
  ) { }

  KayitListele() {
    return this.http.get(this.apiUrl+"kayitlar");

  }

  KayitById(id: number) {
    return this.http.get(this.apiUrl+"kayitlar/"+id);

  }

  KayitEkle(kayit: Kayit) {
    return this.http.post(this.apiUrl+"kayitlar",kayit);

  }

  KayitDuzenle(kayit: Kayit) {
    return this.http.put(this.apiUrl+"kayitlar/"+kayit.id,kayit);
  }

  KayitSil(id: number) {
    return this.http.delete(this.apiUrl+"kayitlar/"+id);
  }


}
