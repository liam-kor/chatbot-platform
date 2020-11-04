# Migration `20201104091722-modified-model-name-user-to-chatbot-user`

This migration has been generated at 11/4/2020, 6:17:23 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "public"."User" DROP CONSTRAINT "User_serviceId_fkey"

ALTER TABLE "public"."UserStatus" DROP CONSTRAINT "UserStatus_userId_fkey"

CREATE TABLE "public"."ChatbotUser" (
"id" SERIAL,
"bot_user_key" text   NOT NULL ,
"createdAt" timestamp(3)   DEFAULT CURRENT_TIMESTAMP,
"updatedAt" timestamp(3)   DEFAULT CURRENT_TIMESTAMP,
"serviceId" integer   NOT NULL ,
PRIMARY KEY ("id")
)

CREATE TABLE "public"."ChatbotUserStatus" (
"id" SERIAL,
"chatbotUserId" integer   NOT NULL ,
"intent_code" text   ,
PRIMARY KEY ("id")
)

CREATE UNIQUE INDEX "ChatbotUser.bot_user_key_unique" ON "public"."ChatbotUser"("bot_user_key")

CREATE UNIQUE INDEX "ChatbotUserStatus_chatbotUserId_unique" ON "public"."ChatbotUserStatus"("chatbotUserId")

ALTER TABLE "public"."ChatbotUser" ADD FOREIGN KEY ("serviceId")REFERENCES "public"."Service"("id") ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE "public"."ChatbotUserStatus" ADD FOREIGN KEY ("chatbotUserId")REFERENCES "public"."ChatbotUser"("id") ON DELETE CASCADE ON UPDATE CASCADE

DROP TABLE "public"."User"

DROP TABLE "public"."UserStatus"
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20201104070054-modified-block-can-be-null-in-condition-status..20201104091722-modified-model-name-user-to-chatbot-user
--- datamodel.dml
+++ datamodel.dml
@@ -3,32 +3,32 @@
 }
 datasource db {
   provider = "postgresql"
-  url = "***"
+  url = "***"
 }
-model User {
+model ChatbotUser {
   id                      Int         @default(autoincrement()) @id
   bot_user_key            String      @unique
   service                 Service
-  status                  UserStatus?
+  status                  ChatbotUserStatus?
   createdAt               DateTime?   @default(now())
   updatedAt               DateTime?   @default(now())
 }
 model Service {
   id             Int         @default(autoincrement()) @id
   name           String      @unique
-  users          User[]
+  chatbotUsers   ChatbotUser[]
   createdAt      DateTime?   @default(now())
   updatedAt      DateTime?   @default(now())
 }
-model UserStatus {
-  id                      Int         @default(autoincrement()) @id
-  user                    User        @relation(fields: [userId], references: [id])
-  userId                  Int
+model ChatbotUserStatus {
+  id                      Int                @default(autoincrement()) @id
+  chatbotUser             ChatbotUser        @relation(fields: [chatbotUserId], references: [id])
+  chatbotUserId           Int
   intent_code             String?
 }
 model Intent {
```


