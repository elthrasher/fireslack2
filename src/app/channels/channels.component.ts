import { Component, Input } from '@angular/core';
import { ChannelService } from './channel.service';

@Component({
  moduleId: module.id,
  selector: 'app-channels',
  templateUrl: 'channels.component.html',
  styleUrls: ['channels.component.css']
})
export class ChannelsComponent {
  @Input() model;
  newChannelName: string = '';

  constructor(private channelService: ChannelService) {
  }
  
  clear(): void {
    console.log('clear');
    this.newChannelName = '';
  }
  
  submit(): void {
    const name: string = this.newChannelName.trim();
    if (name.length) {
      
    }
    this.clear();
  }
}
