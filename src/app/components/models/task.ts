import { IPhrase } from './phrase';

export interface ITask {
    id: number;
    name: string;
    startTime: string;
    preferredTime: string;
    endTime: string;
    motivatingPhrases: IPhrase[];
    done: boolean;
    deletable: boolean;
}
export class Task implements ITask {
    id: number;
    name: string;
    startTime: string;
    preferredTime: string;
    endTime: string;
    motivatingPhrases: IPhrase[];
    done: boolean;
    deletable: boolean;
}
