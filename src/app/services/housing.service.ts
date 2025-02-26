import { Injectable } from '@angular/core';
import { HousingLocation } from '../interface/housing-location';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  // protected housingLocationList: HousingLocation[]= [
  //   {
  //     id: 0,
  //     name: 'Acme Fresh Start Housing',
  //     city: 'Chicago',
  //     state: 'IL',
  //     photo: 'https://www.w3schools.com/bootstrap4/img_avatar1.png',
  //     availableUnits: 4,
  //     wifi: true,
  //     laundry: true
  //   },
  //   {
  //     id: 1,
  //     name: 'A113 Transitional Housing',
  //     city: 'Santa Monica',
  //     state: 'CA',
  //     photo: 'https://www.w3schools.com/bootstrap4/img_avatar1.png',
  //     availableUnits: 0,
  //     wifi: false,
  //     laundry: true
  //   },
  //   {
  //     id: 2,
  //     name: 'Warm Beds Housing Support',
  //     city: 'Juneau',
  //     state: 'AK',
  //     photo: 'https://www.w3schools.com/bootstrap4/img_avatar1.png',
  //     availableUnits: 1,
  //     wifi: false,
  //     laundry: false
  //   },
  //   {
  //     id: 3,
  //     name: 'Homesteady Housing',
  //     city: 'Chicago',
  //     state: 'IL',
  //     photo: 'https://www.w3schools.com/bootstrap4/img_avatar1.png',
  //     availableUnits: 1,
  //     wifi: true,
  //     laundry: false
  //   },
  //   {
  //     id: 4,
  //     name: 'Happy Homes Group',
  //     city: 'Gary',
  //     state: 'IN',
  //     photo: 'https://www.w3schools.com/bootstrap4/img_avatar1.png',
  //     availableUnits: 1,
  //     wifi: true,
  //     laundry: false
  //   },
  //   {
  //     id: 5,
  //     name: 'Hopeful Apartment Group',
  //     city: 'Oakland',
  //     state: 'CA',
  //     photo: 'https://www.w3schools.com/bootstrap4/img_avatar1.png',
  //     availableUnits: 2,
  //     wifi: true,
  //     laundry: true
  //   },
  //   {
  //     id: 6,
  //     name: 'Seriously Safe Towns',
  //     city: 'Oakland',
  //     state: 'CA',
  //     photo: 'https://www.w3schools.com/bootstrap4/img_avatar1.png',
  //     availableUnits: 5,
  //     wifi: true,
  //     laundry: true
  //   },
  //   {
  //     id: 7,
  //     name: 'Hopeful Housing Solutions',
  //     city: 'Oakland',
  //     state: 'CA',
  //     photo: 'https://www.w3schools.com/bootstrap4/img_avatar1.png',
  //     availableUnits: 2,
  //     wifi: true,
  //     laundry: true
  //   },
  //   {
  //     id: 8,
  //     name: 'Seriously Safe Towns',
  //     city: 'Oakland',
  //     state: 'CA',
  //     photo: 'https://www.w3schools.com/bootstrap4/img_avatar1.png',
  //     availableUnits: 10,
  //     wifi: false,
  //     laundry: false
  //   },
  //   {
  //     id: 9,
  //     name: 'Capital Safe Towns',
  //     city: 'Portland',
  //     state: 'OR',
  //     photo: 'https://www.w3schools.com/bootstrap4/img_avatar1.png',
  //     availableUnits: 6,
  //     wifi: true,
  //     laundry: true
  //   }
  // ];

url = 'http://localhost:3000/locations';

  constructor() { }

  // getAllHousingLocation():HousingLocation[] {
  //   return this.housingLocationList;
  // }

  // getAllHousingLocationById(id:Number):HousingLocation| undefined {
  //   return this.housingLocationList.find(housingLocation => housingLocation.id === id);
  // }

  async getAllHousingLocation(): Promise<HousingLocation[]> {
    const data = await fetch(this.url);
    return await data.json() ?? []
  }

  async getAllHousingLocationById(id:Number):Promise<HousingLocation| undefined> {
    const data = await fetch(`${this.url}/${id}`)
    return await data.json() ?? {};
  }


  submitApplication(firstName:string,lastName:string,email:string){
console.log(firstName,lastName,email)
  }
}
