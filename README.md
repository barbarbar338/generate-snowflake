# ✨ Generate Snowflake

Generate unique IDs. Inspired by Twitter's Snowflake system.

# 📦 Installation

-   Using yarn: `yarn add generate-snowflake`
-   Using npm: `npm install generate-snowflake`

# 🤓 Usage

```ts
// ES6
import { Snowlfake } from "generate-snowflake";

// CommonJS
const { Snowflake } = require("generate-snowflake");

// Initialize an instance
const EPOCH = Date.now(); // Your projects EPOCH
const snowflakeInstance = new Snowflake(EPOCH);

// Generate ID
const snowflake = snowflakeInstance.generate();
```

# 🧦 Contributing

Fell free to use GitHub's features.
