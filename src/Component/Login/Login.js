import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import UseAuth from '../FirebaseInitConfin/Firebase.init';
import UseAuthh from '../Hooks/useAuth';
import UseFirebase from '../useFirebase/useFirebase';
import './Login.css';

const Login = () => {
   const { googleSignin, signOutUser, data } = UseAuthh();
   console.log(data);
   const { email, photoURL } = data;
   const locat = useLocation()
   const navigat = useNavigate()
   const url = locat.state?.from || "/shop";



   const googleHandel = () => {
      googleSignin()
         .then(result => {
            // const user = result.user;
            navigat(url)

         })
   }

   return (

      <div class="global-container">
         {
            data.email && <div>
               <h2>{email}</h2>
               <img src={photoURL} alt="" />

            </div>
         }
         <div className="card login-form">
            <div className="card-body">
               <h3 className="card-title text-center">Log in to Codepen</h3>
               <div className="card-text">

                  <div className="alert alert-danger alert-dismissible fade show" role="alert">Incorrect username or password.</div>
                  <form onSubmit="">
                     <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control form-control-sm" id="exampleInputEmail1" aria-describedby="emailHelp" />
                     </div>
                     <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <Link to="" >Forgot password?</Link>

                        <input type="password" class="form-control form-control-sm" id="exampleInputPassword1" />

                        <label for="exampleInputPassword1">Re-Password</label>
                        <input type="password" class="form-control form-control-sm" id="exampleInputPassword1" />
                     </div>
                     <button type="submit" class="btn btn-primary btn-block">sibmit</button>

                     <div className="sign-up">
                        <h6>
                           Don't have an account?
                           <Link to="/register"> register</Link>
                        </h6>
                     </div>
                  </form>
                  <div>...............................</div>
                  {
                     data.email ? <button onClick={signOutUser} >logout</button> : <button onClick={googleHandel} >google signin</button>
                  }



               </div>
            </div>
         </div>
      </div>
   );
};

export default Login;