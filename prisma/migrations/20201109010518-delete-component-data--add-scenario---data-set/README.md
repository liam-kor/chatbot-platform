# Migration `20201109010518-delete-component-data--add-scenario---data-set`

This migration has been generated at 11/9/2020, 10:05:18 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "public"."Component" DROP CONSTRAINT "Component_componentDataId_fkey"

ALTER TABLE "public"."Component" DROP COLUMN "componentDataId"

ALTER TABLE "public"."Intent" ADD COLUMN "scenarioId" integer   

CREATE TABLE "public"."Scenario" (
"id" SERIAL,
"code" text   NOT NULL ,
"name" text   NOT NULL ,
PRIMARY KEY ("id")
)

CREATE TABLE "public"."DataSet" (
"id" SERIAL,
"code" text   NOT NULL ,
"description" text   ,
PRIMARY KEY ("id")
)

CREATE UNIQUE INDEX "Scenario.code_unique" ON "public"."Scenario"("code")

CREATE UNIQUE INDEX "DataSet.code_unique" ON "public"."DataSet"("code")

ALTER TABLE "public"."Intent" ADD FOREIGN KEY ("scenarioId")REFERENCES "public"."Scenario"("id") ON DELETE SET NULL ON UPDATE CASCADE

DROP TABLE "public"."ComponentData"
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20201106011604-add-order-in-component..20201109010518-delete-component-data--add-scenario---data-set
--- datamodel.dml
+++ datamodel.dml
@@ -3,9 +3,9 @@
 }
 datasource db {
   provider = "postgresql"
-  url = "***"
+  url = "***"
 }
 model ChatbotUser {
   id                      Int         @default(autoincrement()) @id
@@ -27,17 +27,26 @@
 model ChatbotUserStatus {
   id                      Int                @default(autoincrement()) @id
   chatbotUser             ChatbotUser        @relation(fields: [chatbotUserId], references: [id])
   chatbotUserId           Int
-  intentCode             String?
+  intentCode              String?
 }
+model Scenario {
+  id             Int         @default(autoincrement()) @id
+  code           String      @unique
+  name           String
+  intents        Intent[]
+}
+
 model Intent {
   id             Int         @default(autoincrement()) @id
   name           String      @unique
   code           String      @unique
   type           String?
   conditions     Condition[]
+  scenario       Scenario?   @relation(fields: [scenarioId], references: [id])
+  scenarioId     Int?    
   blocks         Block[]
 }
 model Condition {
@@ -67,8 +76,14 @@
   links               Link[]
   description         String?
 }
+model DataSet {
+  id                  Int               @default(autoincrement()) @id
+  code                String            @unique
+  description         String?
+}
+
 model Component {
   id                  Int               @default(autoincrement()) @id
   blocks              Block[]
   kakaoiType          String            @default("SimpleText")
@@ -81,11 +96,5 @@
   id                  Int               @default(autoincrement()) @id
   label               String
   blocks              Block[]
   intent              Intent
-}
-
-model ComponentData {
-  id                  Int               @default(autoincrement()) @id
-  code                String            @unique
-  components          Component[]
 }
```


