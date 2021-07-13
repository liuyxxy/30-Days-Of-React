/*
//Q1
const empty_arr = []
console.log(empty_arr)

//Q2
const more_than_five = [0, 2, 4, 6, 8, 10, 12]
console.log(more_than_five)

//Q3
console.log("array length is ", more_than_five.length)

//Q4
console.log("first item is ", more_than_five[0])
console.log("middle item is ", more_than_five[Math.floor(more_than_five.length / 2)])
console.log("last item is ", more_than_five[more_than_five.length - 1])

//Q5
const mixedDataTypes = [0, 2n, "string", true, null]
console.log("mixed array length is ", mixedDataTypes.length)

//Q6
const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]

//Q7
console.log(itCompanies)

//Q8
console.log(itCompanies.length)

//Q9
console.log("first company is ", itCompanies[0])
console.log("middle company is ", itCompanies[Math.floor(itCompanies.length / 2)])
console.log("last company is ", itCompanies[itCompanies.length - 1])

//Q10
console.log(itCompanies[0]) //etc.

//Q11
let strings = itCompanies.toString().toUpperCase()
const itCompaniesUpper = strings.split(",")
console.log(itCompaniesUpper)

//Q12
let added = itCompanies.slice(0)
added[6] = "and"
added.push("Amazon")
let addedString = added.toString().replaceAll(",", ", ").replace(", and,", " and")
console.log(addedString, "are big IT companies.")

//Q13
itCompanies.includes("Huawei") == true
    ? console.log("Huawei exists")
    : console.log("Huawei doesn't exist")

//Q14
//???

//Q15
itCompanies.sort()

//Q16
itCompanies.reverse()

//Q17
console.log(itCompanies.slice(0, 3))

//Q18
console.log(itCompanies.slice(4, 7))

//Q19
console.log(itCompanies.slice(3, 4))

//Q20
console.log(itCompanies.shift())
console.log(itCompanies)

//Q21
console.log(itCompanies.splice(2, 1))
console.log(itCompanies)

//Q22
console.log(itCompanies.pop())
console.log(itCompanies)

//Q23
console.log(itCompanies.splice(0, 4))
console.log(itCompanies)

//Q25
let text =
  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let words = text.replace(/[^a-zA-Z0-9 ]/g, "").split(" ")
console.log(words)
console.log(words.length)

//Q26
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift("Meat")
shoppingCart.push("Sugar")
shoppingCart.splice(4, 1)
shoppingCart[3] = "Green Tea"
console.log(shoppingCart)

//Q27
countries.includes("Ethiopia")
    ? console.log("ETHIOPIA")
    : countries.push("Ethiopia")

//Q28
webTechs.includes("Sass")
    ? console.log("Sass is a CSS preprocess.")
    : webTechs.push("Sass")
console.log(webTechs)

//Q29
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd)

console.log(fullStack)

//Q30
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
ages.sort()
const min = ages[0]
const max = ages[ages.length - 1]
const median = (ages[4] + ages[5]) / 2
const ave = ages[0] + ages[1] + ages[2]//...etc. 
const range = max - min

//Q31
console.log(countries.slice(0, 10))

//Q31
console.log(countries[Math.floor(countries.length/2)])

//Q32
const front = countries.slice(0, Math.ceil(countries.length/2) )
const back = countries.slice(Math.ceil(countries.length/2))
console.log(front)
console.log(back)

//Q33
/*
let age = prompt("Enter your age.")
if (age >= 18) {
    console.log("You are old enough to drive.")
} else {
    let diff = 18 - age
    console.log("You are left with", diff, "years to drive")
}
*/

//Q34
/*
let myAge = 20
let yourAge = prompt("Your age?")
if (myAge > yourAge) {
    let d = myAge - yourAge
    console.log("I am", d, "years older than you")
} else if (myAge == yourAge) {
    console.log("We are the same ages")
} else {
    let d = yourAge - myAge
    console.log("You are", d, "years older than me")
}


//Q35
let a = 3
let b = 4
if (a > b) {
    console.log("a is greater than b")
} else {
    console.log("b is greater than a")
}

a > b ? console.log("a is greater than b") : console.log("b is greater than a")

//Q36
/*
let ans = prompt("Enter a number")
ans % 2 == 0 ? console.log("Even number") : console.log("Odd number")
*/

