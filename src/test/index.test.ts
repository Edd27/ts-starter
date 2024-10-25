import { bootstrap } from "../index";

describe("App", () => {
  it("Bootstrap project", () => {
    const consoleSpy = jest.spyOn(console, "log");

    bootstrap();

    expect(consoleSpy).toHaveBeenCalledWith("Hello World!");

    consoleSpy.mockRestore();
  });
});
