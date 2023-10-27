function sendMail(event) {
    event.preventDefault(); // This prevents the default form submission behavior

    var params = {
        name: document.getElementById("firstname").value,
        lastname: document.getElementById("lastname").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    };

    const serviceID = "service_s6xfqc9";
    const templateID = "template_saltgqi";

    emailjs.send(serviceID, templateID, params)
    .then(res=>{
        document.getElementById("firstname").value = "";
        document.getElementById("lastname").value = "";
        document.getElementById("email").value = "";
        document.getElementById("subject").value = "";
        document.getElementById("message").value = "";
        // console.log(res);
        // alert("Your message sent successfully!!");
    })
    // .catch(err=>console.log(err));
}
