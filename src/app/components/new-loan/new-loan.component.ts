import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Model } from '@flowable/forms';
import { Case } from 'src/app/models/case';
import { StartCaseService } from 'src/app/services/start-case.service';

@Component({
  selector: 'app-new-loan',
  templateUrl: './new-loan.component.html',
  styleUrls: ['./new-loan.component.scss']
})
export class NewLoanComponent implements OnInit {
  props: any = null
  private caseDefId : string | undefined = "";

  constructor(private caseService: StartCaseService,
    private route: ActivatedRoute,
    private router: Router) {

  }

  caseStartFormSub = this.caseService.startCaseForm.subscribe(
   (caseDef: Case | null) => {
     console.log(caseDef);
     const formLayout = caseDef?.form;
     this.caseDefId = caseDef?.id;
     if(formLayout != null){
       formLayout.outcomes = formLayout.outcomes || [{
         label: "Start Case",
         value: "__CREATE"
       }];
       this.props = {
           config: formLayout,
 
           onOutcomePressed: (payload: Model.Payload, result: any, navigationUrl?: string, outcomeConfig?: Model.ResolvedColumn) => {
             console.log(payload);
             console.log("outcome ",outcomeConfig)
             //Make the API Call to Create a Case
             this.caseService.submitCase(this.caseDefId,payload,navigationUrl,outcomeConfig?.value);
 
           }
       }
     }
    
   }
  )
  

  ngOnInit(): void {
    this.caseService.startCase("loanAppCase");
  }
}