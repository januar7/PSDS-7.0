//const script_URL = 'https://script.google.com/macros/s/AKfycbzIJ_iNqhA--z6RDyj04MM57U7TiczsdI6prbutiayDHCQ2W1re9x6TJB9vnOCMe1sI/exec'
// const form = document.forms['final_response']


function submitform() {
    const selectElement = document.getElementById('choose');
    switch (selectElement.value) {
        case "opsi1":
            window.open('https://github.com/januar7/PSDS-7.0/raw/main/Soal/Soal1%20Proyek%20Akhir%20Kelas%20Mahir.pdf');
            break;

        case "opsi2":
            window.open('https://github.com/januar7/PSDS-7.0/raw/main/Soal/Soal2%20Proyek%20Akhir%20Kelas%20Mahir.pdf');
            break;

        case "opsi3":
            window.open('https://github.com/januar7/PSDS-7.0/raw/main/Soal/Soal3%20Proyek%20Akhir%20Kelas%20Mahir.pdf);
            break;
        case "opsi4":
            window.open('https://github.com/januar7/PSDS-7.0/raw/main/Soal/Soal4%20Proyek%20Akhir%20Kelas%20Mahir.pdf');
            break;
        case "opsi5":
            window.open('https://github.com/januar7/PSDS-7.0/raw/main/Soal/Soal5%20Proyek%20Akhir%20Kelas%20Mahir.pdf');
            break;
        case "opsi6":
            window.open('https://github.com/januar7/PSDS-7.0/raw/main/Soal/Soal6%20Proyek%20Akhir%20Kelas%20Mahir.pdf');
            break;

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
window.addEventListener("load", function() {
const form = document.getElementById('response_1');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const script_URL = e.target.action;

    fetch(script_URL, {
            method: 'POST',
            body: new FormData(form),
        })
        .then(() => {
            alert('Data sukses diinput');
        })
        //     .catch(error => console.error('Error!!', error.message))
    form.reset()
});
});
});
