import { Routes,RouterModule } from "@angular/router";
import { UserprofileComponent } from './userprofile/userprofile.component';



const arr : Routes=[
  {path:'',component:UserprofileComponent}
  // {path:'adduser',component:AdduserComponent},
  // {path:'edituser',component:EdituserComponent}


];
export const routing = RouterModule.forRoot(arr);
