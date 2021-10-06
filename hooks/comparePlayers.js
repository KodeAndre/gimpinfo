function compare(player1, player2, player3, player4, player5, skills) {
   const skillsArray = Object.keys(skills)

   const player1XP = skillsArray.map(x =>
      player1.skills[x].xp
   );

   const player2XP = skillsArray.map(x =>
      player2.skills[x].xp
   );

   const player3XP = skillsArray.map(x =>
      player3.skills[x].xp
   );

   const player4XP = skillsArray.map(x =>
      player4.skills[x].xp
   );

   const player5XP = skillsArray.map(x =>
      player5.skills[x].xp
   );

   const allPlayers = [player1, player2, player3, player4, player5]
   const allPlayersXP = [player1XP, player2XP, player3XP, player4XP, player5XP]

   function findStatOrder() {
      let playerSkills = {};

      for (let i = 0; i < allPlayersXP[0].length; i++) {
         let highestPlayer = ''
         let lowestPlayer = ''
         
         const highest = (Math.max(player1XP[i], player2XP[i], player3XP[i], player4XP[i], player5XP[i]))
         const lowest = (Math.min(player1XP[i], player2XP[i], player3XP[i], player4XP[i], player5XP[i]))
         allPlayers.forEach(player => {
            
            if (player.skills[skillsArray[i]].xp === highest) { highestPlayer = player }
            console.log(highestPlayer.username)
            if (player.skills[skillsArray[i]].xp === lowest) { lowestPlayer = player }
            console.log(lowestPlayer.username)
         });
         
      for (let x = 0; x < skillsArray.length; x++) {
         playerSkills[skillsArray[i]] = {
            highest: {
               player: `${highestPlayer.username}`,
               level: `${highestPlayer.skills[skillsArray[i]].level}`,
               xp: `${highest}`
            },
            lowest: {
               player: `${lowestPlayer.username}`,
               level: `${lowestPlayer.skills[skillsArray[i]].level}`,
               xp: `${lowest}`
            }
         }
      }
   }
      return playerSkills
   }
   return findStatOrder();

}

module.exports.compare = compare