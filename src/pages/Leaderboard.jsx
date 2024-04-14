export default function Leaderboard() {
  const leaderboardData = [
    { name: "John", score: "100000" },
    { name: "Sarah", score: "99999" },
    { name: "Emma", score: "99998" },
    { name: "Michael", score: "99997" },
    { name: "Jessica", score: "99996" },
    { name: "David", score: "99995" },
    { name: "Emily", score: "99994" },
    { name: "Matthew", score: "99993" },
    { name: "Olivia", score: "99992" },
    { name: "Daniel", score: "99991" }
  ];

  return (
    <html>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Quiz Leaderboard</title>
        <style>
          {`
          body {
            font-family: Arial, sans-serif;
            background-image: url('src/bg.jpg');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            background-attachment: fixed;
            color: #ffffff;
            margin: 0;
            padding: 0;
          }
          table {
            width: 80%;
            margin: 20px auto;
            border-collapse: collapse;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
            border-radius: 8px;
            overflow: hidden;
            background-color: rgba(0, 0, 0, 0.7);
          }
          caption {
            font-size: 1.5em;
            margin-bottom: 10px;
            text-align: center;
            color: #ffffff;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
          }
          th, td {
            padding: 12px 15px;
            text-align: left;
            border-bottom: 1px solid #dddddd;
          }
          th {
            background-color: #333333;
            color: #ffffff;
          }
          tr:nth-child(even) {
            background-color: #222222;
          }
          tr:nth-child(odd) {
            background-color: #333333;
          }
          .rank {
            width: 10%;
          }
          .name {
            width: 60%;
          }
          .score {
            width: 30%;
            text-align: center;
          }
          `}
        </style>
      </head>
      <body>
        <table>
          <caption>Top 10 Quiz Leaderboard</caption>
          <thead>
            <tr>
              <th className="rank">Rank</th>
              <th className="name">Name</th>
              <th className="score">Score</th>
            </tr>
          </thead>
          <tbody>
            {leaderboardData.map((participant, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{participant.name}</td>
                <td>{participant.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </body>
    </html>
  );
}
