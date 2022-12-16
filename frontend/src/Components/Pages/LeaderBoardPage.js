const LeaderBoardPage = () => {
    const main = document.querySelector('main');
    const leader = `
    <div class="leaderboard">
        <h1>Leaderboard</h1>
        <div class="leaderboard__container">
            <div class="leaderboard__container__header">
            <ul class="ul_leaderboard">
                <li>Rank</li>
                <li>Username</li>
                <li>Score</li>
            </ul>
            </div>
        </div>
    </div>
    `;

    main.innerHTML = leader;
};

export default LeaderBoardPage;
