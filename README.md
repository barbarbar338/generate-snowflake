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

# 💻 How It Works?

```
EPOCH: 1618606800
Snowflake: 6782465263234318336

Binary: 101111000100000001010000011100011001100100000100000000000000000
Timestamp: 1617065730866
WorkerID: 1
ProcessID: 0
Increment: 0

●------------------------------------------------------------------------●

╔                                        Binary                          ╗
║10111100010000000101000001110001100110010║ ║00001║ ║00000║ ║000000000000║
╚               Timestamp                 ╝ ╚ WID ╝ ╚ PID ╝ ╚  Increment ╝
```


# 🧦 Contributing

Fell free to use GitHub's features.
