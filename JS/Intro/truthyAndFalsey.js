/*
Truthy or falsely
-> if you know something is not falsey
then it is truthy
Examples of falsey
  1.false
  2.0
  3.-0
  4.null
  5.undefined
  6.``-> empty string
  7. Nan-> not a number
  Anything that is not falsey is thruthy
  truthy// falsey -> truthy
  
  */

  let userName1="Brian Oduor" //truthy
  let userName2=-0//falsely

  let activeUserName=userName2 || userName1

  // activeUserName=>
    console.log(activeUserName)
  
  let bothUserNameOk=userName1&&userName2
  console.log(bothUserNameOk)//truthy or falsey