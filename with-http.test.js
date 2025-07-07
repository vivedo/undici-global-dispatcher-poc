import { test } from "node:test";
import { ok } from "node:assert";
import { getGlobalDispatcher } from "undici";

import "http";

test("with http globalDispatcher has a request method", (t) => {
  const globalDispatcher = getGlobalDispatcher();

  ok(
    globalDispatcher.request !== undefined,
    "globalDispatcher should have a request method",
  );
});
