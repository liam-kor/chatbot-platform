# Migration `20201104054028-add-columns-in-condition-status`

This migration has been generated at 11/4/2020, 2:40:28 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "public"."ConditionStatus" ADD COLUMN "value" integer   NOT NULL ,
ADD COLUMN "description" text   
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20201104053513-changed-intent-to-condition-relations---1-to-many----many-to-many..20201104054028-add-columns-in-condition-status
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
@@ -49,11 +49,13 @@
 }
 model ConditionStatus {
   id                  Int         @default(autoincrement()) @id
-  condition           Condition  @relation(fields: [conditionId], references: [id])
+  value               Int
+  description         String?
+  condition           Condition   @relation(fields: [conditionId], references: [id])
   conditionId         Int
-  block               Block      @relation(fields: [blockId], references: [id])
+  block               Block       @relation(fields: [blockId], references: [id])
   blockId             Int
 }
 model Block {
```


