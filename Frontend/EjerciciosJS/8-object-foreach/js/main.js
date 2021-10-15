
/*
- Obtener el score promedio de cada materia (HTML, CSS, JS)
- Obtener el promedio indivual de cada mentor
- Crear un array de string con la siguiente forma:
"Mi nombre es {name} y mi promedio es {promedio}"
- Obtener la lista de mentores cuyo promedio sea mayor a 9.5
*/

function ejercicio1(){
    let mentorArray = [
        {
            name: "Angel Resendiz",
            scores: [
                {
                    signature:  "HTML",
                    score: 10
                },
                {
                    signature:  "CSS",
                    score: 10
                },
                {
                    signature:  "JS",
                    score: 9
                },
            ]
        },
        {
            name: "Elda Corona",
            scores: [
                {
                    signature:  "HTML",
                    score: 10
                },
                {
                    signature:  "CSS",
                    score: 9
                },
                {
                    signature:  "JS",
                    score: 10
                },
            ]
        },
        {
            name: "Alfred Altamirando",
            scores: [
                {
                    signature:  "HTML",
                    score: 9
                },
                {
                    signature:  "CSS",
                    score: 10
                },
                {
                    signature:  "JS",
                    score: 10
                },
            ]
        },
        {
            name: "Tux Tuxtla",
            scores: [
                {
                    signature:  "HTML",
                    score: 10
                },
                {
                    signature:  "CSS",
                    score: 8
                },
                {
                    signature:  "JS",
                    score: 10
                },
            ]
        },
        {
            name: "Fernanda Palacios",
            scores: [
                {
                    signature:  "HTML",
                    score: 10
                },
                {
                    signature:  "CSS",
                    score: 9
                },
                {
                    signature:  "JS",
                    score: 10
                },
            ]
        }
    ]

    let scoreHtml = 0, scoreCss  = 0, scoreJs   = 0
    let newMentorScore  = [], newMentorProm = [] 
    let newStringScore  = [], mentorStringScore = ''

    mentorArray.forEach((mentor)=> {
        let name = mentor.name
        let promedio = 0 
        mentor.scores.forEach((scores, index)=>{
            let score=parseInt(scores.score)
            promedio += score
            switch (index){
                case 0:
                    scoreHtml += score
                    break;
                case 1:
                    scoreCss  += score
                    break;
                case 2:
                    scoreJs  += score
                    break;
            }
        })

        promedio /= mentor.scores.length

        let mentorProm   = { name, promedio }
        newMentorScore.push(mentorProm)
        mentorStringScore = (`Mi nombre es ${name} y mi promedio es ${promedio}`)
        mentorStringScore = {mentorStringScore}
        newStringScore.push(mentorStringScore)

        if (promedio > 9.5){
            
            newMentorProm.push(mentorProm.name)
        }

    })

    scoreHtml = scoreHtml / mentorArray.length
    scoreCss  = scoreCss / mentorArray.length
    scoreJs   = scoreJs / mentorArray.length

    console.log("Obtener el score promedio de cada materia")
    console.log("HTML:",scoreHtml )
    console.log("CSS:",scoreCss )
    console.log("JS:",scoreJs )

    console.log("Obtener el promedio indivual de cada mentor")
    console.log(newMentorScore)

    console.log("Crear un array de string con la siguiente forma:")
    console.log(newStringScore)

    console.log("Mentores con promedio mayor a 95")
    console.log(newMentorProm)
}