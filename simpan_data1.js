const script_URL = 'https://script.google.com/macros/s/AKfycbzIJ_iNqhA--z6RDyj04MM57U7TiczsdI6prbutiayDHCQ2W1re9x6TJB9vnOCMe1sI/exec'
const form = document.forms['final_response']

//function submitform() {
//    const name = document.getElementById('name').value;
//  const anggota = document.getElementById('anggota').value.trim().split('\n').map(line => line.trim()).filter(line => line !== '');

/*if (anggota.length === 0) {
    alert('Anggotanya siapa? Masa engga ada anggota sih :v');
    return;
} */
form.addEventListener('submit', e => {
    e.preventDefault()

    fetch(script_URL, {
            method: 'POST',
            body: new FormData(form)
        })
        .then(response => alert('Data sukses diinput'))
        .catch(error => console.error('Error', error.message))
});
