import { Component, OnInit } from '@angular/core';
import { Emploi } from '../core/article';

@Component({
  selector: 'app-offreemploi',
  templateUrl: './offreemploi.component.html',
  styleUrls: ['./offreemploi.component.css']
})
export class OffreemploiComponent implements OnInit {
  title:string="welcome to article page!"
  emploitList!:Emploi[];
  nombre:number=0;
  textsearch:string="";
  test:boolean=false;
  constructor() { }

  ngOnInit(): void {
    this.emploitList=[
    {reference:"ref1",titre:"emploi1",entreprise:"entreprise1",etat:true},
    {reference:"ref2",titre:"emploi2",entreprise:"entreprise2",etat:false},
    {reference:"ref3",titre:"emploi3",entreprise:"entreprise3",etat:true}

  ];
  }
  Bilan()
  {this.nombre=0;
    this.test=true;
  
    for(let i=0;i<this.emploitList.length;i++)
{
  if(this.emploitList[i].etat==true)
  {
this.nombre++;
  }
}
  }
  Bilan2()
  {this.nombre=0;
    this.test=true;
    this.emploitList.map((x,i)=>
    {
      x.etat&&this.nombre++
      return this.nombre;
    })
  
  }
  Search()
  {
    this.emploitList=this.emploitList.filter((x)=>
    { 
      return x.entreprise.match(this.textsearch)
     })
  }


}
