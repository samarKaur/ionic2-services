import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ExampleService } from '../../app/example.service';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [ExampleService]
})
export class HomePage {

 title: string;
  constructor(public navCtrl: NavController,private _exampleService: ExampleService) {
  }
  ngOnInit() {
        this.title = this._exampleService.someMethod();
    }

}
