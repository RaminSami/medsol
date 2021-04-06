const healthCard = document.getElementById('healthCard');
const pname = document.getElementById('pname');
const email = document.getElementById('email');
const doctor = document.getElementById('doctor');
const contact = document.getElementById('contact');
const password = document.getElementById('password');
const region = document.getElementById('region');
const addBtn = document.getElementById('addBtn');

const database=firebase.firestore();
const rootRef=database.collection('patient');
addBtn.addEventListener('click', (e) =>{
    e.preventDefault();
    rootRef.doc(healthCard.value).set({    
        patient_name: pname.value,
        patient_email: email.value,
        patient_doctor: doctor.value,
        patient_contact: contact.value,
        patient_password: password.value,
        patient_region: region.value,
    })
    .then(()=> {console.log('Data entered');})
    .catch(error => {console.error(error)});
  
});

const passwordd = document.getElementById('passwordd');
const healthCardd = document.getElementById('healthCardd');
const logBtn = document.getElementById('logBtn');
logBtn.addEventListener('click', (e) =>{
        e.preventDefault();
        console.log("dodddcl");
});
