import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class OnTVService {

  baseUrl: string;
  apiKey: string;
  language: string;
  region: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'https://api.themoviedb.org/3/';
    this.apiKey = 'b202c462e1bd0908be449b652eac27f5';
    this.language = 'en-US';
    this.region = 'US'
  }

  getTvOnTheAir(page: number): Observable<any> {
    return this.http.get(`${this.baseUrl}tv/on_the_air?api_key=${this.apiKey}&page=${page}&language=${this.language}`)
  }

  getTVAiringToday(page: number): Observable<any> {
    return this.http.get(`${this.baseUrl}tv/airing_today?api_key=${this.apiKey}&page=${page}&language=${this.language}`)
  }

  getPopularTVShow(page: number): Observable<any> {
    return this.http.get(`${this.baseUrl}tv/popular?api_key=${this.apiKey}&page=${page}&language=${this.language}`)
  }

  getTVShow(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}tv/${id}?api_key=${this.apiKey}&language=${this.language}`)
  }

  getGenres(): Observable<any> {
    return this.http.get(`${this.baseUrl}genre/tv/list?api_key=${this.apiKey}&language=${this.language}`)
  }

  getTVShowByGenre(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}discover/tv?api_key=${this.apiKey}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=${id}&include_null_first_air_dates=false`);
  }

}
