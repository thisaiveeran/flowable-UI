
export class NameValuePair {
    name!: string;
    value!: string;
   
}

export class VaccineInfo {
    vaccineId: number;
    vaccineCode: string;
    vaccineDescription: string;
    numberOfDoses: number;
    gapBetweenDoses: number;
}

export declare type Vaccines = VaccineInfo[];

export declare type NameValuePairs = NameValuePair[];
