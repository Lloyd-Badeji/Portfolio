let sportsbet = "https://api.the-odds-api.com/v4/sports?apiKey=f384bcc42fac2c245edaace488865419"

async function getlivematches(){
    try {
        let games =  fetch (sportsbet)
        // return games.json()
        console.log(games.json())
    } catch (error) {
        console.log(error); 
    }
}

getlivematches()

// let display = async () => {
//     let game = await getlivematches()

    
// }

// let container = document.getElementsByClassName("Livescore")
// container.innerHTML 
