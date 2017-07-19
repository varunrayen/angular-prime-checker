import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  value: number;
  prime: string;
  calculated: boolean;

  // prime number checker
  primeNumber(){
  	this.calculated = true;
  	if(this.value){
  		if ( this.value == 1 || this.value == 2 ) {
				this.prime = "prime";
			}
			for (var i = 2; i < this.value; i++ ) {
				if ( this.value % i == 0 ) {
					this.prime = "not a Prime";
					break;
				}
				else
				{
					this.prime = "prime";
					break;
				}
			}
  	}
  }
}
