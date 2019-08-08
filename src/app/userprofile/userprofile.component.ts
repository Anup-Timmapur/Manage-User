import { Component, OnInit } from '@angular/core';
import { user } from './user';
import { Router } from "@angular/router";


@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

   Fname:string='';
   Lname:string='';
   Displayname:string='';
   Gender:string='';
   DOB:string='';
   Address:string='';
   City:string='';
   State:string='';
   Email:string='';

  arr:user[]=[
    new user('Anup','Timmapur','AnupTimmapur','male','24-11-1994','#jaynagar 2nd cross','Dwd','Karnataka','anuptimmapur94@gmail.com'),
    new user('Ashwini','Katral','AshwiniKatral','Female','23-08-1997','#SlAO cross ','Saudatti','Karnataka','katralashwini1997@gmail.com'),
    new user('Shweta','Walikar','ShwetaWalikar','Female','15-09-1994','Old Hubli','Hubli','Karnataka','shweta123@gmail.com'),


  ];

  constructor(private _router:Router) { }

  ngOnInit() {

  }

  onSearch(value) {
    if (value != "") {
      this.arr = this.arr.filter(x => x.Fname.indexOf(value) != -1);
    }
  }
  onUserDelete(item:user){
    //console.log(item);

    this.arr.splice(this.arr.indexOf(item),1);

  }

  onUserUpdate(item:user){
    this._router.navigate(['/edituser']);
  }

   onUserAdd() {

     this.arr.push(new user(this.Fname,this.Lname,this.Displayname,this.Gender,this.DOB,this.Address,this.City,this.State,this.Email));
   }

  onUserSave(f){

   this.arr.push(new user(this.Fname,this.Lname,this.Displayname,this.Gender,this.DOB,this.Address,this.City,this.State,this.Email));

  }

}
