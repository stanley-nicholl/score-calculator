const fs = require('fs')

const getScores = function(path){
  const data = fs.readFileSync(path, 'utf-8')
  return data;
}


const breakout = function(path){
  const data = getScores(path)
  const firstArray = data.split('\n')
  firstArray.pop()
  const parsedData = []
  firstArray.forEach(row => {
    const parsedRow = row.split(', ')
    parsedData.push(parsedRow)
  })
  return parsedData;
}

const findWinner = function (path){
  const data = breakout(path)
  const finalData = []
  let currentWinnerName = ''
  let currentWinnerScore = 0
  data.forEach((row, i) =>{
    tempName = row[0]
    tempScore = parseInt(row[1]) + parseInt(row[2]) + parseInt(row[3])
    if(currentWinnerScore < tempScore){
      currentWinnerName = tempName
      currentWinnerScore = tempScore
    }
  })
  console.log(`${currentWinnerName}: ${currentWinnerScore}`);
}


findWinner('./scores.txt')
