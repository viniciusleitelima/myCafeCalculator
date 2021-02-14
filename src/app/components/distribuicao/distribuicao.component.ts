import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-distribuicao',
  templateUrl: './distribuicao.component.html',
  styleUrls: ['./distribuicao.component.css']
})
export class DistribuicaoComponent implements OnInit {
  diamantes = {
    total:null
  }


  cidadaos = [
    {
      id:1,
      trofeus:null,
      valor_premio:null
    },
    {
      id:2,
      trofeus:null,
      valor_premio:null
    },
    {
      id:3,
      trofeus:null,
      valor_premio:null
    },
    {
      id:4,
      trofeus:null,
      valor_premio:null
    },
    {
      id:5,
      trofeus:null,
      valor_premio:null
    },
    {
      id:6,
      trofeus:null,
      valor_premio:null
    },
    {
      id:7,
      trofeus:null,
      valor_premio:null
    },
    {
      id:8,
      trofeus:null,
      valor_premio:null
    },
    {
      id:9,
      trofeus:null,
      valor_premio:null
    },
    {
      id:10,
      trofeus:null,
      valor_premio:null
    },
    {
      id:11,
      trofeus:null,
      valor_premio:null
    },
    {
      id:12,
      trofeus:null,
      valor_premio:null
    },
    {
      id:13,
      trofeus:null,
      valor_premio:null
    },
    {
      id:14,
      trofeus:null,
      valor_premio:null
    },
    {
      id:15,
      trofeus:null,
      valor_premio:null
    },
    {
      id:16,
      trofeus:null,
      valor_premio:null
    },
    {
      id:17,
      trofeus:null,
      valor_premio:null
    },
    {
      id:18,
      trofeus:null,
      valor_premio:null
    },
    {
      id:19,
      trofeus:null,
      valor_premio:null
    },
    {
      id:20,
      trofeus:null,
      valor_premio:null
    },
  ];

  trofeus = {
    total:null
  }
  constructor() { }

  ngOnInit(): void {
  }

  somarDiamantes(){
    this.trofeus.total = 0;
    for(let i=0; i < this.cidadaos.length;i++){
      this.trofeus.total = this.trofeus.total + this.cidadaos[i].trofeus;
    }
    for(let i=0; i < this.cidadaos.length;i++){
      if(this.cidadaos[i].trofeus){
        this.cidadaos[i].valor_premio = Math.round((this.cidadaos[i].trofeus/this.trofeus.total) * this.diamantes.total).toString();
      }else{
        this.cidadaos[i].valor_premio = null;
      }
    }
  }

}
