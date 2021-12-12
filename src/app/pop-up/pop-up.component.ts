import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Hero } from '../hero';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.less']
})
export class PopUpComponent implements OnInit {
  hero!: Hero | any;

  constructor(public dialogRef: MatDialogRef<PopUpComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void { 
    
  }

  pressOk() {
    this.dialogRef.close(true)
  }

}
