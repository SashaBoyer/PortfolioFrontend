import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-soft-skills',
  templateUrl: './soft-skills.component.html',
  styleUrls: ['./soft-skills.component.css']
})
export class SoftSkillsComponent implements OnInit{

  isLogged = false;

  constructor(private tokenService:TokenService){}

  ngOnInit() {
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }
    else {this.isLogged = false;}
  }

}
