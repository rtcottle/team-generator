const Engineer = require("../lib/engineer.js");

describe("Engineer", () => {
  // Positive test

  it("when I set github property I'm able to access the value of github on the object", () => {
    // Arrange
    const github = "robert1234";

    // Act
    const obj = new Engineer("Robert", 4, "robert@yahoo.com", github);

    // Assert
    expect(obj.github).toEqual(github);
  });

  it("when I set github property I'm able to access the value by invoking getGitHub method", () => {
    // Arrange
    const github = "robert1234";

    // Act
    const obj = new Engineer("Robert", 4, "robert@yahoo.com", github);

    // Assert
    expect(obj.getGitHub()).toEqual(github);
  });

  it("I'm able to get the role when I invoke the getRole method", () => {
    // Arrange
    const role = "Engineer";

    // Act
    const obj = new Engineer("Robert", 4, "robert@yahoo.com", "robert1234");

    // Assert
    expect(obj.getRole()).toEqual(role);
  });
});
