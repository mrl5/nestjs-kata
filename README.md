# nestjs-kata

https://nestjs.com/

## Install

```console
npm ci --ignore-scripts
```


## Run

```console
export $(grep -v '^#' .env.local | xargs)
docker compose up db
ln -s .env.local .env
npm run start
```
```console
curl -i http://localhost:3000/health
curl -i http://localhost:3000/oas-json
```


## Tests
```
npm run test
npm run test:e2e
```


## Docs

http://localhost:3000/oas
