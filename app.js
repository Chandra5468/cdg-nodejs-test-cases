// 

export function fetchData(userId){
    return{
        id : userId,
        name: 'John Doe',
        roles: ['user', 'admin'],
        lastLogin : new Date('2023-01-01T12:00:00').toISOString(),
        preferences:{
            notification:true,
            theme:'dark'
        }
    }
}





// Dependency Injection


export function processOrder(data, dependencies){
    // some processing logic

    const paymentInfo = dependencies.processPayment(data.amount)

    return paymentInfo
}

function processPayment(amount){
    // API call to external payment gateway

    console.log("I am original and should not be called while testing")
    return {id:"123", amount:amount}
}

export function greet(name){
    return `Hello, ${name}`
}

export function greetInRussian(name){
    return `привет, ${name}`
}