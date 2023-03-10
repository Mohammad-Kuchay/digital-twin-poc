# Digital Twin POC
## Create an node project

```bash
$ mkdir some-dir
$ npm init -y
```

## Installation

```bash
$ cd some-dir
$ npm install digital-twin-poc
```

## Setup enviroment variables

```bash
touch .env
#open .env and set the variables

COSMOS_GREMLIN_ENDPOINT=
COSMOS_GREMLIN_PRIMARY_KEY=
COSMOS_GREMLIN_DATABASE=
COSMOS_GREMLIN_COLLECTION=
```

## use the digital-twin-poc in your code

```typescript
// app.js/ts
import { bootstrapDigitalTwin } from 'digital-twin-poc';
bootstrapDigitalTwin();
```
## Run the app.js
 App will be listening on http://localhost:8080/docs#/
```