//Q37
/*
let grades = prompt("Enter you grades")
switch (true) {
    case (100 >= grades && grades >= 80):
        console.log("A")
        break
    case (80 > grades && grades > 70):
        console.log("B")
        break
    // etc.
    default: 
        console.log("Try again")
}


//Q38
let month = "October"
switch (true) {
    case month == "December":
        console.log("Winter")
        break
    case month == "October":
        console.log("Autumn")
        break
    default: 
        console.log("error")
}

//Q39
/*
let day = prompt("What day is it today?")
day = day.toLowerCase()
switch (day) {
    case "monday": 
        console.log("Monday is a weekday.")
        break
    case "sunday": 
        console.log("Sunday is a weekend.")
        break
    default:
        console.log("Error")
}

//Q40
/*
let month = prompt("Enter a month.")
month = month.toLowerCase()
*/
//etc.

//Q41
let dog = {}

//Q42
console.log(dog)

//Q43
dog.name = "doggo"
dog.legs = "four"
dog.color = "white"
dog.age = "19302"
dog.barkProperties = function() {
    return "woof woof"
}

//Q44
console.log(dog.name)
console.log(dog.legs)
console.log(dog.color)
console.log(dog.age)
console.log(dog.barkProperties())

//Q45
dog.breed = "chihuahua"
dog.getDogInfo = function() {
    let statement = `${this.name} is a ${this.color} ${this.breed} with ${this.legs} legs.\nIt is currently ${this.age} years old and likes to say ${this.barkProperties()}.`
    return statement
}
console.log(dog.getDogInfo())

//Q46
let all = Object.entries(users)
let person = all[0]
const size = all.length
for (const user of all) {
    if (user[1].skills.length > person[1].skills.length) {
        person = user
    }
}
console.log(person[0])

//Q47
let numLoggedIn = 0
for (const user of all) {
    if (user[1].isLoggedIn) {
        numLoggedIn++
    }
}
console.log(numLoggedIn)

let numGreaterThan50 = 0
for (const user of all) {
    if (user[1].points >= 50) {
        numGreaterThan50++
    }
}
console.log(numGreaterThan50)

//Q48
let mernDevs = []
for (const user of all) {
    if (user[1].skills.includes("MongoDB") && user[1].skills.includes("Express") 
        && user[1].skills.includes("React") && user[1].skills.includes("Node")) {
            mernDevs.push(user)
        }
}
console.log(mernDevs)

//Q49
let newUsers = Object.assign({}, users)
newUsers.Me = {
    email: "me@gmail.com",
    skills: ["HTML", "CSS"],
    age: 20,
    isLoggedIn: false,
    points: 0
}
console.log(newUsers)
console.log(users)

//Q50
console.log(Object.keys(users))

//Q51
console.log(Object.values(users))

//Q53
const personAccount = {
    firstName: "Me",
    lastName: "You",
    incomes: [5000, 6000],
    expenses: [4000, 3500],
    totalIncome: function() {
        let total = 0
        for (const income of this.incomes) {
            total = total + income
        }
        return total
    },
    totalExpense: function() {
        let total = 0
        for (const expense of this.expenses) {
            total = total + expense
        }
        return total
    },
    accountInfo: function() {
        let statement = `${this.firstName} ${this.lastName} has a total income of ${this.totalIncome()} and a total expense of ${this.totalExpense()}`
    },
    addIncome: function(newIncome) {
        this.incomes.push(newIncome)
    },
    addExpense: function(newExpense) {
        this.expenses.push(newExpense)
    },
    accountBalance: function() {
        return this.totalIncome() - this.totalExpense()
    }
}

