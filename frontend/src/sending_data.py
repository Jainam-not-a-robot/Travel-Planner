import pandas as pd
from sqlalchemy import create_engine, text

df = pd.read_csv('/home/jainam/Documents/placesData.csv')
engine = create_engine('postgresql://postgres:jainam123@localhost:5432/postgres')

# Step 1: Add column if it doesn't exist
with engine.connect() as conn:
    conn.execute(text("""
        ALTER TABLE "placesData" ADD COLUMN IF NOT EXISTS image_path TEXT;
    """))

# Step 2: Update image_path column for each row
with engine.connect() as conn:
    for _, row in df.iterrows():
        conn.execute(text("""
            UPDATE "placesData"
            SET image_path = :image_path
            WHERE name = :name
        """), {"image_path": row["image_path"], "name": row["name"]})

print("✅ image_path column added and updated successfully.")
