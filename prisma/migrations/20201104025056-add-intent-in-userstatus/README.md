# Migration `20201104025056-add-intent-in-userstatus`

This migration has been generated at 11/4/2020, 11:50:56 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "public"."User" ADD COLUMN "intentId" integer   

ALTER TABLE "public"."UserStatus" DROP COLUMN "intent_code",
ADD COLUMN "intentId" integer   

ALTER TABLE "public"."User" ADD FOREIGN KEY ("intentId")REFERENCES "public"."Intent"("id") ON DELETE SET NULL ON UPDATE CASCADE

ALTER TABLE "public"."UserStatus" ADD FOREIGN KEY ("intentId")REFERENCES "public"."Intent"("id") ON DELETE SET NULL ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20201104024538-init..20201104025056-add-intent-in-userstatus
--- datamodel.dml
+++ datamodel.dml
@@ -3,37 +3,39 @@
 }
 datasource db {
   provider = "postgresql"
-  url = "***"
+  url = "***"
 }
 model User {
-  id                      Int      @default(autoincrement()) @id
+  id                      Int         @default(autoincrement()) @id
   bot_user_key            String      @unique
   service                 Service
   status                  UserStatus?
   createdAt               DateTime?   @default(now())
   updatedAt               DateTime?   @default(now())
 }
 model Service {
-  id             Int      @default(autoincrement()) @id
+  id             Int         @default(autoincrement()) @id
   name           String      @unique
   users          User[]
   createdAt      DateTime?   @default(now())
   updatedAt      DateTime?   @default(now())
 }
 model UserStatus {
-  id                      Int      @default(autoincrement()) @id
+  id                      Int         @default(autoincrement()) @id
   user                    User        @relation(fields: [userId], references: [id])
   userId                  Int
-  intent_code             String
+  intent                  Intent?     @relation(fields: [intentId], references: [id])      
+  intentId                Int?
 }
 model Intent {
-  id             Int      @default(autoincrement()) @id
+  id             Int         @default(autoincrement()) @id
   name           String      @unique
   code           String      @unique
   type           String?
+  users          User[]
 }
```


