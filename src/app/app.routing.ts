import { Routes,RouterModule } from "@angular/router";
import { UserprofileComponent } from './userprofile/userprofile.component';
// import { AdduserComponent } from './userprofile/adduser/adduser.component';
// import { EdituserComponent } from './userprofile/edituser/edituser.component';



const arr : Routes=[
  {path:'',component:UserprofileComponent}
  // {path:'adduser',component:AdduserComponent},
  // {path:'edituser',component:EdituserComponent}


];
export const routing = RouterModule.forRoot(arr);
