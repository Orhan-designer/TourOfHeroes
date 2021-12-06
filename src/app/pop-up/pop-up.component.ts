import { HeroDetailComponent } from './../hero-detail/hero-detail.component';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.less']
})
export class PopUpComponent implements OnInit {
  
  constructor(private dialogRef: MatDialogRef<PopUpComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { 
    console.log(this.data)
  }

  ngOnInit(): void {
  }

  pressOk() {
    this.dialogRef.close()
  }

}
