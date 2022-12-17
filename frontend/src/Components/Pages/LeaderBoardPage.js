/* eslint-disable */
import { clearPage } from '../../utils/render';


// create leaderboradpage with database
const LeaderboardPage = () => {
     renderLeaderboard();
    }
    
    // render leaderboard
    function renderLeaderboard() {
    const main = document.querySelector('main');
    const container = document.createElement('div');
    container.className = 'container-fluid';
    const subContainer = document.createElement('div');
    subContainer.className = 'row main-content bg-success text-center';

    const leftPart = document.createElement('div');
    leftPart.className = 'col-md-4 text-center font-logo';

    const span = document.createElement('span');
    span.className = 'font-logo';

    const divTitle = document.createElement('div');
    divTitle.className = 'row';

    const title = document.createElement('h2');
    title.innerText = 'Leaderboard';
    
    const table = document.createElement('table');

    const thead = document.createElement('thead');
    const tr = document.createElement('tr');
    const th1 = document.createElement('th');
    th1.innerText = 'Username';
    const th2 = document.createElement('th');
    th2.innerText = 'Score';
    const th3 = document.createElement('th');
    th3.innerText = 'Chips';
    tr.appendChild(th1);
    tr.appendChild(th2);
    tr.appendChild(th3);
    thead.appendChild(tr);
    table.appendChild(thead);

    const tbody = document.createElement('tbody');
    table.appendChild(tbody);
    
    
    // get data from database
    leaderboard().then((data) => {
        data.forEach((user) => {
            const tr = document.createElement('tr');
            const td1 = document.createElement('td');
            td1.innerText = user.username;
            const td2 = document.createElement('td');
            td2.innerText = user.score;
            const td3 = document.createElement('td');
            td3.innerText = user.chips;
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tbody.appendChild(tr);
        });
    }
    );

    divTitle.appendChild(title);
    leftPart.appendChild(span);
    leftPart.appendChild(image);
    leftPart.appendChild(divTitle);
    leftPart.appendChild(table);
    subContainer.appendChild(leftPart);
    container.appendChild(subContainer);
    main.appendChild(container);
    }

    export default LeaderboardPage;




