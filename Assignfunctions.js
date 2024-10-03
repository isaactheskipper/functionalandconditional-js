function checkTaskStatus(taskName, isCompleted, isnotcompleted) {
    if (isCompleted) {
        console.log(`Task ${taskName} is completed.`);
    } else if (isnotcompleted) {
        console.log(`Task ${taskName} is not completed yet.`);
    }
}

const taskLogger = checkTaskStatus;

taskLogger("Write report", true);     
taskLogger("Submit assignment", false); 
taskLogger("Update website", true);     
taskLogger("Clean the room", false);    