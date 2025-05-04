async function getUserInfo(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users/2');
        const user = await response.json();
        console.log("Username is: " + user.name);
    } catch {
        console.log("Oops, something went wrong! Error details: " + error);
    }
}

getUserInfo();
 // try {} & catch {} is used when if some error occurs so we can give a custom error message to the user

 // learn about async await -> https://youtu.be/H9nFFE5_VS4?si=tF2mqTk1Oniy5K2S
