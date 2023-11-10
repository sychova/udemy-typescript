import { Task } from './tasks.entity';

export class TasksController {
  constructor(private taskRepository) {}

  public async getAll(): Promise<Task[]> {}
}
