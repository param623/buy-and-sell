import { Component, OnInit } from '@angular/core';
import { Listing } from '../../types';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ListingServiceService } from '../../services/listing-service.service';

@Component({
  selector: 'app-listing-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './listing-page.component.html',
  styleUrl: './listing-page.component.css'
})
export class ListingPageComponent implements OnInit{

  //Declaration of variables
  listings: Listing[] = [];
  constructor(
    private listingService: ListingServiceService
  ) { }

  ngOnInit(): void {
    this.listingService.getListings().subscribe(listings => {
      this.listings = listings;
    });
  }

}
