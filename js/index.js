const search = document.getElementById('searchbar');
const err = document.getElementById('errmessage');

search.addEventListener('input', () => {
    let info = document.getElementsByClassName('leadinformation');
    let found = false;
    Array.from(info).forEach(element => {
        let leadID = element.getElementsByTagName('td')[0].innerHTML;
        let email = element.getElementsByTagName('td')[2].innerHTML;
        if (leadID.includes(search.value) || email.includes(search.value)) {
            element.style.display = "table-row";
            found = true;
        } else {
            element.style.display = "none";
        }
    })
    if (!found) err.style.display = 'block';
    else err.style.display = 'none';
});