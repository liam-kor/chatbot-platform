# Migration `20201104024538-init`

This migration has been generated at 11/4/2020, 11:45:38 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "public"."User" (
"id" SERIAL,
"bot_user_key" text   NOT NULL ,
"createdAt" timestamp(3)   DEFAULT CURRENT_TIMESTAMP,
"updatedAt" timestamp(3)   DEFAULT CURRENT_TIMESTAMP,
"serviceId" integer   NOT NULL ,
PRIMARY KEY ("id")
)

CREATE TABLE "public"."Service" (
"id" SERIAL,
"name" text   NOT NULL ,
"createdAt" timestamp(3)   DEFAULT CURRENT_TIMESTAMP,
"updatedAt" timestamp(3)   DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY ("id")
)

CREATE TABLE "public"."UserStatus" (
"id" SERIAL,
"userId" integer   NOT NULL ,
"intent_code" text   NOT NULL ,
PRIMARY KEY ("id")
)

CREATE TABLE "public"."Intent" (
"id" SERIAL,
"name" text   NOT NULL ,
"code" text   NOT NULL ,
"type" text   ,
PRIMARY KEY ("id")
)

CREATE UNIQUE INDEX "User.bot_user_key_unique" ON "public"."User"("bot_user_key")

CREATE UNIQUE INDEX "Service.name_unique" ON "public"."Service"("name")

CREATE UNIQUE INDEX "UserStatus_userId_unique" ON "public"."UserStatus"("userId")

CREATE UNIQUE INDEX "Intent.name_unique" ON "public"."Intent"("name")

CREATE UNIQUE INDEX "Intent.code_unique" ON "public"."Intent"("code")

ALTER TABLE "public"."User" ADD FOREIGN KEY ("serviceId")REFERENCES "public"."Service"("id") ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE "public"."UserStatus" ADD FOREIGN KEY ("userId")REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20201104024538-init
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,39 @@
+generator client {
+  provider = "prisma-client-js"
+}
+
+datasource db {
+  provider = "postgresql"
+  url = "***"
+}
+
+model User {
+  id                      Int      @default(autoincrement()) @id
+  bot_user_key            String      @unique
+  service                 Service
+  status                  UserStatus?
+  createdAt               DateTime?   @default(now())
+  updatedAt               DateTime?   @default(now())
+}
+
+model Service {
+  id             Int      @default(autoincrement()) @id
+  name           String      @unique
+  users          User[]
+  createdAt      DateTime?   @default(now())
+  updatedAt      DateTime?   @default(now())
+}
+
+model UserStatus {
+  id                      Int      @default(autoincrement()) @id
+  user                    User        @relation(fields: [userId], references: [id])
+  userId                  Int
+  intent_code             String
+}
+
+model Intent {
+  id             Int      @default(autoincrement()) @id
+  name           String      @unique
+  code           String      @unique
+  type           String?
+}
```


