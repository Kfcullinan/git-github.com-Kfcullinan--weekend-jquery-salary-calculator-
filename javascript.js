console.log("helloWorld");
$(readyNow);
function readyNow() {
    console.log('ready now');
    $('#addEmployeeButton').on('click', addEmployeeData);
    $('#addedEmployees').on('click', '.deleteEmployeeButton', removeEmployeeData);

}

function addEmployeeData() {
    console.log('in addEmployee')
    let firstName = $('#firstNameInput').val();
    let lastName = $('#lastNameInput').val();
    let id = $('#idInput').val();
    let title = $('#titleInput').val();
    let yearlySalary = $('#annualSalaryInput').val();
    $('#employees').append(`
    <tr>
                <td>${firstName}</td>
                <td>${lastName}</td>
                <td>${id}</td>
                <td>${title}</td>
                <td>${yearlySalary}</td>
                <td><button>Delete</button></td>
                
                
            </tr>
    `)

}




    function removeEmployeeData() {
        console.log('removed employee data');
        $(this).closest('tr').remove();


    }

//create employee object array and then run this function????



    // function monthlyTotalSalaries(){
    //     console.log('show me the money');
    //     const overHead = $('#monthlyTotal');-------> add #monthlyTotal etc in html
    //     let total = 0;
    //     for(let i = 0; i < employee.length; i++){
    //         total += Number(employee[i].annualSalary);
    //         if(total > 20000){
    //         console.log('womp womp', total);
    //             $('#monthlyTotal').css('background-color', 'red')-------> add in css or html?
    //         }
    //     }
    //     console.log('total monthly', total);
    
    //     const totalMonth = total
        
    //     totalmonth.empty();
    //     totalmonth.append(monthlyTotal)
    
    // } 

    