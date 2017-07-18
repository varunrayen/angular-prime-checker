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
  calculated = false;

  // prime number checker function
  primeNumber(){
  	this.calculated = true;
  	if(this.value){
  		if ( this.value == 1 || this.value == 2 ) {
				console.log("prime");
				this.prime = "Prime";
			}

			for (var i = 2; i < this.value; i++ ) {
				if ( this.value % i == 0 ) {
					console.log("not prime");
					this.prime = "Not a Prime";
					break;
				}
				else
				{
					console.log("prime");
					this.prime = "Prime";
					break;
				}
				
			} 
  	}
  }
}
