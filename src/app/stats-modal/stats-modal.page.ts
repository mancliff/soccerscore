import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { GameService, Results, Results_B } from 'src/app/services/game.service';

@Component({
  selector: 'app-stats-modal',
  templateUrl: './stats-modal.page.html',
  styleUrls: ['./stats-modal.page.scss'],
})
export class StatsModalPage implements OnInit {

  stats: Results[] = [];
  stats_B: Results_B[]

  constructor(private modalCtrl: ModalController, private gameSvc: GameService) { }

  ngOnInit() {
    this.stats = this.gameSvc.getSubResults();
    this.stats_B = this.gameSvc.getSubResults_B();
  }
  
  close() {
    this.modalCtrl.dismiss();
    this.stats = this.gameSvc.getSubResults();
  }
}
