import { FlowForm } from "./forms";

export interface CaseDefinitionResponse {
    data:  CaseDefinition[];
    total: number;
    start: number;
    sort:  string;
    order: string;
    size:  number;
}

export interface CaseDefinition {
    id:                       string;
    url:                      string;
    key:                      string;
    version:                  number;
    name:                     string;
    description:              string;
    tenantId:                 string;
    deploymentId:             string;
    deploymentUrl:            string;
    resource:                 string;
    diagramResource:          string;
    category:                 string;
    graphicalNotationDefined: boolean;
    startFormDefined:         boolean;
}

export class Case {
    id: string;
    form: FlowForm;
}
