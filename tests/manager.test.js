const Manager = require("../lib/manager.js");

describe("Manager", () => {
  // Positive test

  it("when I set officeNumber property I'm able to access the value of officeNumber on the object", () => {
    // Arrange
    const officeNumber = 11;

    // Act
    const obj = new Manager("Robert", 4, "robert@yahoo.com", officeNumber);

    // Assert
    expect(obj.officeNumber).toEqual(officeNumber);
  });

  it("when I set officeNumber property I'm able to access the value by invoking getOfficeNumber method", () => {
    // Arrange
    const officeNumber = 11;

    // Act
    const obj = new Manager("Robert", 4, "robert@yahoo.com", officeNumber);

    // Assert
    expect(obj.getOfficeNumber()).toEqual(officeNumber);
  });

  it("I'm able to get the role when I invoke the getRole method", () => {
    // Arrange
    const role = "Manager";

    // Act
    const obj = new Manager("Robert", 4, "robert@yahoo.com", 11);

    // Assert
    expect(obj.getRole()).toEqual(role);
  });
});
