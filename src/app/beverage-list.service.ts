import { Injectable } from '@angular/core';
import { Beverages } from './beverages';

@Injectable({
  providedIn: 'root'
})
export class BeverageListService {
defaultBeverages: Beverages[] = [
{name: 'Cowboy Martini'},
{name: 'Texas Whiskey Revival'},
{name: 'Ginger Rogers Cocktail'},
{name: 'Mexican Mule'}
]
constructor() { }

}
