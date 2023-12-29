import { Injectable } from '@angular/core';
import { Listing } from '../types';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class ListingServiceService {

  constructor(
    private http: HttpClient
  ) { }

  apiUrl: string = "http://localhost:8000"

  getListings(): Observable<Listing[]> {
    return this.http.get<Listing[]>(this.apiUrl + '/api/listings');
  }

  getListingById(id: string): Observable<Listing> {
    return this.http.get<Listing>(this.apiUrl + '/api/listings/' + id);
  }

  addViewToListing(id: string): Observable<Listing> {
    return this.http.post<Listing>(
      this.apiUrl + `/api/listings/${id}/add-view`, 
      {}, 
      httpOptions,
    );
  }

  getListingsForUser(): Observable<Listing[]> {
    return this.http.get<Listing[]>(this.apiUrl + '/api/users/12345/listings');
  }

  deleteListing(id: string): Observable<any> {
    return this.http.delete<any>(this.apiUrl + `/api/listings/${id}`);
  }

  createListing(name: string, description: string, price: number): Observable<Listing> {
    return this.http.post<Listing>(
      this.apiUrl + '/api/listings', 
      { name, description, price },
      httpOptions,
    );
  }

  editListing(id: string, name: string, description: string, price: number): Observable<Listing> {
    return this.http.post<Listing>(
      this.apiUrl + `/api/listings/${id}`,
      { name, description, price },
      httpOptions,
    );
  }
}
