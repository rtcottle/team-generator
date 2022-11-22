const Intern = require("../lib/intern.js");

describe("Intern", () => {
  // Positive test

  it("when I set school property I'm able to access the value of school on the object", () => {
    // Arrange
    const school = "U of U";

    // Act
    const obj = new Intern("Robert", 4, "robert@yahoo.com", school);

    // Assert
    expect(obj.school).toEqual(school);
  });

  it("when I set school property I'm able to access the value by invoking getSchool method", () => {
    // Arrange
    const school = "U of U";

    // Act
    const obj = new Intern("Robert", 4, "robert@yahoo.com", school);

    // Assert
    expect(obj.getSchool()).toEqual(school);
  });

  it("I'm able to get the role when I invoke the getRole method", () => {
    // Arrange
    const role = "Intern";

    // Act
    const obj = new Intern("Robert", 4, "robert@yahoo.com", "U of U");

    // Assert
    expect(obj.getRole()).toEqual(role);
  });
});
