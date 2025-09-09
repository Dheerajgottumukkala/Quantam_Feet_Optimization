Seeding from Python output

1. Place your Python code at scripts/python/route_pipeline.py

   - It should print the minimal JSON to stdout as shown in your script.

2. Generate JSON:
   npm run gen:python

3. Seed DB from JSON:
   npm run seed:from-python

4. Combine steps:
   npm run generate-and-seed
