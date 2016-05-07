import { Component, OnInit } from '@angular/core';
import { ChannelsComponent } from '../channels';
import { ChannelService } from '../channels/channel.service';

@Component({
  moduleId: module.id,
  directives: [ChannelsComponent],
  selector: 'app-sidebar',
  templateUrl: 'sidebar.component.html',
  styleUrls: ['sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private channelService: ChannelService) {}

  ngOnInit() {
  }

}
