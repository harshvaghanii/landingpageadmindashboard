const url = "http://www.vedicastro.online/api/v1/subscriber/api/v1/getallsubscribers";
const fetchSubscribers = async() => {
    const response = await fetch(url);
    const data = await response.json();

    data.forEach(element => {
        const tableBody = document.getElementById('subscriberRow')
        const newRow = document.createElement('tr');
        newRow.classList.add('subinformation');
        newRow.innerHTML = `
            <th scope="row">${element.name}</th>
                <td>${element.email}</td>
        `;
        tableBody.append(newRow)
    });
}
fetchSubscribers();


const search = document.getElementById('subsearch');
const err = document.getElementById('suberrmessage');

search.addEventListener('input', () => {
    let info = document.getElementsByClassName('subinformation');
    Array.from(info).forEach(element => {
        let email = element.getElementsByTagName('td')[0].innerHTML;
        if (email.includes(search.value)) {
            element.style.display = "table-row";
            err.style.display = 'none';
        } else {
            element.style.display = "none";
            err.style.display = 'block';
        }
    })
})