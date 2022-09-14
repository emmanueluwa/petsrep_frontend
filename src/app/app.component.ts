import { Component } from '@angular/core';
import { MatBottomSheet }  from '@angular/material/bottom-sheet';
import { AuthenticatorComponent } from './authenticator/authenticator.component';
import { MembersService } from './services/members.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'membersapi';
  members: any;

  constructor(private loginSheet: MatBottomSheet, private memberService: MembersService) {

  }
  
  ngOnInit(): void {
    this.showMembers();
  }

  onLoginClick() {
    this.loginSheet.open(AuthenticatorComponent);
  }

  showMembers() {
    this.memberService.getMembers().subscribe(data => {
        this.members = data,
        console.log(this.members);
    })
  }
}
