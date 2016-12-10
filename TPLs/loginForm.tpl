<!DOCTYPE html>
<html >
   <head>
      <meta charset="UTF-8">
      <title>Login Form</title>
      <link rel="stylesheet" href="resources/style.css">
   </head>
   <body>
      <h1 class = "message">(:message:)</h1>
      <div class="login">
         <div class="screen">
            <div class="app-title">
               <h1>Accedi</h1>
            </div>
            <form class="login-form" action="/home" method = "POST">
               <div class="control-group">
                  <input type="text" class="login-field" value="" placeholder="username" name = "username">
                  <label class="login-field-icon fui-user" for="login-name"></label>
               </div>
               <div class="control-group">
                  <input type="password" class="login-field" value="" placeholder="password" name = "password">
                  <label class="login-field-icon fui-lock" for="login-pass"></label>
               </div>
               <button type = "submit" class="btn btn-primary btn-large btn-block">login</button>
            </form>
         </div>
      </div>
   </body>