import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service'; 


@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent {

  id!:number;
  user:User=new User();
  constructor(private service:UserService,private route:ActivatedRoute,private router:Router){}


ngOnInit():void{
  this.id=this.route.snapshot.params['id'];
   this.service.getUserById(this.id).subscribe(data=>{
    this.user=data;
});
   
}

onSubmit(){
  this.service.updateUser(this.id,this.user).subscribe(data=>{
    this.gotoUserList();
  })
}

gotoUserList(){
  this.router.navigate(['/customer']);
}
}
