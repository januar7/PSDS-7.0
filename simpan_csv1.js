function generateCSV() {
    const name = document.getElementById('name').value;
    const anggota = document.getElementById('anggota').value.trim().split('\n').map(line => line.trim()).filter(line => line !== '');

    if (anggota.length === 0) {
        alert('Anggotanya siapa? Masa engga ada anggota sih :v');
        return;
    }

    let csvContent = 'data:text/csv;charset=utf-8,Name,Anggota\n';
    anggota.forEach(member => {
        csvContent += `${name},${member}\n`;
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'data.csv');
    document.body.appendChild(link);

    link.click();
}