import { Component } from '@angular/core';
import { Player } from '../../model/player';
import { PlayerserviceService } from '../../service/playerservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createplayer',
  templateUrl: './createplayer.component.html',
  styleUrl: './createplayer.component.css'
})
export class CreateplayerComponent {

  
  constructor(private service:PlayerserviceService,
    private router: Router) { }
  submitted=false;
  player=new Player();
  onSubmit()
  {
    this.submitted=true;
    this.save();
  }
  save()
  {
    this.service.createPlayer(this.player).subscribe();
  }

 
}
