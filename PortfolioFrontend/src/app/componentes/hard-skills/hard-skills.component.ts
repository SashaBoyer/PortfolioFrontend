import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-hard-skills',
  templateUrl: './hard-skills.component.html',
  styleUrls: ['./hard-skills.component.css']
})
export class HardSkillsComponent implements OnInit{

  isLogged = false;

  constructor(private tokenService:TokenService){}

  ngOnInit() {
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }
    else {this.isLogged = false;}
  }

}
