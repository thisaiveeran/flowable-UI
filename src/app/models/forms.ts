export interface FlowForm {
    id:                string;
    name:              string;
    description:       string;
    key:               string;
    version:           number;
    formKey:           string;
    dialogSize:        string;
    dialogTitle:       string;
    dialogDescription: string;
    metadata:          any;
    rows:              any[];
    section:           any;
    outcomes:          any[];
    dataModel:         any;
    i18n:              any;
}