const makePage = (myTeam) => {
  console.log("It's my team", myTeam);
  let test = `<h1>${myTeam[0].name}</h1>`;
  let newPage = `<!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Team Roster</title>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css"
      />
    </head>
    <body>
    ${test}
    </body>
    </html>`;
  return newPage;
};

module.exports = makePage;