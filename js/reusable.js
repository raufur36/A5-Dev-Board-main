document.querySelectorAll('#completed-btn').forEach(button => {
    button.addEventListener('click', function (event) {
        event.preventDefault();
        
        const taskAssignedValue = getInnerTextByID('task-assigned');
        const devBoardValue = getInnerTextByID('dev-task');
        button.disabled = true;
        button.classList.add('opacity-50', 'cursor-not-allowed');
        document.getElementById('clear-activity').addEventListener('click', function(event){
            event.preventDefault();
            button.disabled = false;
            button.classList.remove('opacity-50', 'cursor-not-allowed');
        })

        if (taskAssignedValue > 0 && devBoardValue > 0) {
            let taskAssigned = taskAssignedValue - 1;  
            let devBoard = devBoardValue + 1;
            
            document.getElementById('task-assigned').innerText = taskAssigned;
            document.getElementById('dev-task').innerText = devBoard;
            
         
            const taskTitle = this.closest('.px-4').querySelector('[id^="quote-status"]').innerText;

            
            const assignedValue = document.getElementById('container-status');
            const p = document.createElement('p');
            p.classList.add('bg-blue-200', 'text-xs', 'rounded-lg', 'mt-4', 'px-4', 'py-2');
            p.innerText = taskTitle;
            assignedValue.appendChild(p);

            document.getElementById('clear-activity').addEventListener('click', function (event) {
                event.preventDefault();
                assignedValue.innerHTML = '';
            });
        }
    });
});


function getInnerTextByID(id) {
    return parseFloat(document.getElementById(id).innerText);
}
