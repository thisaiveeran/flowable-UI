import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Model } from '@flowable/forms';
import { BehaviorSubject } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { apis } from '../consts/services';
import { Case, CaseDefinitionResponse } from '../models/case';
import { FlowForm } from '../models/forms';

@Injectable({
  providedIn: 'root'
})
export class StartCaseService {

  public startCaseForm : BehaviorSubject<Case | null> = new BehaviorSubject<Case | null>(null);
  private caseDef = new Case();


  constructor( private router: Router,
    private http: HttpClient) { }

  

    startCase(caseKey: string){
      const params = new HttpParams()
       .set('key', caseKey)
       .set('latest',true);
  
      this.http.get<CaseDefinitionResponse>(apis.CASE_DEFS,
                   {
                     params: params
                   })
                   .pipe(
                     mergeMap((resp: CaseDefinitionResponse) => 
                        //this.http.get<FlowForm>(apis.CASE_START_FORM+"/"+resp.data[0].id+"/start-form")
                        this.getForm(resp)
                     )
                   )
                   .subscribe(
                     (startForm: FlowForm) =>{
                       console.log(startForm)
                       
                       this.caseDef.form = startForm;
                       
                       this.startCaseForm.next(this.caseDef);
                     }
                   )
                  
                
            
    }


    getForm(resp: CaseDefinitionResponse){
      this.caseDef.id = resp.data[0].id;
      return this.http.get<FlowForm>(apis.CASE_START_FORM+"/"+resp.data[0].id+"/start-form")
    }

    submitCase(caseDefId: string | undefined, payload: Model.Payload, result: any, navigationUrl?: string, outcome?: string) {

      this.http.post(apis.START_CASE,{
        
          values: payload,
          outcome: outcome,
          caseDefinitionId: caseDefId
        
      }).subscribe(
        (response: any) =>{
          this.router.navigate(["/taskQueue"]);
        }
      )
      
    }

}
