# snspanels
Simple HTML/CSS/JS only control panels for statsnscore.online 
You can start by filling out the form on < github url >/index.html 

or use

< github url >/setup/?game=< iframe-game-id >&league=< league-id >&token=< elgato-token >

or 

< github url >/score/?game=< iframe-game-id >&league=< league-id >&token=< elgato-token >

or 

< github url >/clock/?game=< iframe-game-id >&league=< league-id >&token=< elgato-token >

with

iframe-game-id -> the game id which is shown, when you use the iframe from overlays.

league-id -> the league-id you she when you use the iframe from overlays, minus the "iframe" part, which is added automaticly

elgato-token -> the elgato token without the "token: " part

*Sample for gathering the information from an iframe Url:*  
e.g. https://statsnscore.online/overlay/game/6633d99fd56048341f1f2427/iframegflj  
-> iframe-game-id = 6633d99fd56048341f1f2427  
-> league-id = gflj  
-> elgato-token: eyJh<...>s3TfNE use the full token you find in the "Token Section" in statsnscore.online of the Live game  

## Available API Commands / List of actions for the scoreboard:
quarterShow - Show/Hide quarter  
gameclockShow - Show/Hide gameclock  
playclockShow - Show/Hide playclok  
downShow - Show/Hide down  
distanceShow - Show/Hide distance  
recordShow - Show/Hide record  
losShow - Show/Hide LOS(line of scrimmage)  
firstDown - Set first down  
yardsplus10 - Set distance +10 yards  
yardsminus10 - Set distance -10 yards  
yardsplus5 - Set distance +5 yards  
yardsminus5 - Set distance -5 yards  
yardsplus1 - Set distance +1 yards  
yardsminus1 - Set distance -1 yards  
reset12Clock - Set quarter length setup to 12 minutes  
reset15Clock - Set quarter length setup to 15 minutes  
reset30Clock - Set quarter length setup to 30 minutes  
reset40Playclock - Set playclock setup to 40 seconds  
reset30Playclock - Set playclock setup to 30 seconds  
reset25Playclock - Set playclock setup to 25 seconds  
plusMinute - Set game clock +1 minute  
minusMinute - Set game clock -1 minute  
plus10Second - Set game clock +10 seconds  
minus10Second - Set game clock -10 seconds  
plus1Second - Set game clock +1 second  
minus1Second - Set game clock -1 second  
minus1SecondPlayclock - Set actual playclock -1 second  
resetClock - Reset game clock  
resetPlayclock - Reset playclock  
startClock - Start game clock  
stopClock - Stop game clock  
startPlayclock - Start playclock  
stopPlayclock - Stop playclock  
countTimeoutTeam1 - SHOW timeout and reduce timeouts from team1 (hometeam) by 1  
countTimeoutTeam2 - SHOW timeout and reduce timeouts from team2 (guestteam) by 1  
plusTimeoutTeam1 - Increase but don't show timeouts from team1 (hometeam) by 1  
plusTimeoutTeam2 - Increase but don't show timeouts from team2 (guestteam) by 1  
minusTimeoutTeam1 - Reduce but don't show timeouts from team1 (hometeam) by 1  
minusTimeoutTeam2 - Reduce but don't show timeouts from team2 (guestteam) by 1  
ballbesitzTeam1 - Set possession to team1 (hometeam)  
ballbesitzTeam2 - Set possession to team2 (guestteam)  
ballbesitzwechsel - Change possession  
touchdownTeam1 - SHOW TOUCHDOWN and increase points from team1 (hometeam) by 6  
touchdownTeam2 - SHOW TOUCHDOWN and increase points from team2 (guestteam) by 6  
fieldgoalTeam1 - SHOW FIELDGOAL and increase points from team1 (hometeam) by 3  
fieldgoalTeam2 - SHOW FIELDGOAL and increase points from team2 (guestteam) by 3  
twopointTeam1 - SHOW 2POINT and increase points from team1 (hometeam) by 2  
twopointTeam2 - SHOW 2POINT and increase points from team2 (guestteam) by 2  
patTeam1 - SHOW PAT and increase points from team1 (hometeam) by 1  
patTeam2 - SHOW PAT and increase points from team2 (guestteam) by 1  
safetyTeam1 - SHOW SAFETY and increase points from team1 (hometeam) by 2  
safetyTeam2 - SHOW SAFETY and increase points from team2 (guestteam) by 2  
plusTeam1 - Increase but don't show points from team1 (hometeam) by 1  
plusTeam2 - Increase but don't show points from team2 (guestteam) by 1  
minusTeam1 - Reduce but don't show points from team1 (hometeam) by 1  
minusTeam2 - Reduce but don't show points from team2 (guestteam) by 1  
countDowns - Increase DOWN by 1  
countquarter - Increase QUARTER by 1  
flag - SHOW FLAG  
los10 - Set LOS to 10 yards  
los20 - Set LOS to 20 yards  
los30 - Set LOS to 30 yards  
los40 - Set LOS to 40 yards  
losplus10 - Set LOS +10 yards  
losminus10 - Set LOS -10 yards  
losplus5 - Set LOS +5 yards  
losminus5 - Set LOS -5 yards  
losplus1 - Set LOS +1 yard  
losminus1 - Set LOS -1 yard  
losteam1 - Set LOS in field side of team1 (hometeam)  
losteam2 - Set LOS in field side of team2 (guestteam)  
losteamchange - Set field side of LOS from one team to the other  