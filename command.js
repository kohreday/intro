let Team1 = 1;
let Teamturn = 1;
let gridarray = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let point = 0;
let points = 0;

function setTeam(any) {
    let option = document.getElementById('tag').value
    if (confirm("Do you wan to start a new game?"))
    {
        let option = document.getElementById('tag').value;
        Resetgame();
        document.getElementById('point1').innerHTML = '0';
        document.getElementById('point2').innerHTML = '0';
        point = 0;
        points = 0;
    } else {
        option == 'x'? option = 'o': option = 'x';
        document.getElementById('tag').value = option;
    }
}

function start(buttonid) {
    teamid = document.getElementById('tag').value;
    document.getElementById('box').innerHTML = '';

    if (buttonid.id === 'x' || button.id === 'o') {
        document.getElementById('box').innerHTML = 'The space is already taken\n place elsewhere';

     } else {

        if (teamid == 'x') {
            teamturn == 1? teamid = document.getElementById('tag').value :teamid = 'o';
        } else if (teamid == 'o') {
            teamturn == 1? teamid = document.getElementById('tag').value :teamid ='x';
        }
        {

            gridarray[buttonid.id] =  teamid;

            document.getElementById(buttonid.id).innerText = teamid;
            buttonid.setattribute("id", teamid);
            endgame(buttonid);
        }
    }
}

function changeTeam() {
    let Team1 = 1;
    let Team2 = 2;
    if (Team1 == 1) {
        teamturn == 1? teamturn = 2 :teamturn = 1;
        if (Team2 == teamturn) {
        } 
        else {
            return;
        }
    }
     else {
        return;
    }
}

function win(buttonid) {
    if (
        gridarray[0]==gridarray[1] && gridarray[1]==gridarray[2] && gridarray[0] != 0 ||
        gridarray[3]==gridarray[4] && gridarray[4]==gridarray[5] && gridarray[3] != 0 ||
        gridarray[6]==gridarray[7] && gridarray[7]==gridarray[8] && gridarray[6] != 0 ||
        gridarray[0]==gridarray[3] && gridarray[3]==gridarray[6] && gridarray[0] != 0 ||
        gridarray[1]==gridarray[4] && gridarray[4]==gridarray[7] && gridarray[1] != 0 ||
        gridarray[2]==gridarray[5] && gridarray[5]==gridarray[8] && gridarray[2] != 0 ||
        gridarray[0]==gridarray[4] && gridarray[4]==gridarray[8] && gridarray[0] != 0 ||
        gridarray[2]==gridarray[4] && gridarray[4]==gridarray[6] && gridarray[2] != 0
    ){
        alert(`Team ${teamturn} won`);
        if (teamturn == 1) {
            // let point =0;
            point++;
            document.getElementById('point1').innerHTML = point;

        }
        else {
            point++;
            document.getElementById('point2').innerHTML = point;
        }
        return true;
    }
     else {
        if (gridarray.indexOf (0) > -1) {
            return false;
        }
         else {
            alert('No more moves\n end game');
            return true;
        }
    }


function endgame(buttonid) {
    win() == true? Resetgame(buttonid) :changeTeam();
}

function Resetgame(buttonid) {
    gridarray = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    let y = document.getElementsByClassName('Button');
    for(let i=0; i<9; i++)
        y[i].id = `${i}`;
        y[i].innerText = '';
    }
    Teamturn = 1;
}