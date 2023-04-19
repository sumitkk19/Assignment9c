import { Component } from '@angular/core';
import { NumberService } from '../number.service';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  primeResult: boolean;
  capitalCount: number;

  constructor(private numberService: NumberService, private stringService: StringService) {
    this.primeResult = this.numberService.getChkPrime(4);
    this.capitalCount = this.stringService.getCountCapital('Hello Everyone');
  }
}
