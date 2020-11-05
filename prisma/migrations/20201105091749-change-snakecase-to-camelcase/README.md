# Migration `20201105091749-change-snakecase-to-camelcase`

This migration has been generated at 11/5/2020, 6:17:49 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
DROP INDEX "public"."ChatbotUser.bot_user_key_unique"

ALTER TABLE "public"."ChatbotUser" DROP COLUMN "bot_user_key",
ADD COLUMN "botUserKey" text   NOT NULL 

ALTER TABLE "public"."ChatbotUserStatus" DROP COLUMN "intent_code",
ADD COLUMN "intentCode" text   

ALTER TABLE "public"."Component" DROP COLUMN "kakaoi_type",
ADD COLUMN "kakaoiType" text   NOT NULL DEFAULT E'SimpleText'

CREATE UNIQUE INDEX "ChatbotUser.botUserKey_unique" ON "public"."ChatbotUser"("botUserKey")
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20201105091223-add-kakaoi_type-in-component..20201105091749-change-snakecase-to-camelcase
--- datamodel.dml
+++ datamodel.dml
@@ -3,14 +3,14 @@
 }
 datasource db {
   provider = "postgresql"
-  url = "***"
+  url = "***"
 }
 model ChatbotUser {
   id                      Int         @default(autoincrement()) @id
-  bot_user_key            String      @unique
+  botUserKey            String      @unique
   service                 Service
   status                  ChatbotUserStatus?
   createdAt               DateTime?   @default(now())
   updatedAt               DateTime?   @default(now())
@@ -27,9 +27,9 @@
 model ChatbotUserStatus {
   id                      Int                @default(autoincrement()) @id
   chatbotUser             ChatbotUser        @relation(fields: [chatbotUserId], references: [id])
   chatbotUserId           Int
-  intent_code             String?
+  intentCode             String?
 }
 model Intent {
   id             Int         @default(autoincrement()) @id
@@ -70,9 +70,9 @@
 model Component {
   id                  Int               @default(autoincrement()) @id
   blocks              Block[]
-  kakaoi_type         String            @default("SimpleText")
+  kakaoiType         String            @default("SimpleText")
   text                String?
   imageUrl            String?
 }
```


