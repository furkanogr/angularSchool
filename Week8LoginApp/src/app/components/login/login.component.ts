import { Uye } from './../../models/uye';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  returnurl:string="";

  constructor(
    public servis: DataService,
    public route:ActivatedRoute,
    public router:Router  
  ) { }

  ngOnInit(): void {
    this.returnurl=this.route.snapshot.queryParams['returnUrl'] || '/kayitlar';
  }

  GirisYap(k: string, p: string) {
    this.servis.UyeLogin(k, p).subscribe((d: Uye[]) => {
      if (d.length > 0) {
        var yetkiler = [];
        if (d[0].admin == 1) {
          yetkiler.push("Uye");
          yetkiler.push("Admin");
        } else {
          yetkiler.push("Uye");

        }
        localStorage.setItem("token", this.servis.ParolaUret(64));
        localStorage.setItem("uyeYetkileri", JSON.stringify(yetkiler));
        this.router.navigateByUrl(this.returnurl);
      }
    });
  }

}
