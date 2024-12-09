# PVX Database

## Overview

The PVX Database repository manages our PostgreSQL database schema, migrations, and seeding scripts using **Sequelize** for consistent and reliable migrations.

### Version Control

Migration files are prefixed with timestamps (e.g., `202311280001-create-user.js`, `202311280002-add-column.js`) to track the order of changes.

- The prefix is a timestamp that ensures migrations are applied in the correct order based on the time they were created.
- The number portion of the filename (e.g., `202311280001`) is a sortable timestamp, typically in the format `YYYYMMDDHHMMSS`, ensuring migrations are run sequentially in the correct order.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/en/) (required to run Sequelize and related tools)
- [Sequelize CLI](https://flywaydb.org/documentation/usage/commandline) (install via npm)

  ```bash
  npm install -g sequelize-cli
  ```

- [PostgreSQL](https://www.postgresql.org/download/) (make sure your database server is running)
  - Create a database of name `pvx`

### Configuration

Configure your `config/config.json` file (located in the root directory) with your PostgreSQL database connection details:

```properties
  "development": {
    "username": "yourusername",
    "password": "yourpassword",
    "database": "pvx",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
```

### Run

```bash
sequelize db:migrate
sequelize db:seed:all
```

## Sequelize Commands

Here are some essential Sequelize commands for managing your database migrations:

- **Migrate**: Apply all pending migrations to the database.

  ```bash
  sequelize db:migrate --env development
  ```

- **Undo**: Revert the last migration.

  ```bash
  sequelize db:migrate:undo
  ```

- **Info**: Display the current state of all migrations.

  ```bash
  sequelize db:migrate:status
  ```

- **Seed**: Populate the database with initial data using seed files.

  ```bash
  sequelize db:seed:all
  ```

- **Undo Seed**: Undo the last seed operation.

  ```bash
  sequelize db:seed:undo
  ```

- **Create Migration**: Create a new migration file.

  ```bash
  sequelize migration:generate --name migration-name
  ```

- **Create Seed**: Create a new seed file.

  ```bash
  sequelize seed:generate --name seed-name
  ```

- **Clean**: Drop all tables (use with caution!).

  ```bash
  sequelize db:drop
  ```
