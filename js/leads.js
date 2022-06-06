const url = "http://www.vedicastro.co.in/api/v1/user/api/v1/getallleads";

const fetchLeads = async() => {
    const response = await fetch(url);
    const data = await response.json();
    data.forEach(element => {
        const tableBody = document.getElementById('leadRows')
        const newRow = document.createElement('tr');
        newRow.classList.add('leadinformation');
        newRow.innerHTML = `
                <td>${element._id}</td>
                <td>${element.name}</td>
                <td>${element.email}</td>
                <td>${element.contactnumber}</td>
                <td>${element.birthdate}</td>
                <td>${element.birthtime}</td>
                <td>${element.birthplace}</td>
                <td>${element.question}</td>
        `;
        tableBody.append(newRow)
    });

    // console.log(data);
}


fetchLeads();