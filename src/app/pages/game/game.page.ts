import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { GameService, Results, Results_B } from 'src/app/services/game.service';

import { StatsModalPage } from 'src/app/stats-modal/stats-modal.page';

@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
})
export class GamePage implements OnInit {

  stats = [];
  

  subResults: Results[] = [];
  subResults_B: Results_B[] = []; 

  constructor(private modalCtrl: ModalController, private gameSvc: GameService) { }

  ngOnInit() {

    this.subResults = this.gameSvc.getResults();
    this.subResults_B = this.gameSvc.getResults_B();
    this.stats = this.gameSvc.getStats();
    
  }

  increaseScore_team_A(results){

    this.gameSvc.addScore_team_A(results);
    console.log(this.gameSvc.addScore_team_A(results))

  }

  decreaseScore_team_A(results){

    this.gameSvc.subtractScore_team_A(results);
    console.log(this.gameSvc.subtractScore_team_A(results))

  }



  //Detail Score for team B

  increaseScore_team_B(results){

    this.gameSvc.addScore_team_B(results);
    console.log(this.gameSvc.addScore_team_B(results))

  }

  
  decreaseScore_team_B(results){

    this.gameSvc.subtractScore_team_B(results);
    console.log(this.gameSvc.subtractScore_team_B(results))

  }


  //ama yellow card 

  yellow_card_team_A(results){
    this.gameSvc.yellow_card_A(results);
    
  }

  yellow_card_team_B(results){
    this.gameSvc.yellow_card_B(results);
    
  }




  red_card_team_A(results){
    this.gameSvc.red_card_A(results);
    
  }

  red_card_team_B(results){
    this.gameSvc.red_card_B(results);
    
  }

  resetmatch(results){

    this.gameSvc.reset(results);

  }

  off_side_A(results){
    this.gameSvc.offsite_A(results);
  }

  off_side_B(results){
    this.gameSvc.offsite_B(results);
  }

  async openCart(){
    let modal= await this.modalCtrl.create({
      component:  StatsModalPage,
      cssClass: 'stats-modal'
    });
    modal.present();
    
  }

}
