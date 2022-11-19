const makePage = (myTeam) => {
  let cards = [];
  console.log("It's my team", myTeam);
  // loop to take each employee type and store data in cards array.
  for (let i = 0; i < myTeam.length; i++) {
    //   let test = `<h1>${myTeam[0].name}</h1>`;
    // TODO: how to get a for loop to go through each card?
    let card = `
            <div class="tile is-6 is-parent">
              <article class="tile is-child notification is-info">
                <p class="title">${myTeam[i].name}</p>
                <p class="subtitle">${myTeam[i].constructor.name}</p>
                <section class="is-primary">
                  <p class="box">${myTeam[i].id}</p>
                  <p class="box"><a href="mailto:${myTeam[i].email}">${myTeam[i].email}</a></p>
                  <p class="box">${myTeam[i].office}${myTeam[i].github}${myTeam[i].school}</p>
                </section>
              </article>
            </div>`;

    const createCards = () => {
      cards.push(card);
    };
    createCards(myTeam);
  }

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
            <p class="title" id="hero">My Team</p>
          </div>
        </section>
        <section class="section">
          <div class="tile is-ancestor is-vertical">
           ${cards}
        </section>
      </main>
    </body>
  </html>
  `;
  return newPage;
};

module.exports = makePage;
