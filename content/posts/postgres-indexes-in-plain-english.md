---
title: Postgres indexes in plain English
date: 2024-12-02
excerpt: What an index actually is, why the planner sometimes ignores yours, and how to read an EXPLAIN plan without panic.
tags: [Postgres, Database, Backend]
---

For years I treated indexes as a "add one and hope" feature. Add an index on the column, ship, and move on. That works until it does not, and the day it stops working is the day a table crosses a few million rows. Indexes are simpler than they look once you stop thinking of them as magic.

## An index is a sorted lookup structure

Without an index, Postgres reads every row to answer a question. With a B-tree index, it walks a shallow tree instead. The trade-off is that every write has to update that tree, so indexing everything slows down inserts and updates.

A useful mental model: an index is a sorted copy of one or more columns, plus pointers back to the full row.

## The planner is not obliged to use it

This trips people up. You add an index, run the query, and nothing changes. Often the table is small enough that a sequential scan is faster than bouncing through the tree. The planner estimates that and skips your index on purpose.

The other common cause is a mismatch between your `WHERE` clause and the index columns. A composite index on `(a, b)` helps a filter on `a`, or on `a` and `b`, but not on `b` alone.

```sql
CREATE INDEX idx_orders_customer_created
  ON orders (customer_id, created_at DESC);

EXPLAIN ANALYZE
SELECT * FROM orders
WHERE customer_id = 42
ORDER BY created_at DESC
LIMIT 10;
```

## Read the plan in layers

`EXPLAIN ANALYZE` prints a tree. Start at the top and ask what the overall shape is, then look for the expensive nodes. A `Seq Scan` on a large table inside a hot query is the usual culprit. A `Bitmap Heap Scan` is often fine. The `actual time` row tells you the real cost, not the estimate.

## Practical advice

Index foreign keys and the columns you filter or sort by most. Skip low-cardinality columns like booleans unless the table is huge and the filter is very selective. And after adding an index, re-run the plan before declaring victory. An index that is never used is just a slower write path.
