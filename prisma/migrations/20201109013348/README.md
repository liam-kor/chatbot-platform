# Migration `20201109013348`

This migration has been generated at 11/9/2020, 10:33:48 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "public"."Block" DROP COLUMN "is_dynamic",
ADD COLUMN "isDynamic" boolean   NOT NULL DEFAULT false
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20201109011708-add-column---block---is_dynamic..20201109013348
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
@@ -75,9 +75,9 @@
   components          Component[]
   links               Link[]
   description         String?
   code                String            @default("None")
-  is_dynamic          Boolean           @default(false)
+  isDynamic           Boolean           @default(false)
   dataSet             DataSet[]
 }
 model DataSet {
```


