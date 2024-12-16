import { describe, expect, it } from "vitest";

describe("example tests", () => {
  it("ensures simnet is well initalised", () => {
    expect(simnet.blockHeight).toBeDefined();
  });

  it("should report the type issue on callReadOnlyFn", () => {
    const { result } = simnet.callReadOnlyFn("test");
    expect(result).toBePrincipal("");
  });
});
