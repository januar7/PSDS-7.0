//const script_URL = 'https://script.google.com/macros/s/AKfycbzIJ_iNqhA--z6RDyj04MM57U7TiczsdI6prbutiayDHCQ2W1re9x6TJB9vnOCMe1sI/exec'
// const form = document.forms['final_response']


function submitform() {
    const selectElement = document.getElementById('choose');
    switch (selectElement.value) {
        case "opsi1":
            window.open('https://github.com/januar7/PSDS-7.0/blob/main/Soal/Soal_1.pdf')

        case "opsi2":
            window.open('https://github.com/januar7/PSDS-7.0/blob/main/lorem-ipsum.pdf')

        case "opsi3":
            window.open('https://github.com/januar7/PSDS-7.0/blob/main/lorem-ipsum.pdf')

    }
}

//const anggota = document.getElementById('anggota').value.trim().split('\n').map(line => line.trim()).filter(line => line !== '');

/*if (anggota.length === 0) {
    alert('Anggotanya siapa? Masa engga ada anggota sih :v');
    return;

}
if (anggota.length > 4) {
    alert('Maksimal 4 anggota yang bisa ditambahkan.');
    return;
}*/

const form = document.getElementById('response_1');
form.addEventListener('submit', e => {
    e.preventDefault();
    const script_URL = e.target.action;

    fetch(script_URL, {
            method: 'POST',
            body: new FormData(form)
        })
        .then(response => alert('Data sukses diinput'))
        .catch(error => console.error('Error!!', error.message))
    form.reset()
});
