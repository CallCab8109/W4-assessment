const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
let trumpBtn = document.querySelector("#trumpButton")
const quoteBtn = document.getElementById("quoteButton")
const nameBtn = document.getElementById("nameButton")
const foodBtn = document.getElementById("foodButton")
const hobbyBtn = document.getElementById("hobbyButton")


const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
    .then(res => {
        const data = res.data;
        alert(data);
});
}

function getQuote () {
    console.log('not funny haha')
    axios.get('http://localhost:4000/api/quote/')
    .then((res) => {
        const data = res.data
        alert(data)

         

    })
}

function getName () {
    console.log('name be gotten')
    axios.get('http://localhost:4000/api/name/')
    .then((res) => {
        const data = res.data
        alert(data)

         

    })
}
function getFood () {
    console.log('honey im home')
    axios.get('http://localhost:4000/api/food/')
    .then((res) => {
        const data = res.data
        alert(data)

         

    })
}
function getHobby () {
    console.log('get to work')
    axios.get('http://localhost:4000/api/hobby/')
    .then((res) => {
        const data = res.data
        alert(data)

         

    })
}

function getTrump () {
    console.log('1')
    axios.get('https://api.whatdoestrumpthink.com/api/v1/quotes/random')
    .then((response) => {
        alert(response.data.message)
    })
}

trumpBtn.addEventListener('click', getTrump)
fortuneBtn.addEventListener('click', getFortune)
complimentBtn.addEventListener('click', getCompliment)
quoteBtn.addEventListener('click', getQuote)
nameBtn.addEventListener('click', getName)
foodBtn.addEventListener('click', getFood)
hobbyBtn.addEventListener('click', getHobby)