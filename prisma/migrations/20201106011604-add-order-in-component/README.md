# Migration `20201106011604-add-order-in-component`

This migration has been generated at 11/6/2020, 10:16:04 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "public"."Component" ADD COLUMN "order" integer   NOT NULL DEFAULT 0
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20201105091749-change-snakecase-to-camelcase..20201106011604-add-order-in-component
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
@@ -70,9 +70,10 @@
 model Component {
   id                  Int               @default(autoincrement()) @id
   blocks              Block[]
-  kakaoiType         String            @default("SimpleText")
+  kakaoiType          String            @default("SimpleText")
+  order               Int               @default(0)
   text                String?
   imageUrl            String?
 }
```


