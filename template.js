const makePage = (myTeam) => {
  let cards = [];
  console.log("It's my team", myTeam);
  // determines if office number, github, or school is shown in card.
  let alternativeContact = (employee) => {
    const role = employee.getRole();
    switch (role) {
      case "Manager":
        return employee.officeNumber;
      case "Engineer":
        return employee.github;
      case "Intern":
        return employee.school;
    }
  };
  // loop to take each employee type and store data in cards array.
  for (let i = 0; i < myTeam.length; i++) {
    const employee = myTeam[i];
    // section builds the cards for each employee
    let card = `
            <div class="tile is-6 is-parent">
              <article class="tile is-child notification is-info">
                <p class="title">${employee.name}</p>
                <p class="subtitle">${employee.getRole()}</p>
                <section class="is-primary">
                  <p class="box">${employee.id}</p>
                  <p class="box"><a href="mailto:${employee.email}">${
      employee.email
    }</a></p>
                  <p class="box">${alternativeContact(employee)}</p>
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
