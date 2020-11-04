# Migration `20201104055805-midified-block-column-name`

This migration has been generated at 11/4/2020, 2:58:06 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql

```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20201104054834-add-text-in-block..20201104055805-midified-block-column-name
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
@@ -61,7 +61,7 @@
 model Block {
   id                  Int               @default(autoincrement()) @id
   intent              Intent            @relation(fields: [intentId], references: [id])
   intentId            Int
-  conditionsStatuses  ConditionStatus[]
+  conditionStatuses   ConditionStatus[]
   text                String?
 }
```


