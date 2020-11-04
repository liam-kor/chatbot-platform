# Migration `20201104053047-add-condition-status---block`

This migration has been generated at 11/4/2020, 2:30:47 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "public"."Condition" (
"id" SERIAL,
"name" text   NOT NULL ,
"code" text   NOT NULL ,
"intentId" integer   NOT NULL ,
PRIMARY KEY ("id")
)

CREATE TABLE "public"."ConditionStatus" (
"id" SERIAL,
"conditionId" integer   NOT NULL ,
"blockId" integer   NOT NULL ,
PRIMARY KEY ("id")
)

CREATE TABLE "public"."Block" (
"id" SERIAL,
"intentId" integer   NOT NULL ,
PRIMARY KEY ("id")
)

ALTER TABLE "public"."Condition" ADD FOREIGN KEY ("intentId")REFERENCES "public"."Intent"("id") ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE "public"."ConditionStatus" ADD FOREIGN KEY ("conditionId")REFERENCES "public"."Condition"("id") ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE "public"."ConditionStatus" ADD FOREIGN KEY ("blockId")REFERENCES "public"."Block"("id") ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE "public"."Block" ADD FOREIGN KEY ("intentId")REFERENCES "public"."Intent"("id") ON DELETE CASCADE ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20201104025431-remove-intent-in-userstatus..20201104053047-add-condition-status---block
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
@@ -35,5 +35,31 @@
   id             Int         @default(autoincrement()) @id
   name           String      @unique
   code           String      @unique
   type           String?
+  conditions     Condition[]
+  blocks         Block[]
+}
+
+model Condition {
+  id                  Int         @default(autoincrement()) @id
+  name                String
+  code                String
+  intent              Intent     @relation(fields: [intentId], references: [id])
+  intentId            Int
+  conditionStatuses   ConditionStatus[]
+}
+
+model ConditionStatus {
+  id                  Int         @default(autoincrement()) @id
+  condition           Condition  @relation(fields: [conditionId], references: [id])
+  conditionId         Int
+  block               Block      @relation(fields: [blockId], references: [id])
+  blockId             Int
+}
+
+model Block {
+  id                  Int               @default(autoincrement()) @id
+  intent              Intent            @relation(fields: [intentId], references: [id])
+  intentId            Int
+  conditionsStatuses  ConditionStatus[]
 }
```


