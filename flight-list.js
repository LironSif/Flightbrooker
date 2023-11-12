const flights = [
    { from: "Berlin", to: 'Prague', price: 22, depart: new Date('2023-11-28'), return: new Date('2023-12-12') },
    { from: "TLV", to: 'Berlin', price: 22, depart: new Date('2023-11-28'), return: new Date('2023-12-12') },
    { from: "London", to: 'Lisbon', price: 22, depart: new Date('2023-11-28'), return: new Date('2023-12-12') },
    { from: "Madrid", to: 'Paris', price: 30, depart: new Date('2023-12-01'), return: new Date('2023-12-15') },
    { from: "New York", to: 'Toronto', price: 45, depart: new Date('2023-11-30'), return: new Date('2023-12-10') },
    { from: "Sydney", to: 'Melbourne', price: 50, depart: new Date('2023-12-05'), return: new Date('2023-12-12') },
    { from: "Tokyo", to: 'Osaka', price: 40, depart: new Date('2023-11-25'), return: new Date('2023-12-05') },
    { from: "Dubai", to: 'Abu Dhabi', price: 55, depart: new Date('2023-12-02'), return: new Date('2023-12-08') }
];


const userDataString = localStorage.getItem('loguser');
let userData = JSON.parse(userDataString) || { myFlights: [] };
console.log(userData);


let myflights = userData.myFlights;

   
function updateUserFlights() {
    userData.myFlights = myflights;
    const updatedUserDataString = JSON.stringify(userData);
    localStorage.setItem('loguser', updatedUserDataString);
}


    const myContainer = document.querySelector(".yourflights");

    function showMyFlights() {
        myContainer.innerHTML = `<h1>${userData.userName}'s flights</h1>`;
        

        myflights.forEach((flight, index) => {
            const myflightCard = document.createElement("div");
            myflightCard.classList.add("flight");
    
            const flightfrom = document.createElement("h2");
            flightfrom.textContent = `Flight from: ${flight.from}`;
            myflightCard.appendChild(flightfrom);

            const flightto = document.createElement("h2");
            flightto.textContent = `Flight to: ${flight.to}`;
            myflightCard.appendChild(flightto);
            
            const tickets = document.createElement("h2");
            tickets.textContent = `tickets : ${flight.tickets}`
            myflightCard.appendChild(tickets);

            const myflightprice = document.createElement("h3");
            myflightprice.textContent = `Total Price : ${flight.price * flight.tickets}`
            myflightCard.appendChild(myflightprice);

            myflightCard.addEventListener('click', function() {
                console.log(`${index}`)
                
                myflights.splice(`${index}`, 1);
                
                updateUserFlights(); 
                showMyFlights(); 
            });

            myContainer.appendChild(myflightCard);
        });
    }
    
    showMyFlights(); 
    
    
   const flightContainer = document.querySelector(".availableflights");

   function showFlights() {
    flightContainer.innerHTML = '<h1>Available Flights</h1>';
    flights.forEach((flight, index) => {
        const flightCard = document.createElement("div");
        flightCard.classList.add("flight");
        flightCard.classList.add(`${index}`);
        
            const flightfrom = document.createElement("h2");
            flightfrom.textContent = `Filght from: ${flight.from}`;
            flightCard.appendChild(flightfrom);

            const flightto = document.createElement("h2");
            flightto.textContent = `Filght to: ${flight.to}`
            flightCard.appendChild(flightto);

            const flightprice = document.createElement("h2");
            flightprice.textContent = `Price : ${flight.price}`
            flightCard.appendChild(flightprice);

            const flightDepartureDate = document.createElement("h2");
            flightDepartureDate.textContent = `Departure Date: ${flight.depart.toLocaleDateString()}`;
            flightCard.appendChild(flightDepartureDate);

            const flightReturnDate = document.createElement("h2");
            flightReturnDate.textContent = `Return Date: ${flight.return.toLocaleDateString()}`;
            flightCard.appendChild(flightReturnDate);

            

flightCard.addEventListener('click', function() {
    const flightExists = myflights.some(existingFlight => 
        existingFlight.from === flight.from && 
        existingFlight.to === flight.to && 
        existingFlight.depart.getTime() === flight.depart.getTime() &&
        existingFlight.return.getTime() === flight.return.getTime()
    );

    if (!flightExists) {
    
        const tickets = prompt("Enter the number of tickets:", "1");

    
        if (tickets && !isNaN(tickets)) {
           
            flight.tickets = parseInt(tickets, 10);
            myflights.push(flight);
            updateUserFlights();
            showMyFlights();
        } else {
            alert('Invalid number of tickets');
        }
    } else {
        alert('Flight already in the list');
        
    }
});

     
            flightContainer.appendChild(flightCard);
        });
    }
    
showFlights();
const home = document.querySelector(".Home");
const book = document.querySelector(".book");

home.addEventListener('click', () => {
    window.location.href = 'index.html';
});

book.addEventListener('click', () => {
    let totSum = 0;
    myflights.forEach(flight => {
        let sumCard = flight.tickets * flight.price;
        totSum += sumCard;
    });
    alert(`Your card will be charged with ${totSum} $`);
    myflights = [];
    updateUserFlights()
    window.location.href = 'index.html';
});
