# Royale API Types

Type definitions for the [Royale API](https://developer.clashroyale.com)

## Installation

You can install this package using a package manager like [npm](https://www.npmjs.com/):

```sh
npm install royale-api-types
```

**Note:** This package is based on the latest Node.js LTS version.
It may work with older versions, but it is not guaranteed.

## Description

This package provides type definitions for the [Royale API](https://developer.clashroyale.com) for use with [TypeScript](https://www.typescriptlang.org/).
It also includes all routes from the API that can be used in JavaScript.

## Usage

All types from the API are exported as `API*`:

```ts
import type { APIPlayer } from "royale-api-types";

const player: APIPlayer = {
	tag: "#22RJCYLUY",
	name: "D Trombett",
	// ...
};
```

```ts
import type { APIItem } from "royale-api-types";

// Type '{ name: string; id: number; }' is missing the following properties from type 'APIItem': iconUrls, maxLevel
const card: APIItem = {
	name: "Giant",
	id: 1,
};
```

You can also use the `Routes` interface to access the routes.

**Note:** Tags should be encoded when sending a request to the API.

```ts
import { Routes } from "royale-api-types";

console.log(Routes.Clans()); // "/clans"
console.log(Routes.Clan("#L2Y2L2PC")); // "/clans/#L2Y2L2PC"
```

Types are documented by Clash Royale's [API documentation](https://developer.clashroyale.com/#/documentation).
We do our best to keep the types up to date, but we would appreciate any contributions.

---

**This content is not affiliated with, endorsed, sponsored, or specifically approved by Supercell and Supercell is not responsible for it. For more information see [Supercell’s Fan Content Policy](http://www.supercell.com/fan-content-policy).**
