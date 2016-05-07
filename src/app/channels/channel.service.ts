import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

export interface IChannel {
  $key?: string;
  name: string;
}

export class Channel implements IChannel {
  completed: boolean = false;
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}


@Injectable()
export class ChannelService {
  channelItems$: FirebaseListObservable<IChannel[]>;

  constructor(af: AngularFire) {
    this.channelItems$ = af.database.list(`/channels`) as FirebaseListObservable<IChannel[]>;
    console.log(this.channelItems$);
  }

  createChannel(title: string): Promise<any> {
    return this.channelItems$.push(new Channel(title));
  }
}
