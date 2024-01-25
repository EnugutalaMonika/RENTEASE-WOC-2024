const uploadButton = document.getElementById("uploadButton");
uploadButton.addEventListener("click", uploadFiles);
function uploadFiles(event) {
    event.preventDefault();
    const fileInput = document.getElementById("fileInput");
    const selectedFiles = fileInput.files;
    // Check if any files are selected
    if (selectedFiles.length === 0) {
      alert("Please select at least one file to upload.");
      return;
    }
  }
  function uploadFiles() {
    // ...
    // Create a FormData object to store the form data
    const formData = new FormData();
    // Append each selected file to the FormData object
    for (let i = 0; i < selectedFiles.length; i++) {
      formData.append("files[]", selectedFiles[i]);
    }
  }
  console.log([...formData])
   // Display full FormData content
   for (const pair of formData.entries()) {
    console.log(
      pair[0],
      pair[1].name + ", " + pair[1].size + ", " + pair[1].type + ", " + pair[1].lastModifiedDate
    );
  }
