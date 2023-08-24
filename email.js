function sendMail(){
    let toast = document.getElementById("toast")
    
    if(document.getElementById("email").value == ""){
        toast.innerHTML="Please enter valid detail !! ";
        toast.style.color="red";
        setTimeout(()=>{
            toast.innerHTML=""; 
          },2000)

          return ;         
    }
    
    var params= {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    }
 
    const serviceId = "service_2l84i7d"
   const templateId = "template_8ol9nog";
   
   emailjs.send(serviceId , templateId , params)
    .then(
    (res) => {
      document.getElementById("name").value="",
      document.getElementById("email").value="",
      document.getElementById("message").value=""
      console.log(res)

      let check="<i class='fa-solid fa-check'></i>";
      toast.innerHTML="Successfully Send "+check;
      toast.style.color="green";

      setTimeout(()=>{
        toast.innerHTML=""; 
      },3000)

    //   alert("Your message is send succesfully");
   
    }).catch((err) => {
      console.log(err);
   });   
}
