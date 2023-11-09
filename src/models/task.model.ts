export type Task = {
    id?: number;
    name: string;
    description: string;
    startDate: Date;
    deadLine: Date;
    subTasks: [];
    priority: number;
    status: number;
}