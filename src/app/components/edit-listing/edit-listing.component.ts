import { Component, OnInit } from '@angular/core';
import { ListingDataFormComponent } from '../listing-data-form/listing-data-form.component';
import { ActivatedRoute, Router } from '@angular/router';
import { ListingServiceService } from '../../services/listing-service.service';
import { Listing } from '../../types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-listing',
  standalone: true,
  imports: [ListingDataFormComponent, CommonModule],
  templateUrl: './edit-listing.component.html',
  styleUrl: './edit-listing.component.css'
})
export class EditListingComponent implements OnInit{
  listing: Listing | undefined;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private listingService: ListingServiceService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(id) {
      this.listingService.getListingById(id).subscribe(listing => {
        this.listing = listing;
      })
    }
  }

  onSubmit( { name, description, price }: Listing ): void {
    if(this.listing?.id) {
      this.listingService.editListing( this.listing?.id, name, description, price ).subscribe(() => {
        this.router.navigateByUrl('/my-listings');
      })
    }
  }
}
