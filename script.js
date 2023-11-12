const flights = [
    {
            from: "Berlin",
            to:'Prague',
            price: 22,
             depart: new Date ('28.11.2023'),
             return: new Date ('12.12.2023')
        },
    {
            from: "TLV",
            to:'Berlin',
            price: 22,
             depart: new Date ('28.11.2023'),
             return: new Date ('12.12.2023')
        },
    {
            from: "London",
            to:'Lisbon',
            price: 22,
             depart: new Date ('28.11.2023'),
             return: new Date ('12.12.2023')
        },
    ]
   
// get
let myFlightLink = document.getElementById('myFlightLink');


// eventlisters
    document.addEventListener('DOMContentLoaded', () => {
        updateLoginButton();
    });

    document.addEventListener('DOMContentLoaded', (event) => {
        const storedData = localStorage.getItem('loguser',);
        let Data = JSON.parse(storedData)
        let uname = Data.userName

        if (storedData) {
            document.getElementById('myHeader').textContent =`Hi ${uname}`;
        }
    });
    



    const userDataString = localStorage.getItem('loguser');
    let userData = JSON.parse(userDataString) || { myFlights: [] };
    console.log(userData);
    








    
    myFlightLink.addEventListener('click', (e) => {
        let loggedIn = localStorage.getItem('loggedIn')
        console.log(loggedIn)

        if(loggedIn !== 'true'){
         
            e.preventDefault()
            alert('please log in first');
        } 
    });

// func 
    function updateLoginButton() {
        let loginBtn = document.getElementById('loginBtn');
        let loggedIn = localStorage.getItem('loggedIn') === 'true';
        loginBtn.innerHTML = loggedIn ? 'Logout' : 'Login';
    
        loginBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (loggedIn) {
                localStorage.clear();
                loggedIn = false;
                location. reload()
            } else {
                window.location.href = 'login.html';
            }
            loginBtn.innerHTML = loggedIn ? 'Logout' : 'Login';
        });
    }

 

    
