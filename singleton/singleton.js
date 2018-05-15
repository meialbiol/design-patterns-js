var TaskRepo = (function () {
     var taskRepo;
     function createRepo() {
         var taskRepo = new Object('Task');
         return taskRepo;
     }
     return {
         getInstance: function () {
             if (!taskRepo) {
                 taskRepo = createRepo();
             }
             return taskRepo;
         }
     }
    }
)();

var repor1 = TaskRepo.getInstance();
var repor2 = TaskRepo.getInstance();

if(repor1 === repor2){
    console.log("Same TaskRepo");
}