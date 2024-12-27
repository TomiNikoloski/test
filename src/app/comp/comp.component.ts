import { Component, Input } from '@angular/core';
import {driver} from '../../driver';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-comp',
  imports: [CommonModule],
  templateUrl: './comp.component.html',
  styleUrl: './comp.component.css'
})
export class CompComponent {

  @Input()
  vozac:driver | undefined;

  @Input()
  cuci:Number | undefined;

  @Input()
  indeks:Number | undefined;

  

  onDrvView(){
    let link: string | undefined; //ako e String togas odime so objakti, ne promenlivi
    //var link = '';

    if(this.vozac?.iconUrl){
      link=this.vozac?.iconUrl;
    }
    else{
      link="https://www.google.com"
    }

    window.open(link, "_blank")
  }
}
