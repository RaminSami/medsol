const licence = document.getElementById('licence');
const doc_pname = document.getElementById('doc_pname');
const doc_email = document.getElementById('doc_email');
const doc_contact = document.getElementById('doc_contact');
const doc_password = document.getElementById('doc_password');
const doc_region = document.getElementById('doc_region');
const addBtn = document.getElementById('addBtn');


const database=firebase.firestore();
const rootRef=database.collection('doctor');

addBtn.addEventListener('click', (e) =>{
    e.preventDefault();
    rootRef.doc(licence.value).set({
    doc_name: doc_pname.value,
        doc_email: doc_email.value,
        doc_contact: doc_contact.value,
        doc_password: doc_password.value,
        doc_region: doc_region.value,

    })
    .then(()=> {console.log('Data entered');})
    .catch(error => {console.error(error)});
  
});

const doc_passwordd = document.getElementById('doc_passwordd');
const licencee = document.getElementById('licencee');
const logBtn = document.getElementById('logBtn');
logBtn.addEventListener('click', (e) =>{
        e.preventDefault();
        console.log("dodddcl");
});






  
