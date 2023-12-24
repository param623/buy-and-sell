import { Component, OnInit } from '@angular/core';
import { Listing } from '../../types';
import { fakeListings } from '../../fake-data';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

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
  constructor() {

  }

  ngOnInit(): void {
    this.listings = fakeListings;
  }

}
