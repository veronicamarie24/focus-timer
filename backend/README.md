# Backend


## Database Management
The SQLite database file lives locally (/dev.db by default).
Changes to the schema require running a migration.
Store prisma/migrations in Git to track schema changes.

- **Provider**: SQLite (file-based, no server required)
- **ORM**: Prisma
- **Database file**: `dev.db` (created automatically on first migration)

### Useful Database Commands

- `npx prisma studio` - Open database GUI
- `npx prisma migrate dev` - Create and apply migrations
- `npx prisma generate` - Generate Prisma client
- `npx prisma db push` - Push schema changes without migrations
- `npx prisma db seed` - Seed database with initial data (if configured)