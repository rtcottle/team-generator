const makePage = (myTeam) => {
  console.log("It's my team", myTeam);
  //   let test = `<h1>${myTeam[0].name}</h1>`;
  let test2 = `<div class="tile is-6 is-parent">
              <article class="tile is-child notification is-info">
                <p class="title">${myTeam[0].name}</p>
                <p class="subtitle">${myTeam[0].role}</p>
                <section class="is-primary">
                  <p class="box">${myTeam[0].id}</p>
                  <p class="box"><a href="mailto:${myTeam[0].email}">${myTeam[0].email}</a></p>
                  <p class="box">${myTeam[0].office}</p>
                </section>
              </article>
            </div>`;
  let cards = [];

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
      <main>
        <section class="hero is-small is-primary is-danger">
          <div class="hero-body">
            <p class="title">My Team</p>
          </div>
        </section>
        <section class="section">
          <div class="tile is-ancestor is-vertical">
           ${test2}
        </section>
      </main>
    </body>
  </html>
  `;
  return newPage;
};

module.exports = makePage;
