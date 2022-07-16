console.log("helloWorld");

function readyNow() {
    console.log('ready now')
    $('addEmployeeButton').on('click', addEmployeeData);

}

function addEmployeeData() {
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
                <td><button id="deleteEmployee">Delete</button></td>
                
                
            </tr>
    `)

}