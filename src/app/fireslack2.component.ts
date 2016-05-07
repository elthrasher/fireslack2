import { Component } from '@angular/core';
import { NavbarComponent } from './navbar';
import { SidebarComponent } from './sidebar';
import { WelcomeComponent } from './welcome';
import { MessagesComponent } from './messages';
import { AuthService } from './shared/auth.service';

@Component({
  moduleId: module.id,
  directives: [NavbarComponent, SidebarComponent, WelcomeComponent, MessagesComponent],
  selector: 'fireslack2-app',
  templateUrl: 'fireslack2.component.html',
  styleUrls: ['fireslack2.component.css']
})
export class Fireslack2AppComponent {
  title = 'fireslack2 works!';
  
  constructor(private auth: AuthService) {}

  signOut(): void {
    this.auth.signOut();
    window.location.replace('/');
  }
  
  signInWithGithub(): void {
    this.auth.signInWithGithub();
  }
}
