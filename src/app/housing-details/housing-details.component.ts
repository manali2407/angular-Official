import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../services/housing.service';
import { HousingLocation } from '../interface/housing-location';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-housing-details',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule],
  templateUrl: './housing-details.component.html',
  styleUrl: './housing-details.component.css'
})
export class HousingDetailsComponent {
   
  route: ActivatedRoute = inject(ActivatedRoute);
  

  housingService = inject(HousingService);
  housingLocation: HousingLocation | undefined;

  applyForm = new FormGroup({
    firstName:new FormControl(''),
    lastName:new FormControl(''),
    email:new FormControl(''),
  })


  constructor(){
   const housingLocationId = Number(this.route.snapshot.params['id']);
    // this.housingLocation = this.housingService.getAllHousingLocationById(housingLocationId)
  
    this.housingService.getAllHousingLocationById(housingLocationId).then((housingLocation)=>{
 this.housingLocation = housingLocation
    })
  
  }



  submitApplication(){
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? '',
    )
  }

}
