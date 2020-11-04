# Migration `20201104025431-remove-intent-in-userstatus`

This migration has been generated at 11/4/2020, 11:54:31 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "public"."User" DROP CONSTRAINT "User_intentId_fkey"

ALTER TABLE "public"."UserStatus" DROP CONSTRAINT "UserStatus_intentId_fkey"

ALTER TABLE "public"."User" DROP COLUMN "intentId"

ALTER TABLE "public"."UserStatus" DROP COLUMN "intentId",
ADD COLUMN "intent_code" text   
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20201104025056-add-intent-in-userstatus..20201104025431-remove-intent-in-userstatus
--- datamodel.dml
+++ datamodel.dml
@@ -3,9 +3,9 @@
 }
 datasource db {
   provider = "postgresql"
-  url = "***"
+  url = "***"
 }
 model User {
   id                      Int         @default(autoincrement()) @id
@@ -27,15 +27,13 @@
 model UserStatus {
   id                      Int         @default(autoincrement()) @id
   user                    User        @relation(fields: [userId], references: [id])
   userId                  Int
-  intent                  Intent?     @relation(fields: [intentId], references: [id])      
-  intentId                Int?
+  intent_code             String?
 }
 model Intent {
   id             Int         @default(autoincrement()) @id
   name           String      @unique
   code           String      @unique
   type           String?
-  users          User[]
 }
```


