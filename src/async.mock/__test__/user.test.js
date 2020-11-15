import axios from "axios";
import { register } from "../user";
import { verifyUsername, verifyPassword } from "../verify";

jest.mock("../verify");
jest.mock("axios");

describe("register", () => {
  test("should post user when validated", async () => {
    // TODO 19: add test here
    axios.post.mockResolvedValue({
      data: {
        name: "yiming",
      },
    });
    verifyPassword.mockReturnValue(true);
    verifyUsername.mockReturnValue(true);
    const result = register("aaa", "bbb");
    await expect(result).resolves.toEqual({ name: "yiming" });
  });

  test("should reject with Error when username is invalid", async () => {
    // TODO 20: add test here
    verifyPassword.mockReturnValue(true);
    verifyUsername.mockReturnValue(false);
    const result = register("aaa", "bbb");
    await expect(result).rejects.toEqual(Error("wrong username or password"));
  });
});
