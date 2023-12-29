import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Listing } from '../../types';
import { ListingServiceService } from '../../services/listing-service.service';

@Component({
  selector: 'app-listing-detail-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './listing-detail-page.component.html',
  styleUrl: './listing-detail-page.component.css'
})
export class ListingDetailPageComponent implements OnInit{
  isLoading: boolean = true;
  listing: Listing | undefined;
  constructor( 
    private route: ActivatedRoute,
    private listingService: ListingServiceService
  ) {  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(id) {
      this.listingService.getListingById(id).subscribe(listing => {
        this.listing = listing;
        this.isLoading = false;
      });

      this.listingService.addViewToListing(id).subscribe(() => {
        console.log('View Updated');
      });
    }
  }

}
