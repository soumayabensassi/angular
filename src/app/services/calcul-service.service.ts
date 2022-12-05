import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculServiceService {
i:number=0;
  constructor() { }
  getNumberOf(list:any[], critiria:string, value:any){
return list.filter((o)=>o[critiria]==value).length;
}
}                                  