import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService
 {
   constructor() { }
   
   GetChkPrime()
   {
    if ((11 % 2) == 0)
   {
     return true;
   } 
   else
   {
    return false ;
   }
  }
}
  


