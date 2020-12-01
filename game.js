const textElement=document.getElementById('text')
const decisionButtonsElement = document.getElementById('decision-buttons')

//variables
let state = {}
var site = ''
var OxygenTanks = 0
var survivors = 1

function startGame(){
    state={}
    showTextNode(1)
}

function showTextNode(textNodeIndex){
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    textElement.innerText = textNode.text
    while(decisionButtonsElement.firstChild){
        decisionButtonsElement.removeChild(decisionButtonsElement.firstChild)
    }

    textNode.decisions.forEach(decision => {
        if(showDecision(decision)){
            const button = document.createElement('button')
            button.innerText = decision.text
            button.classList.add('decisionbtn')
            button.addEventListener('click',() => selectDecision(decision))
            decisionButtonsElement.appendChild(button)
        }
    });
}

function showDecision(decision){
    return decision.requiredState == null || decision.requiredState(state);
}

function selectDecision(decision){
    const nextTextNodeId = decision.nextText
    state = Object.assign(state, decision.setState)
    site = Object.assign(site,decision.setSite)
    showTextNode(nextTextNodeId)
}
const textNodes = [
    //PART A
    {
        id: -1,
        text:'You have died due to lack of your oxygen supply.',
        decision:[
            {
                text:'Try a Different Path',
                nextText: 1
            }
        ]
    },
    {
        id: 1,
        text: 'The ship is crashing onto Mars. It is falling at high speed. The outer shell is increasing the heat. What do you do?',
        decisions: [
            {
                text:'Salvage the ship and turn on the thrusters',
                setState:{nothing:true},
                changeOxygenTanks: 7,
                nextText: 2
                
            },
            {
                text:'Jump out',
                setState:{nothing:true},
                nextText: 3
            },          
        ]            
    },
    {
        id: 2,
        text: 'You fire up the thrusters, hopefully to prevent your ship from becoming wreckage. You sustain a hard landing, but your ship is still in one piece. You find out that the ship can no longer fly and decide to take everything that you can carry, which include  a lot of oxygen tanks, the data storage device, and a portable transmitter for low orbit communication.',
        decisions: [
            {
                text:'Move On',
                nextText: 4
            }   
        ]            
    },
    {
        id: 3,
        text: 'You hit the emergency hatch and jump out. You manage to activate your parachute and land safely onto the ground. However, your ship falls onto the martian surface with a kaboom. You don’t believe that it made the fall',
        decisions: [
            {
                text:'Search the ship for supplies',
                setState:{nothing:true},
                changeOxygenTanks: 5,
                nextText: 5
            },
            {
                text:'Leave without searching the wreckage',
                setState:{nothing:true},
                changeOxygenTanks: 3,
                nextText: 6
            }
        ]            
    },
    {
        id: 5,
        text: 'You manage to find nothing of value except for a few spare oxygen tanks and a functional storage device, which you store with you.',
        decisions: [
            {
                text:'Move On',
                nextText: 4
            }
        ]            
    },
    
    //PART B
    {
        id: 4,
        text: 'You are now stranded on Mars and have no bearings whatsoever.  What do you do now?',
        decisions: [
            {
                text:'Use your portable transmitter',
                nextText: 7
            },
            {
                text:'Use your database',
                nextText: 8
            },
            {
                text:'Rely on your previous knowledge of Mars',
                nextText: 9
            }                         
        ]            
    },
    {
        id: 7,
        text: 'You activate it into distress mode. You pick a call from another ship, which is landing at a nearby site known as Site Bravo. You consult your database and start heading toward that direction',
        decisions: [
            {
                text:'Move On',
                nextText: 10
            }
        ]            
    },
    
    {
        id: 8,
        text: 'You plug your database into your suit’s built in computer. You see that site Alpha has seen a lot of activity over the past few days and that it is according to the time stamps, fully functional. Site Bravo has seen zero activity and has been labeled as “disabled”. Site Charlie has also seen zero activity but has not been labeled as “disabled”. Where do you head now?',
        decisions: [
            {
                text:'Head to Site Alpha',
                setSite:'Alpha',
                nextText: 10
            },
            {
                text:'Head to Site Bravo',
                setSite:'Bravo',
                nextText: 10
            },
            {
                text:'Head to Site Charlie',
                setSite:'Charlie',
                nextText: 10
            }
        ]            
    },    
    {
        id: 9,
        text: 'You know the location of the site Charlie. You decide that going there is better than nothing so you start heading toward site Charlie',
        decisions: [
            {
                text:'Move On',
                nextText: 10
            }
        ]            
    },
    //PART C
    {
        id: 10,
        text: ' You pass by a deserted outpost on your way to site '+ site+'. You wonder if you should scavenge the outpost for anything.',
        decisions: [
            {
                text:'Leave it be',
                nextText: 11
            },
            {
                text:'Scavenge the outpost',
                nextText: 12
            }
        ]            
    },
    {
        id: 11,
        text: 'You don’t want to lose your precious oxygen on the way to '+site+' so you keep moving',
        decisions: [
            {
                text:'Continue',
                nextText: 17
            }
        ]            
    },
    {
        id: 12,
        text: 'You decide that you need all the help that you can get so you go into the outpost. Inside you find a working computer and some oxygen tanks. The oxygen tanks are locked inside a vault.',
        decisions: [
            {
                text:'Access the computer',
                nextText: 13
            },
            {
                text:'Leave the outpost',
                nextText: 14
            }
        ]            
    },
    {
        id: 13,
        text: 'You decide to activate the computer. You locate the options to open the vault. However you don’t know the password, what do you do?',
        decisions: [
            {
                text:'Use your database to figure it out',
                nextText: 15
            },
            {
                text:'Guess',
                nextText: 16
            }
        ]            
    },
    {
        id: 15,
        text: 'You successfully were able to acquire the oxygen tanks and now have a better chance at reaching site '+site+'.',
        decisions: [
            {
                text:'Continue',
                changeOxygenTanks:2,
                nextText: 17
            }
        ]            
    },
    {
        id: 16,
        text: 'You fail too many times and the system locks down. You are unable to access the vault so you leave the outpost.',
        decisions: [
            {
                text:'Continue',
                nextText: 17
            }
        ]            
    },
    //PART D
    {
        id: 17,
        text: 'You were walking and then suddenly , you manage to pick up a distress signal from another stranded survivor. What do you do?',
        decisions: [
            {
                text:'Save the person',
                nextText: 18
            },
            {
                text:'Leave the person',
                nextText: 19
            }
        ]            
    },
    {
        id: 18,
        text: 'You manage to find the person by tracing his GPS signal. The fellow survivor’s oxygen tank has been punctured. Should you spare one of your oxygen tanks in order to help him?',
        decisions: [
            {
                text:'Yes',
                nextText: 20
            },
            {
                text:'No',
                nextText: 21
            }
        ]            
    },
    {
        id: 20,
        text: 'You give into mercy and replace the oxygen tank on his back. He thanks you and join you on your journey to Site'+ site,
        decisions: [
            {
                text:'Continue',
                changeOxygenTanks:-1,
                nextText: 19
            }
        ]            
    },
    {
        id: 21,
        text: 'You leave him to die while you hear his cry for help in your short range radio.',
        decisions: [
            {
                text:'Continue',
                nextText: 19
            }
        ]            
    },
    //PART E
    {
        id: 19,
        text: 'You leave him to die while you hear his cry for help in your short range radio.',
        decisions: [
            {
                text:'Continue',
                nextText: 19
            }
        ]            
    },
]

startGame()