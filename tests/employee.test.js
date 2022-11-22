const Employee = require("../lib/employee.js");

describe("Employee", () => {
  // Positive test
  it("should create an object with a 'name' property set to the 'name' argument provided when called with the 'new' keyword", () => {
    // Arrange
    const name = "Robert";

    // Act
    const obj = new Employee(name);

    // Assert
    expect(obj.name).toEqual(name);
  });

  it("should create an object with a 'id' property set to the 'id' argument provided when called with the 'new' keyword", () => {
    // Arrange
    const id = "4";

    // Act
    const obj = new Employee("Robert", id);

    // Assert
    expect(obj.id).toEqual(id);
  });

  it("should create an object with a 'email' property set to the 'email' argument provided when called with the 'new' keyword", () => {
    // Arrange
    const email = "robert@yahoo.com";

    // Act
    const obj = new Employee("Robert", 4, email);

    // Assert
    expect(obj.email).toEqual(email);
  });

  it("when I call getEmail it returns the email value", () => {
    // Arrange
    const email = "robert@yahoo.com";

    // Act
    const obj = new Employee("Robert", 4, email);

    // Assert
    expect(obj.getEmail()).toEqual(email);
  });

  it("when I call getId it returns the id value", () => {
    // Arrange
    const id = 4;

    // Act
    const obj = new Employee("Robert", id);

    // Assert
    expect(obj.getId()).toEqual(id);
  });

  it("when I call getName it returns the name value", () => {
    // Arrange
    const name = "Robert";

    // Act
    const obj = new Employee(name);

    // Assert
    expect(obj.getName()).toEqual(name);
  });
});
