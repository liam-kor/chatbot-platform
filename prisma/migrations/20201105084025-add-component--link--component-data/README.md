# Migration `20201105084025-add-component--link--component-data`

This migration has been generated at 11/5/2020, 5:40:25 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "public"."Block" DROP COLUMN "text"

CREATE TABLE "public"."Component" (
"id" SERIAL,
"text" text   ,
"imageUrl" text   ,
"componentDataId" integer   ,
PRIMARY KEY ("id")
)

CREATE TABLE "public"."Link" (
"id" SERIAL,
"label" text   NOT NULL ,
PRIMARY KEY ("id")
)

CREATE TABLE "public"."ComponentData" (
"id" SERIAL,
"code" text   NOT NULL ,
PRIMARY KEY ("id")
)

CREATE TABLE "public"."_BlockToComponent" (
"A" integer   NOT NULL ,
"B" integer   NOT NULL 
)

CREATE TABLE "public"."_BlockToLink" (
"A" integer   NOT NULL ,
"B" integer   NOT NULL 
)

CREATE UNIQUE INDEX "ComponentData.code_unique" ON "public"."ComponentData"("code")

CREATE UNIQUE INDEX "_BlockToComponent_AB_unique" ON "public"."_BlockToComponent"("A", "B")

CREATE INDEX "_BlockToComponent_B_index" ON "public"."_BlockToComponent"("B")

CREATE UNIQUE INDEX "_BlockToLink_AB_unique" ON "public"."_BlockToLink"("A", "B")

CREATE INDEX "_BlockToLink_B_index" ON "public"."_BlockToLink"("B")

ALTER TABLE "public"."Component" ADD FOREIGN KEY ("componentDataId")REFERENCES "public"."ComponentData"("id") ON DELETE SET NULL ON UPDATE CASCADE

ALTER TABLE "public"."_BlockToComponent" ADD FOREIGN KEY ("A")REFERENCES "public"."Block"("id") ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE "public"."_BlockToComponent" ADD FOREIGN KEY ("B")REFERENCES "public"."Component"("id") ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE "public"."_BlockToLink" ADD FOREIGN KEY ("A")REFERENCES "public"."Block"("id") ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE "public"."_BlockToLink" ADD FOREIGN KEY ("B")REFERENCES "public"."Link"("id") ON DELETE CASCADE ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20201105070801-modified-relation-block-to-conditionstatus..20201105084025-add-component--link--component-data
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
@@ -62,6 +62,26 @@
   id                  Int               @default(autoincrement()) @id
   intent              Intent            @relation(fields: [intentId], references: [id])
   intentId            Int
   conditionStatuses   ConditionStatus[]
+  components          Component[]
+  links               Link[]
+}
+
+model Component {
+  id                  Int               @default(autoincrement()) @id
+  blocks              Block[]
   text                String?
+  imageUrl            String?
+}
+
+model Link {
+  id                  Int               @default(autoincrement()) @id
+  label               String
+  blocks              Block[]
+}
+
+model ComponentData {
+  id                  Int               @default(autoincrement()) @id
+  code                String            @unique
+  components          Component[]
 }
```


