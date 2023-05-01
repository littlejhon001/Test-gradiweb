
import { useState } from "react";
import Test from "./components/Test";

function App() {

  const [email, setEmail] = useState("");

// validacion de email

  const emailValidation =()=>{
    const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if(emailRegex.test(email)){
      Swal.fire({
        title: 'success!',
        text: 'The email was sent',
        icon: 'success',
        confirmButtonText: 'Close'
      })
    }else {
      Swal.fire({
        title: 'Error!',
        text: 'The email is not valid',
        icon: 'error',
        confirmButtonText: 'Oakay'
      })
    }
  }
  const handleOnChage =(e)=>{
    setEmail(e.target.value);
  }


  return (
    <>
      <div className="contaner-fliud">
        <p className="text-center bg-color-1">Gratis verzending vanaf €30</p>
        <div className="container  me-5 mb-5 mt-5">
          <h1>
            Discover our <br /> planet-friendly offer
          </h1>
        </div>
        <Test></Test>
        <div className="d-flex justify-content-center  mb-0">
          <button className="btn-browse">Browse all products</button>
        </div>

        <div className="img-bg m-0"></div>

        <div className="container-form text-center mb-2">
          <h2 className="">Join the green revolution without commitment</h2>
          <p className="mt-5">
            If you are missing something and don't want to miss future <br />{" "}
            promotions or our future products
          </p>

          <div className="d-flex justify-content-center mt-5 m-2 ">
            
            <input
             type="email" 
             value={email}  
             className="css-input" 
             placeholder="Your email"
            onChange={handleOnChage}
             />
            <button className=" ms-2 btn-browse"
            onClick={emailValidation}
            >SEND</button>
          </div>
        </div>
      </div>


    </>
  );
}

export default App;
