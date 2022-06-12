const url = "https://www.vedicastro.online/api/v1/user/api/v1/getallleads";

const dateFormat = isoDate => {
    const dateArr = isoDate.split("-");
    const newFormat = `${dateArr[2]}/${dateArr[1]}/${dateArr[0]}`;
    return newFormat;
}

const fetchLeads = async() => {
    const response = await fetch(url);
    const data = await response.json();
    data.forEach(element => {
        const tableBody = document.getElementById('leadRows')
        const newRow = document.createElement('tr');
        newRow.classList.add('leadinformation');
        const leadGenerated = dateFormat(element.createdAt.slice(0, 10));
        const birthdateFormat = dateFormat(element.birthdate);
        newRow.innerHTML = `
                <td>${element._id}</td>
                <td>${element.name}</td>
                <td>${leadGenerated}</td>
                <td>${element.email}</td>
                <td>${element.contactnumber}</td>
                <td>${birthdateFormat}</td>
                <td>${element.birthtime}</td>
                <td>${element.birthplace}</td>
                <td>${element.question}</td>
        `;
        tableBody.append(newRow)
    });

    // console.log(data);
}


fetchLeads();