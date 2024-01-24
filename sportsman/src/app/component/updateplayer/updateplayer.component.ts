import { Component } from '@angular/core';
import { Player } from '../../model/player';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerserviceService } from '../../service/playerservice.service';

@Component({
  selector: 'app-updateplayer',
  templateUrl: './updateplayer.component.html',
  styleUrl: './updateplayer.component.css'
})
export class UpdateplayerComponent {

    
  playerId: number=0;
  player: Player=new Player();

  constructor(private route: ActivatedRoute,private router: Router,
    private service: PlayerserviceService) { }


    ngOnInit() {
      this.player = new Player();
  
      this. playerId = this.route.snapshot.params['playerId'];
      
      
      this.service.getOnePlayer(this.playerId).subscribe((data)=>{
        console.log(data);
        this.player=data;
      })
            
    }

    onSubmit(){
      this. updatePlayer();
    }

    updatePlayer()
    {
      this.service.updatePlayer(this.player).subscribe((data: any)=>{
        console.log(data);
        this.player= new Player();
        this.gotoList();
      })
    }

    gotoList(){
      this.router.navigate(['list']);
    }

}
