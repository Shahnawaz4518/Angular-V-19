import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-childcomponent',
  imports: [],
  templateUrl: './childcomponent.html',
  styleUrl: './childcomponent.css',
  //Parent Child Commmunication Using MetaData
  inputs: ['Pdata'],
  outputs: ['childevent']

})
export class Childcomponent {
  Pdata: any;

  childevent = new EventEmitter();

  senddata(val: any) {
    this.childevent.emit(val);
  }

}
