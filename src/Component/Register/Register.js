import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
   return (
      <div>
         <div id="contentContainer" class="container">
            <div class="row">
               <div id="realContent" class="col-xs-12">
                  <div class="row">
                     <div class="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-xs-12 col-sm-offset-0">
                        <h1>Sign Up</h1>
                     </div>
                  </div>
                  <div class="row">
                     <section class="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-xs-12 col-sm-offset-0" />
                     <div class="well well-lg">
                        <div class="row">
                           <div class="col-sm-6 col-xs-12">
                              <div class="row">
                                 <div class="col-xs-12">
                                    <h3>Welcome</h3></div>
                              </div>
                              <div class="row">

                                 <div class="col-xs-12">
                                    <p class="lead">Register now for <span class="text-success">FREE</span></p>
                                    <ul class="list-unstyled">
                                       <li><span class="fa fa-check text-success"></span> Participate in this contest</li>
                                       <li><span class="fa fa-check text-success"></span> Leaderboard feature to see who is on top</li>
                                       <li><span class="fa fa-check text-success"></span> Solve the problems faster than others to win</li>
                                       <li><span class="fa fa-check text-success"></span> Choose to code in your favorite language</li>
                                    </ul>
                                 </div>
                              </div>
                           </div>

                           <div class="col-sm-6 col-xs-12">
                              <div class="row">
                                 <div class="col-xs-12">
                                    <form id="signupForm" method="post" accept-charset="UTF-8" validate>
                                       <div class="input-group">
                                          <span class="input-group-addon"><i class="fa fa-user-secret icon-2x"></i></span>
                                          <input id="name" class="form-control input-lg" placeholder="Full Name" maxlength="100" type="text" name="name" />
                                       </div>
                                       <div class="input-group">
                                          <span class="input-group-addon"><i class="icon-user icon-2x"></i></span>
                                          <input id="handle" class="form-control input-lg" placeholder="Username" maxlength="100" type="text" name="handle" />
                                       </div>
                                       <div class="input-group">
                                          <span class="input-group-addon"><i class="icon-envelope icon-2x"></i></span>
                                          <input id="email" class="form-control input-lg" placeholder="Email" maxlength="100" type="email" name="email" validate />
                                       </div>
                                       <div class="input-group">
                                          <span class="input-group-addon"><i class="icon-asterisk icon-2x"></i></span>
                                          <input id="password" class="form-control input-lg" placeholder="Password" maxlength="60" type="password" name="password" />
                                       </div>
                                       <div class="input-group">
                                          <span class="input-group-addon"><i class="icon-asterisk icon-2x"></i></span>
                                          <input id="password_confirmation" class="form-control input-lg" placeholder="Confirm Password" maxlength="60" type="password" name="password_confirmation" />
                                       </div>
                                       <div class="form-group">
                                          <div class="g-recaptcha" data-sitekey="6LdJRxETAAAAABZT0MUNO1r5at_-JuSGeAPTqIM6"></div>
                                       </div>
                                       <div class="form-group">
                                          <button type="submit" id="btn-signup" class="btn btn-block btn-primary btn-lg">Sign Up</button>
                                       </div>
                                    </form>
                                    <div class="form-group">
                                       <div class="topCushion">Already a member?  <Link to="/login">login</Link> </div>
                                    </div>
                                 </div>

                              </div>

                           </div>

                        </div>

                     </div>
                  </div>

               </div>

            </div >

         </div >

      </div >
   );
};

export default Register;