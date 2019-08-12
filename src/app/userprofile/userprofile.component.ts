import { Component, OnInit } from '@angular/core';
import { user } from './user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

   Fname= '';
   Lname= '';
   Displayname= '';
   Gender= '';
   DOB= '';
   Address= '';
   City= '';
   State= '';
   Email= '';
   updateditem;
   data= '';

  arr: user[] = [
    new user('Anup', 'Timmapur', 'AnupTimmapur', 'male', '24-11-1994', '#jaynagar 2nd cross', 'Dwd', 'Karnataka', 'anuptimmapur94@gmail.com'),
    new user('Ashwini', 'Katral', 'AshwiniKatral', 'Female', '23-08-1997', '#SlAO cross ', 'Saudatti', 'Karnataka', 'katralashwini1997@gmail.com'),
    new user('Shweta', 'Walikar', 'ShwetaWalikar', 'Female', '15-09-1994', 'Old Hubli', 'Hubli', 'Karnataka', 'shweta123@gmail.com'),


  ];






  constructor(private _router: Router , ) { }

  ngOnInit() {

  }



  onSearch(value) {
    if (value != '') {
      this.arr = this.arr.filter(x => x.Fname.indexOf(value) != -1);
    }
  }
  onUserDelete(item: user) {
    // console.log(item);

    this.arr.splice(this.arr.indexOf(item), 1);

  }

  // onUserUpdate(item:user){
  //   this._router.navigate(['/edituser']);
  // }

   onUserAdd() {

     // tslint:disable-next-line: max-line-length
     this.arr.push(new user(this.Fname, this.Lname, this.Displayname, this.Gender, this.DOB, this.Address, this.City, this.State, this.Email));
   }

  onUserSave(f) {

    // tslint:disable-next-line: max-line-length
    this.arr.push(new user(this.Fname, this.Lname, this.Displayname, this.Gender, this.DOB, this.Address, this.City, this.State, this.Email));

  }


  EditItem(i) {
    this.Fname= this.arr[i].Fname ;
    this.Lname = this.arr[i].Lname ;
    this.Displayname = this.arr[i].Displayname ;
    this.Gender = this.arr[i].Gender ;
    this.DOB = this.arr[i].DOB ;
    this.Address = this.arr[i].Address ;
    this.City = this.arr[i].City ;
    this.State = this.arr[i].State ;
    this.Email = this.arr[i].Email ;

    this.updateditem = i;


  }


  UpdateItem() {

    let data = this.updateditem;
    for (let i = 0; i < this.arr.length; i++) {
      // tslint:disable-next-line: triple-equals
      if ( i == data ) {
        this.arr[i].Fname = this.Fname ;

        this.arr[i].Lname = this.Lname ;
        this.arr[i].Displayname = this.Displayname;
        this.arr[i].Gender = this.Gender;
        this.arr[i].DOB = this.DOB;
        this.arr[i].Address = this.Address;
        this.arr[i].City = this.City;
        this.arr[i].State = this.State;
        this.arr[i].Email = this.Email;

        this.Fname='';
        this.Lname='';
        this.Displayname='';
        this.Gender='';
        this.DOB='';
        this.Address='';
        this.City='';
        this.State='';
        this.Email='';
      }
    }

  }


}


