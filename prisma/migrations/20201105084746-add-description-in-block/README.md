# Migration `20201105084746-add-description-in-block`

This migration has been generated at 11/5/2020, 5:47:46 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "public"."Block" ADD COLUMN "description" text   
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20201105084341-add-intent-in-link..20201105084746-add-description-in-block
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
@@ -64,8 +64,9 @@
   intentId            Int
   conditionStatuses   ConditionStatus[]
   components          Component[]
   links               Link[]
+  description         String?
 }
 model Component {
   id                  Int               @default(autoincrement()) @id
```


