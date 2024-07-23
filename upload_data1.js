let uploadFile = {}

$('input[type="file"]').on('change', function() {
    let files = []
    for (var i = 0; i < $(this)[0].files.length; i++) {
        files.push($(this)[0].files[i])

    }
    files.forEach((file, i) => {
        let reader = new FileReader()
        reader.onloadend = (e) => {
            uploadFile[$(this).attr('id') + (i + 1)] = {
                data: e.target.result.split(',')[1],
                name: file.name,
                type: file.type
            }
        }
        reader.readAsDataURL(file)
    })
})

function submitData() {
    var input1 = document.getElementById("name2")
    let upload1 = document.getElementById("ipynb")
    let upload2 = document.getElementById("pptx")
    let button = document.getElementById("button2")

    let obj = {
        input1:input1.value,
        uploadFile: uploadFile
    }

    if(input1.value =="" || upload1.value ==""|| upload1.value ==""){
        alert("Tolong diisi yaa")
    }else{
        button.innerHTML ="Mengirim data....";
        
    }

}
























/*const form = document.getElementById('response_2')
form.addEventListener('submit',function(event) {
    event.preventDefault();
    var file_ipynb = form.getElementById('ipynb')
    var filen 

})

    
    var file = document.getElementById('pptx').files[0];
    reader.onload = function() {
        document.getElementById('fileContent').value = reader.result;
        document.getElementById('filename').value = file.name;
        document.getElementById('response_2').submit();
    }
    reader.readAsDataURL(file); */