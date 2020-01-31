import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as dev } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // API URL for Employees
  API_EMPLOYEE = `${dev.BASE_URL}employee`;
  // API URL for Trainees
  API_TRAINEE = `${dev.BASE_URL}trainee`;

  constructor(private httpClient: HttpClient) { }

  getAllEmployeeData() {
    return this.httpClient.get(`${this.API_EMPLOYEE}`);
  }
  getOneEmployeeData(id) {
    return this.httpClient.get(`${this.API_EMPLOYEE}/${id}`);
  }
  addEmployeeData(data) {
    this.httpClient.post(`${this.API_EMPLOYEE}`, data).subscribe();
  }
  updateEmployeeData(id, data) {
    this.httpClient.patch(`${this.API_EMPLOYEE}/${id}`, data).subscribe();
  }
  deleteEmployeeData(id) {
    this.httpClient.delete(`${this.API_EMPLOYEE}/${id}`).subscribe();
  }

  getAllTraineeData() {
    return this.httpClient.get(`${this.API_TRAINEE}`);
  }
  getOneTraineeData(id) {
    return this.httpClient.get(`${this.API_TRAINEE}/${id}`);
  }
  addTraineeData(data) {
    this.httpClient.post(`${this.API_TRAINEE}`, data).subscribe();
  }
  updateTraineeData(id, data) {
    this.httpClient.patch(`${this.API_TRAINEE}/${id}`, data).subscribe();
  }
  deleteTraineeData(id) {
    this.httpClient.delete(`${this.API_TRAINEE}/${id}`).subscribe();
  }

}
