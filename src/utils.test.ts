import type { Equal } from "./testutils.js";
import { describe, it, assert } from "./testutils.js";
import type { Recurse } from "./utils.js";

describe("Recurse", () => {
  it("peels nested { __rec: T } objects", () => {
    assert<Equal<Recurse<42>, 42>>();
    assert<Equal<Recurse<{ __rec: 42 }>, 42>>();
    assert<Equal<Recurse<{ __rec: { __rec: 42 } }>, 42>>();
    assert<Equal<Recurse<{ __rec: { __rec: { __rec: 42 } } }>, 42>>();
    assert<Equal<Recurse<{ __rec: { __rec: { __rec: { __rec: 42 } } } }>, 42>>();

    assert<Equal<Recurse<never>, never>>();
    assert<Equal<Recurse<{ __rec: never }>, never>>();
    assert<Equal<Recurse<{ __rec: { __rec: never } }>, never>>();
    assert<Equal<Recurse<{ __rec: { __rec: { __rec: never } } }>, never>>();
    assert<Equal<Recurse<{ __rec: { __rec: { __rec: { __rec: never } } } }>, never>>();
  });
});
