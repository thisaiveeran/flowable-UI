import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { tap, map } from 'rxjs/operators';

import { Observable, of } from 'rxjs';
import { NameValuePair, NameValuePairs } from '../models/response';

@Injectable({
  providedIn: 'root'
})
export class AttestationService {

 

  constructor(private http: HttpClient) { }

  getData(searchText: string) : Observable<NameValuePairs>{
    
    return this.http.get<NameValuePairs>(
      '/rtw/hr/vaccinated?searchText='+searchText,
      {
        observe: 'response',
      }
     
    )
    .pipe(
      map((res: any) => {
        return res.body;
      })
    );
  }


  getAttestation(data: any) {

    this.http.post(
      "/rtw/hr/generate-attestation",
      data,
      {
        responseType: 'blob'
      }
    ).subscribe(
      resp => {
        this.downloadFile(resp);
      }
    )
  }



  downloadFile(data: any) {
    //Download type xls
    const contentType = 'application/pdf';
    //Download type: CSV
   // const contentType2 = 'text/csv';
    const blob = new Blob([data], { type: contentType });
    const url = window.URL.createObjectURL(blob);
    //Open a new window to download
    // window.open(url); 
  
    //Download by dynamically creating a tag
    const a = document.createElement('a');
    const fileName = 'test';
    a.href = url;
    // a.download = fileName;
    a.download = fileName + '.pdf';
    a.click();
    window.URL.revokeObjectURL(url);
  }
}
