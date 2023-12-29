import { Component, OnInit } from '@angular/core';
import { Listing } from '../../types';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ListingServiceService } from '../../services/listing-service.service';

@Component({
  selector: 'app-my-listings-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './my-listings-page.component.html',
  styleUrl: './my-listings-page.component.css'
})
export class MyListingsPageComponent implements OnInit{

  listings: Listing[] = [];
  constructor(
    private listingService: ListingServiceService
  ) {}

  ngOnInit(): void {
     this.listingService.getListingsForUser().subscribe(listings => {
      this.listings = listings;
     });
  }

  onDeleteClicked(listingId: string): void {
    this.listingService.deleteListing(listingId).subscribe(() => {
      this.listings = this.listings.filter(listing => {
        listing.id !== listingId
      });
    });
  }
}
