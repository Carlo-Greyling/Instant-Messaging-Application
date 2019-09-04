import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  signInMessage: any;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  // DONT EDIT!!!
  LogIn(form: NgForm) {
    const value = form.value;
    if ((value.username === 'admin') && (value.password === 'admin')) {
      this.router.navigateByUrl('chatWindow');
    } else {
      this.signInMessage = 'Username / Password is incorrect, please try again.';
    }
    /*const value = form.value;
    // console.log(value.username, value.password);

    this.authenticationService.login(value.username, value.password)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['insert route path']);
          this.toastrService.success('', 'Login Successful', {
            closeButton: true,
            tapToDismiss: true,
            timeOut: 2000,
            progressBar: true,
            progressAnimation: 'increasing',
            positionClass: 'toast-bottom-right',
            easeTime: 300
          });
        },
        error => {
          this.signInMessage = 'Username / Password is incorrect, please try again.';
        });*/
  }

  onSignUpClicked() {}
}
