const Manager = requires("../lib/manager.js");
const index = requires("../index.js");

describe("Manager", () => {
  describe("Initialization", () => {
    //Positive test
    it("should create an object with a 'name' property set to the 'text' argument provided when called with the 'new' keyword", () => {
      //Arrange
      const text = "Robert Smith";

      //Act
      const obj = new Manager(text);

      //Assert
      expect(obj.text).toEqual(text);
    });

    //Exception test
    it("should throw an error if not provided a 'text' value", () => {
      //Arrange
      const cb = () => new Manager();
      const err = new Error(
        "expected parameter 'text' to be a non empty string"
      );
      //Assert
      expect(cb).toThrowError(err);
    });
  });
});
