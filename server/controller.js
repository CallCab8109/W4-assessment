module.exports = {


    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = [
            "There may be a cookie in your future", 
            "be wary of woman, for she may be a witch", 
            "she turned me into a newt that has to work in a fortune cookie factory",
            "Don\'t worry, be happy"
        ]

        let randomIndex = Math.floor(Math.random() * fortunes.length)
        let randomFortune = fortunes[randomIndex]

        res.status(200).send(randomFortune)
    },
    
    getQuote: (req, res) => {
        const quote = [
            "We ask only to be reassured about the noises in the cellar and the window that should not have been open.",
            "Sometimes dead is better",
            "Demons are like obedient dogs; they come when they are called.",
            "Last night I saw upon the stair, a little man who wasn’t there. He wasn’t there again today. Oh, how I wish he’d go away…",
            "Everybody is a book of blood; wherever we’re opened, we’re red.",
            "The world outside had its own rules, and those rules were not human.",
            "When there’s no more room in hell, the dead will walk the earth.",
            "Wendy, darling, light of my life, I’m not gonna hurt you. I’m just gonna bash your brains in.",
            "Maybe all the schemes of the devil were nothing compared to what man could think up",
            "The monsters that rose from the dead, they are nothing compared to the ones we carry in our hearts.",
            "Listen to them, the children of the night. What music they make!",
        ]
        let randomIndex = Math.floor(Math.random() * quote.length)
        let randomQuote = quote[randomIndex]

        res.status(200).send(randomQuote)
    },
    getName: (req, res) => {
        const name = [
            "John",
            "Carter",
            "Madalyn",
            "Kennedi",
            "Taylor",
            "Madi",
            "Nohea"
        ]
        let randomIndex = Math.floor(Math.random() * name.length)
        let randomName = name[randomIndex]

        res.status(200).send(randomName)

},
    getFood: (req, res) => {
        const food = [
            "banana",
            "cheese burger",
            "spaghetti",
            "noodles",
            "pasta",
            "bread"
        ]
        let randomIndex = Math.floor(Math.random() * food.length)
        let randomFood = food[randomIndex]

        res.status(200).send(randomFood)

},
    getHobby: (req, res) => {
        const hobby = [
            "biking",
            "hiking",
            "swimming",
            "coding",
            "going to the gym",
            "working on cars"
        ]
        let randomIndex = Math.floor(Math.random() * hobby.length)
        let randomHobby = hobby[randomIndex]

        res.status(200).send(randomHobby)

}
}
