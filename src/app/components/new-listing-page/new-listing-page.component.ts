import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { ListingDataFormComponent } from '../listing-data-form/listing-data-form.component';
import { ListingServiceService } from '../../services/listing-service.service';
import { Listing } from '../../types';


@Component({
  selector: 'app-new-listing-page',
  standalone: true,
  imports: [CommonModule, RouterModule, ListingDataFormComponent],
  templateUrl: './new-listing-page.component.html',
  styleUrl: './new-listing-page.component.css'
})
export class NewListingPageComponent implements OnInit{

  constructor(
    private router: Router,
    private listingService: ListingServiceService
  ) {}

  ngOnInit(): void {
    
  }

  onSubmit({ name, description, price }: Listing): void {
    this.listingService.createListing(name, description, price).subscribe(() => {
      this.router.navigateByUrl('/my-listings');
    })
  }
}
