# PVX Database

## Overview

The PVX Database repository manages our PostgreSQL database schema, migrations, and seeding scripts using Flyway for consistent and reliable migrations.

### Version Control

- **V for Versioning**: Migration files are prefixed with version numbers (e.g., V1**, V2**) to track the order of changes.
- **R for Repeatable Migrations**: Flyway supports repeatable migrations, allowing re-application of scripts when changes occur.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Java](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html) (required by Flyway)
- [Flyway](https://flywaydb.org/documentation/usage/commandline) (install via Homebrew, APT, or download)
- [PostgreSQL](https://www.postgresql.org/download/) (make sure your database server is running)

### Configuration

Configure your `flyway.conf` file (located in the root directory) with your PostgreSQL database connection details:

```properties
flyway.url=jdbc:postgresql://localhost:5432/yourdatabase
flyway.user=yourusername
flyway.password=yourpassword
```

## Flyway Commands

Here are some essential Flyway commands for managing your database migrations:

- **Migrate**: Apply all pending migrations to the database.

  ```bash
  flyway migrate
  ```

- **Info**: Display the current state of all migrations.

  ```bash
  flyway info
  ```

- **Clean**: Drop all objects in the configured schemas. Use with caution!

  ```bash
  flyway clean
  ```

- **Validate**: Validate the applied migrations against the ones on disk.

  ```bash
  flyway validate
  ```
