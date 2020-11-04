# Migration `20201104054834-add-text-in-block`

This migration has been generated at 11/4/2020, 2:48:34 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "public"."Block" ADD COLUMN "text" text   
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20201104054028-add-columns-in-condition-status..20201104054834-add-text-in-block
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
@@ -62,5 +62,6 @@
   id                  Int               @default(autoincrement()) @id
   intent              Intent            @relation(fields: [intentId], references: [id])
   intentId            Int
   conditionsStatuses  ConditionStatus[]
+  text                String?
 }
```


