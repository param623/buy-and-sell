import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { ListingDataFormComponent } from '../listing-data-form/listing-data-form.component';


@Component({
  selector: 'app-new-listing-page',
  standalone: true,
  imports: [CommonModule, RouterModule, ListingDataFormComponent],
  templateUrl: './new-listing-page.component.html',
  styleUrl: './new-listing-page.component.css'
})
export class NewListingPageComponent implements OnInit{

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
    
  }

  onSubmit(): void {
    alert('Creating a new listing.');
    this.router.navigateByUrl('/my-listings');
  }
}
