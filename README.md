## Node Backend + TS
A clean Architecture Backend, made with express, typescript and postgres.

## Technologies
The stack I used here were:
- Node + Typescript + Docker
- Express
- TypeORM
- Postgres 
- PGadmin

## Build
To transpile TS code execute:
```
npm run build
```

## Development
For development use:
```
npm run dev
```

## Docker Compose
To execute postgres DB and PGadmin run the following command:
```
docker compose up -d
```

## Migrations
To generate a migration execute:
```
npm run typeorm -- migration:generate ./src/migrations/migration-name -d ./src/data-source.ts
```


