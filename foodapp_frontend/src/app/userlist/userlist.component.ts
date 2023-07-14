import { Component } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent {

  users:User[]=[];
    constructor(private service:UserService,private router:Router){}  
  ngOnInit(): void{
      this.getUsers();
  }

  getUsers(){
    this.service.getUserList().subscribe(data=>{
      this.users=data;
    })
  }

  updateUser(id:number){
    this.router.navigate(['update-User', id]);
  }

  deleteUser(id:number)
  {
    this.service.deleteUser(id).subscribe(data=>{
      this.getUsers();
    })
  }

}
