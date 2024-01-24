import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerserviceService {

  baseUrl='http://localhost:8082';
  
  constructor(private http:HttpClient) { }

  createPlayer(player: Object): Observable<Object> {
    console.log("inside service")
    console.log(player);
    return this.http.post(`${this.baseUrl}/save`, player); 
  }

  getAllPlayer():any
  {
    return this.http.get(`${this.baseUrl}/getAll`);
  }
  
  deletePlayer(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`, { responseType: 'text' });
  }

  
  getOnePlayer(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/get/${id}`);
  }

  updatePlayer(player:object){
    return this.http.put(`${this.baseUrl}/update`,player);
  }
}
