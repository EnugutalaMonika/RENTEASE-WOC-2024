import { initializeApp } from "firebase/app";

 const firebaseConfig = {
   apiKey: "AIzaSyCb7e2oEK_Fd-y-3tHoX6pgcr4B7bwdKdQ",
   authDomain: "filesuld.firebaseapp.com",
   projectId: "filesuld",
   storageBucket: "filesuld.appspot.com",
   messagingSenderId: "200609550484",
   appId: "1:200609550484:web:3f9b40bcc78e7ed0efe481"
 };
 const app = initializeApp(firebaseConfig);
                 /* exchange */
const forms = document.querySelector(".forms"),
links = document.querySelectorAll(".link");
links.forEach(link => {
    link.addEventListener("click", e => {
     e.preventDefault(); 
     forms.classList.toggle("show-signup");
    })
    })
      /* FILES */
    function uploadFiles() {
        const fileInput = document.getElementById('fileInput');
        const fileListDiv = document.getElementById('fileList');
    
        const files = fileInput.files;
    
        if (files.length === 0) {
            alert('Please select at least one file.');
            return;
        }
    
        fileListDiv.innerHTML = '';
    
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const fileName = file.name;
    
            const listItem = document.createElement('div');
            listItem.innerHTML = `<strong>${fileName}</strong> (${formatFileSize(file.size)})`;
            fileListDiv.appendChild(listItem);
        }
    
    }
    
    function formatFileSize(size) {
        const units = ['B', 'KB', 'MB', 'GB', 'TB'];
        let unitIndex = 0;
    
        while (size > 1024) {
            size /= 1024;
            unitIndex++;
        }
    
        return size.toFixed(2) + ' ' + units[unitIndex];
    }
   
