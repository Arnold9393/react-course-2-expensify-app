/* const person = {
    name: 'Arnold',
    age: 26,
    location: {
        city: 'Adelaide',
        temp: 12
    }
};

const { name: firstName = 'Anonymous', age } = person;

console.log(`${firstName} is ${age}.`)

const { city, temp: temperature } = person.location;
if(city && temperature) {
    console.log(`It's ${temperature} in ${city}`)
} */

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '10914'];

const [street, city, state = 'New York', zip] = address;

console.log(`You are in ${city}, ${state}.`);
