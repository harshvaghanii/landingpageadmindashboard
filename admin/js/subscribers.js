const url = "http://www.vedicastro.online/api/v1/subscriber/api/v1/getallsubscribers";
const fetchSubscribers = async() => {
    const response = await fetch(url);
    const data = await response.json();

    data.forEach(element => {
        const tableBody = document.getElementById('subscriberRow')
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <th scope="row">${element.name}</th>
                <td>${element.email}</td>
        `;
        tableBody.append(newRow)
    });
}
fetchSubscribers();