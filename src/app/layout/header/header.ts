import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-header',
  styleUrl: './header.scss',
  templateUrl: './header.html',
})
export class Header {


  path = "";
  btn_text = "Neues Produkt";

  ngOnInit(){
    this.path = "";

    if(this.path=="detail") {
      this.btn_text = "zurück zur Liste";
    }
  }
}


