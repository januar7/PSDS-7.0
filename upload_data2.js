function fromsubmit(url, data) {
    $.ajax({
        url: url,
        type: "POST",
        contentType: false,
        processData: false,
        data: data,
        sucess: function(res) {
            if (res) {
                alert('Thanks')
            }
        },
        error: function(error) {
            console.log('error', error)
        }
    })
}
$(document).ready(function() {
    console.log('Submit data upload to test')
    $(document).on('submit', '#response_2', function(ev) {
        ev.preventDefault();
        console.log("form diisi");

        var url = 'https:docs.google.com/forms/d/e/1FAIpQLSeSvPAgvH6kjxXaKFG5njmPGbaskqA7BDakIbtLSX6Z-7jhGQ/viewform?';
        var form_data = new FormData();
        form_data.append('entry.2143613498', $('#name2').val())
        form_data.append('entry.381151764', $('#ipynb').val())
        form_data.append('entry.919642963', $('#pptx').val())

        fromsubmit(url, form_data)



    })

})