const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

let userWithThreeLanguages = users.filter(function (user) {
    return user.languages.length >= 3;

})

console.log(userWithThreeLanguages);

let emails = users.map(user => user.email);
console.log(emails);


const totalYearsOfExperience = users.reduce(function (findTotalYears, user){
    return findTotalYears + user.yearsOfExperience;
},0)
console.log(totalYearsOfExperience / users.length);
console.log(totalYearsOfExperience);

const longestEmail = users.reduce(function (longestEmailSoFar, user) {
    if(user.email.length  > longestEmailSoFar.length) {
        return user.email;
    }
    return longestEmailSoFar;
},users[0].email);
console.log(longestEmail);

const names = users.reduce(function (namesSoFar,user) {
    // return namesSoFar + ", " + user.name;
    if(namesSoFar.length > 0) {
        namesSoFar += ", ";
    }
    return namesSoFar + user.name;
}, "");
console.log("your instructors are: " + names);
const names2 = users.map(function (user) {
    return user.name;
})
console.log(names2.join(", "));

const languageSet = users.reduce(function (setSoFar, user) {
    for (let i = 0; i < user.languages.length; i++) {
        setSoFar.add(user.languages[i])
    }
    return setSoFar;
},new Set());
console.log(languageSet);

