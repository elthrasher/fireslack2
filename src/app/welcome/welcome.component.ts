import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-welcome',
  templateUrl: 'welcome.component.html',
  styleUrls: ['welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  
  @Output() signInWithGithub: EventEmitter<any> = new EventEmitter(false);

  constructor() {}

  ngOnInit() {
  }

}
