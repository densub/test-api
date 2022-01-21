import express, { Request, Response } from 'express'
import cuid from 'cuid'
import randomNames from 'unique-names-generator'

const app = express()
const PORT = 8080

let students: {
    id: string,
    first_name: string,
    last_name: string,
    country: string,
    language: string,
    pet: string,
    fav_color: string,
    fav_starwars_character: string
}[] = []

for (let i=0; i<50; i++){
    students.push({
        id: cuid(),
        first_name: randomNames.names[getRandomInt(randomNames.names.length)],
        last_name: randomNames.names[getRandomInt(randomNames.names.length)],
        country: randomNames.countries[getRandomInt(randomNames.countries.length)],
        language: randomNames.languages[getRandomInt(randomNames.languages.length)],
        pet: randomNames.animals[getRandomInt(randomNames.animals.length)],
        fav_color: randomNames.colors[getRandomInt(randomNames.colors.length)],
        fav_starwars_character: randomNames.starWars[getRandomInt(randomNames.starWars.length)],
    })
}

function getRandomInt(max : number) {
    return Math.floor(Math.random() * max);
}

app.get('/students', (req: Request, res: Response)=> {
        res.send({
            student: students
        })
    
    }).listen(PORT, () => {
        console.log(`Server is live at https://localhost:${PORT}`)
})

