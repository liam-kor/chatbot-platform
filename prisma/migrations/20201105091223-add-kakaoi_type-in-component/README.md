# Migration `20201105091223-add-kakaoi_type-in-component`

This migration has been generated at 11/5/2020, 6:12:23 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "public"."Component" ADD COLUMN "kakaoi_type" text   NOT NULL DEFAULT E'SimpleText'
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20201105084746-add-description-in-block..20201105091223-add-kakaoi_type-in-component
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
@@ -70,8 +70,9 @@
 model Component {
   id                  Int               @default(autoincrement()) @id
   blocks              Block[]
+  kakaoi_type         String            @default("SimpleText")
   text                String?
   imageUrl            String?
 }
```


