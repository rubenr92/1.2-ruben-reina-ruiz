class Day {
    num: Number;
    tasks: Todo[];

    assignTask(task:Todo){
        this.tasks.push(task)
    }

}

class Todo {
    description: string;
    completed: boolean;
  
    constructor(description: string) {
      this.description = description;
      this.completed = false;
    }
  
    toggle() {
      this.completed = !this.completed;
    }
}
