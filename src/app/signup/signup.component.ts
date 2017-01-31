import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';
import { User } from '../user.model';
import { MemberService} from '../member.service';
import { moveIn, fallIn } from '../router.animations';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  animations: [moveIn(), fallIn()],
  host: {'[@moveIn]': ''},
  providers: [MemberService]
})//following code follows https://coursetro.com/posts/code/32/Create-a-Full-Angular-Authentication-System-with-Firebase
export class SignupComponent implements OnInit {
  state: string = '';
  error: any;

  constructor(public af: AngularFire, private router: Router, public memberService: MemberService) {
  }
  onSubmit(formData) {
    if(formData.valid) {
      console.log(formData.value);
      this.af.auth.createUser({
        email: formData.value.email,
        password: formData.value.password
      }).then(
        (success) => {
        console.log(success);
        var newUser: User = new User(formData.value.username, formData.value.email);
        console.log(newUser);
        this.memberService.addNewUser(newUser);
        this.router.navigate(['/login'])
      }).catch(
        (err) => {
        console.log(err);
        this.error = err;
      })
    }
  }
ngOnInit() {
  }

}
