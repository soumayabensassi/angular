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
  constructor() { }

  ngOnInit(): void {
    this.emploitList=[
    {reference:"ref1",titre:"emploi1",entreprise:"entreprise1",etat:true},
    {reference:"ref2",titre:"emploi2",entreprise:"entreprise2",etat:false}
  ];
  }

}
