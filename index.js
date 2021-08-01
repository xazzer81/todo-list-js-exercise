// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title, description) {
  const task = {
    title: title,
    descrpition: description,
    complete: false,

    markCompleted: function() {
      this.complete = true;
    },

    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    }
  };
  return task;
}


// Print the state of a task to the console in a nice readable way


// DRIVER CODE BELOW

const task1 = newTask('Clean Cat Litter', 'Take all the 💩 out of the litter box');
const task2 = newTask('Do Laundry', "😨");
const tasks = [task1, task2];

task1.logState();
task1.markCompleted()
task1.logState();
