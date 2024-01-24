import { Component } from '@angular/core';
import { Player } from '../../model/player';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerserviceService } from '../../service/playerservice.service';

@Component({
  selector: 'app-playerdetails',
  templateUrl: './playerdetails.component.html',
  styleUrl: './playerdetails.component.css'
})
export class PlayerdetailsComponent {

  playerId: number=0;
  player: Player=new Player();

  constructor(private route: ActivatedRoute,private router: Router,
    private service: PlayerserviceService) { }

    ngOnInit() {
      this.player = new Player();
  
      this. playerId = this.route.snapshot.params['playerId'];
      
      
      this.service.getOnePlayer(this.playerId).subscribe((data: Player)=>{
        console.log(data);
        this.player=data;
      })


}

list(){
  this.router.navigate(['list']);
}

}
