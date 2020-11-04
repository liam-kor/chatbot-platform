# Migration `20201104053513-changed-intent-to-condition-relations---1-to-many----many-to-many`

This migration has been generated at 11/4/2020, 2:35:13 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "public"."Condition" DROP CONSTRAINT "Condition_intentId_fkey"

ALTER TABLE "public"."Condition" DROP COLUMN "intentId"

CREATE TABLE "public"."_ConditionToIntent" (
"A" integer   NOT NULL ,
"B" integer   NOT NULL 
)

CREATE UNIQUE INDEX "_ConditionToIntent_AB_unique" ON "public"."_ConditionToIntent"("A", "B")

CREATE INDEX "_ConditionToIntent_B_index" ON "public"."_ConditionToIntent"("B")

ALTER TABLE "public"."_ConditionToIntent" ADD FOREIGN KEY ("A")REFERENCES "public"."Condition"("id") ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE "public"."_ConditionToIntent" ADD FOREIGN KEY ("B")REFERENCES "public"."Intent"("id") ON DELETE CASCADE ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20201104053047-add-condition-status---block..20201104053513-changed-intent-to-condition-relations---1-to-many----many-to-many
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
@@ -43,10 +43,9 @@
 model Condition {
   id                  Int         @default(autoincrement()) @id
   name                String
   code                String
-  intent              Intent     @relation(fields: [intentId], references: [id])
-  intentId            Int
+  intents             Intent[]
   conditionStatuses   ConditionStatus[]
 }
 model ConditionStatus {
```


