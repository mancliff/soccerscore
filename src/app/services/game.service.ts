import { formatCurrency } from '@angular/common';
import { Injectable } from '@angular/core';

export interface Results {
  id: number;
  score:number;
  yellowCrd:number;
  redCrd: number;
  offside: number;
}

export interface Results_B {
  id_b: number;
  score_b:number;
  yellowCrd_b:number;
  redCrd_b: number;
  offside_b: number;
}

@Injectable({
  providedIn: 'root'
})
export class GameService {

  data: Results[] = [
    {id:0, score:0, yellowCrd:0, redCrd:0, offside:0}
    
  ]

  data_b: Results_B[] = [
    {id_b:0, score_b:0, yellowCrd_b:0, redCrd_b:0, offside_b:0}
    
  ]
  



  private subResults =[];

  private subResults_B =[];

  private Stats =[];



  getResults(){

    return this.data;
  }

  getResults_B(){

    return this.data_b;
  }

  getSubResults(){

    return this.subResults;
  }

  getSubResults_B(){

    return this.subResults_B;
  }



  getStats(){
    return this.Stats;
  
  }

  addScore_team_A(results){
    
    let added = false;
    for (let r of this.subResults){
      if(r.id === results.id){
        added = true;
        r.score+=1;
        break;
      }
}

    if(!added){
      this.subResults.push(results);
    }
      
  
  }

  subtractScore_team_A(results){
    let added = false;
    for (let r of this.subResults){
      added = true;
      if(r.score>0){
        r.score-=1;
      }
          
          
    }

      if(!added){
        this.subResults.push(results);
      }
      
  }



  addScore_team_B(results){
    
    let added = false;
    for (let r of this.subResults_B){
          
      added = true;
      if(r.score_b >= 0){
        r.score_b++;
        
        
      }
    }

    if(!added) {
      this.subResults_B.push(results);
    }
  }


  subtractScore_team_B(results){
    
    let added = false;
    for (let r of this.subResults_B){
      added = true;
      if(r.score_b>0){
          r.score_b-=1;
      }
    }

    if(!added) {
      this.subResults_B.push(results);
    }
  }


  //yellow stats
  yellow_card_A(results){
    
    let added = false;
    for (let r of this.subResults){
          added = true;
          r.yellowCrd+=1;
          console.log(r.yellowCrd);
    }

    if(!added) {
      this.subResults.push(results);
    }
  }

  yellow_card_B(results){
    
    let added = false;
    for (let r of this.subResults_B){
          added = true;
          r.yellowCrd_b+=1;
    }

    if(!added) {
      this.subResults_B.push(results);
    }
  }


  //red card

  red_card_A(results){
    
    let added = false;
    for (let r of this.subResults){
          added = true;
          r.redCrd+=1;
          
    }

    if(!added) {
      this.subResults.push(results);
    }
  }


  offsite_A(results){
    
    let added = false;
    for (let r of this.subResults){
        added = true;
        r.offside+=1;
    }

    if(!added) {
      this.subResults.push(results);
    }
  }

  offsite_B(results){
    
    let added = false;
    for (let r of this.subResults_B){
      added = true;
      r.offside_b+=1;
    }

    if(!added) {
      this.subResults_B.push(results);
    }
  }

  red_card_B(results){
    
    let added = false;
    for (let r of this.subResults_B){
          added = true;
          r.redCrd_b+=1;
    }

    if(!added) {
      this.subResults_B.push(results);
    }
  }

  reset(results){

    for (let r of this.subResults_B){
      for (let rr of this.subResults){

        if(r.score_b > rr.score){
          alert("Swallows won");
        }
        if(r.score_b < rr.score){

          alert("Chippa won");

        }

        if(r.score_b == rr.score){

          alert("Draw");

        }


      }

    }
    this.format_A();
    this.format_B();

  
}

format_A(){
  for (let r of this.subResults){
          
    r.yellowCrd = 0;
    r.score = 0;
    r.redCrd = 0;
    r.offside = 0;
}
}



format_B(){
  for (let r of this.subResults_B){
          
    r.yellowCrd_b = 0;
    r.score_b = 0;
    r.redCrd_b = 0;
    r.offside_b = 0;
}   
}

  constructor() { }
}


