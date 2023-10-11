import {InjectionToken} from "@angular/core";

// API URL
export const URL: string = 'https://api.instantwebtools.net/v1/passenger';

export const API_URL: InjectionToken<string> = new InjectionToken('API_URL', {
  providedIn: "root",
  factory: () => URL
})

