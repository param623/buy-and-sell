import { Component, OnInit } from '@angular/core';
import { fakeMyListings } from '../../fake-data';
import { Listing } from '../../types';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-my-listings-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './my-listings-page.component.html',
  styleUrl: './my-listings-page.component.css'
})
export class MyListingsPageComponent implements OnInit{

  listings: Listing[] = [];
  constructor() {}

  ngOnInit(): void {
     this.listings = fakeMyListings;
  }

  onDeleteClicked(listingId: string): void {
    alert(`Deleting`)
  }
}
