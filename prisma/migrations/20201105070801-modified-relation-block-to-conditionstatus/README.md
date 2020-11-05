# Migration `20201105070801-modified-relation-block-to-conditionstatus`

This migration has been generated at 11/5/2020, 4:08:01 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "public"."ConditionStatus" DROP CONSTRAINT "ConditionStatus_blockId_fkey"

CREATE TABLE "public"."_BlockToConditionStatus" (
"A" integer   NOT NULL ,
"B" integer   NOT NULL 
)

CREATE UNIQUE INDEX "_BlockToConditionStatus_AB_unique" ON "public"."_BlockToConditionStatus"("A", "B")

CREATE INDEX "_BlockToConditionStatus_B_index" ON "public"."_BlockToConditionStatus"("B")

ALTER TABLE "public"."_BlockToConditionStatus" ADD FOREIGN KEY ("A")REFERENCES "public"."Block"("id") ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE "public"."_BlockToConditionStatus" ADD FOREIGN KEY ("B")REFERENCES "public"."ConditionStatus"("id") ON DELETE CASCADE ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20201104091722-modified-model-name-user-to-chatbot-user..20201105070801-modified-relation-block-to-conditionstatus
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
@@ -53,9 +53,9 @@
   value               Int
   description         String?
   condition           Condition   @relation(fields: [conditionId], references: [id])
   conditionId         Int
-  block               Block?      @relation(fields: [blockId], references: [id])
+  block               Block[]
   blockId             Int?
 }
 model Block {
```


