function UploadFile() {
    var reader = new FileReader();
    var file = document.getElementById('pptx').files[0];
    reader.onload = function() {
        document.getElementById('fileContent').value = reader.result;
        document.getElementById('filename').value = file.name;
        document.getElementById('response_2').submit();
    }
    reader.readAsDataURL(file);
}