
(function(){  

    var taskTitle = '';
    var url = '';
    // use selection
    if (window.getSelection) {
        taskTitle = window.getSelection().toString();
    }
    // nothing selected? show prompt
    if (taskTitle == null || taskTitle == "") {
        taskTitle = prompt("Enter a task description or leave empty to use this site's title:");
    }
    // prompt canceled? return
    if (taskTitle == null) {
        return false;
    }
    // nothing entered? use site's title
    if (taskTitle == "") {
        taskTitle = document.title
    }
    // redirect to THL
    self.location = "thehitlist:///inbox/tasks?method=POST&title=" + encodeURIComponent(taskTitle) + "&url=" + encodeURIComponent(self.location);

    return false;
})(); 

