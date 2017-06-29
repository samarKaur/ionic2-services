import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {UserService} from '../../providers/people-service/people-service';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  
  providers: [UserService]
  
})
export class HomePage {

  constructor(public navCtrl: NavController,private userService: UserService) {
   
  }
   
   profile = {};

  loadUser() {
    this.userService.getUser().subscribe(data => this.profile = data);
  }
    

}
