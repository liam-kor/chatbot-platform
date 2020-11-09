# Migration `20201109011232-add-relation-block---dataset`

This migration has been generated at 11/9/2020, 10:12:32 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "public"."Block" ADD COLUMN "code" text   NOT NULL DEFAULT E'None'

ALTER TABLE "public"."Intent" ALTER COLUMN "scenarioId" SET NOT NULL

CREATE TABLE "public"."_BlockToDataSet" (
"A" integer   NOT NULL ,
"B" integer   NOT NULL 
)

CREATE UNIQUE INDEX "_BlockToDataSet_AB_unique" ON "public"."_BlockToDataSet"("A", "B")

CREATE INDEX "_BlockToDataSet_B_index" ON "public"."_BlockToDataSet"("B")

ALTER TABLE "public"."_BlockToDataSet" ADD FOREIGN KEY ("A")REFERENCES "public"."Block"("id") ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE "public"."_BlockToDataSet" ADD FOREIGN KEY ("B")REFERENCES "public"."DataSet"("id") ON DELETE CASCADE ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20201109010518-delete-component-data--add-scenario---data-set..20201109011232-add-relation-block---dataset
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
@@ -43,10 +43,10 @@
   name           String      @unique
   code           String      @unique
   type           String?
   conditions     Condition[]
-  scenario       Scenario?   @relation(fields: [scenarioId], references: [id])
-  scenarioId     Int?    
+  scenario       Scenario    @relation(fields: [scenarioId], references: [id])
+  scenarioId     Int    
   blocks         Block[]
 }
 model Condition {
@@ -74,14 +74,17 @@
   conditionStatuses   ConditionStatus[]
   components          Component[]
   links               Link[]
   description         String?
+  code                String            @default("None")
+  dataSet             DataSet[]
 }
 model DataSet {
   id                  Int               @default(autoincrement()) @id
   code                String            @unique
   description         String?
+  blocks              Block[]
 }
 model Component {
   id                  Int               @default(autoincrement()) @id
```


