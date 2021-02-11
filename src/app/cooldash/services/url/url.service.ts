import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class UrlService {
  baseUrl = "http://15.207.74.128:3000/v1/admin";
  imageUrl = "http://15.207.74.128:3000";

  constructor() {}
  login = `${this.baseUrl}/login`;
}
