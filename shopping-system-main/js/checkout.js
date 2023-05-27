const firebaseConfig = {
    apiKey: "AIzaSyBq1sGMub0Y33_9WKrgiEx2fOnz5_Yuhrw",
    authDomain: "mini-project-24aba.firebaseapp.com",
    databaseURL: "https://mini-project-24aba-default-rtdb.firebaseio.com",
    projectId: "mini-project-24aba",
    storageBucket: "mini-project-24aba.appspot.com",
    messagingSenderId: "954596002898",
    appId: "1:954596002898:web:e850b921a96eea13bf238b"
  };
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var date = getElementVal("date");
    var msgContent = getElementVal("msgContent");
  
    saveMessages(name, date, msgContent);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (name, date, msgContent) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      date: date,
      msgContent: msgContent,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };