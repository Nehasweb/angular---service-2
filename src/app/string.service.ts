import { Injectable } from '@angular/core';
import { count } from 'rxjs/internal/operators/count';

@Injectable({
  providedIn: 'root'
})
export class StringService 
{
  
  constructor() { }

  GetCountCapital( )
  {
    var str = " ";

    console.log(
      (str.match(/[A-Z]/g) || "ANGULAR").length
    )
    {
      return count ;
    }
  }
}
