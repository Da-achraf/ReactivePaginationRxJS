import {Inject, Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {filter, map, tap} from "rxjs";

import {API_URL} from "./config";
@Injectable({
  providedIn: 'root'
})
export class PaginationService implements OnInit{

  last: number = 0;

  constructor(
    private http: HttpClient,
    @Inject(API_URL) private url: string
  ) {
  }

  ngOnInit(): void {
  }

  getPages(page: number){
    return this.http
      .get(`${this.url}?page=${page}&size=10`)
      .pipe(
        map((res: any) => res.data),
        tap((data) => console.log(data))
      )
  }

}
