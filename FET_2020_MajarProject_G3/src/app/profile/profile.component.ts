import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { LoginServicesService } from '../login-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
quizList:any;
  completeQuizList:any;
  userId:any;
  user:any;
  constructor( private router: Router
    ,private profileService:ProfileService,
    private loginService:LoginServicesService) {

    this.loginService.getuserDetails().subscribe((data:any) =>{
      this.user=JSON.parse(JSON.stringify(data));
      this.userId=this.user.id;
      this.getFavList();
      this.getQuize();
    });
  }
  ngOnInit(): void {
    
  }
  quizeRounting(id:any)
  {
  console.log(id);
  this.router.navigate(['/dashboard/mcqPage/'+id])
  }

  getFavList(){
    this.profileService.getFavListOfUser(this.userId).subscribe((res: any) => {
      this.completeQuizList=res;
      console.log(this.completeQuizList);
      
    })
  }

  getQuize(){
    this.profileService.getIncompleteQuize(this.userId).subscribe((res:any)=>{
      this.quizList=res;
      console.log(this.quizList);
      
    })
  }

}
