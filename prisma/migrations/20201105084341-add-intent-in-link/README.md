# Migration `20201105084341-add-intent-in-link`

This migration has been generated at 11/5/2020, 5:43:41 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "public"."Link" ADD COLUMN "intentId" integer   NOT NULL 

ALTER TABLE "public"."Link" ADD FOREIGN KEY ("intentId")REFERENCES "public"."Intent"("id") ON DELETE CASCADE ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20201105084025-add-component--link--component-data..20201105084341-add-intent-in-link
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
@@ -77,8 +77,9 @@
 model Link {
   id                  Int               @default(autoincrement()) @id
   label               String
   blocks              Block[]
+  intent              Intent
 }
 model ComponentData {
   id                  Int               @default(autoincrement()) @id
```


