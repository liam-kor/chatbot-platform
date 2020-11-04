# Migration `20201104070054-modified-block-can-be-null-in-condition-status`

This migration has been generated at 11/4/2020, 4:00:54 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "public"."ConditionStatus" ALTER COLUMN "blockId" DROP NOT NULL
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20201104055805-midified-block-column-name..20201104070054-modified-block-can-be-null-in-condition-status
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
@@ -53,10 +53,10 @@
   value               Int
   description         String?
   condition           Condition   @relation(fields: [conditionId], references: [id])
   conditionId         Int
-  block               Block       @relation(fields: [blockId], references: [id])
-  blockId             Int
+  block               Block?      @relation(fields: [blockId], references: [id])
+  blockId             Int?
 }
 model Block {
   id                  Int               @default(autoincrement()) @id
```


