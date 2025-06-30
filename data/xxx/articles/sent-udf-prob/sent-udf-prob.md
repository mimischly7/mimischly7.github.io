- [ ] https://stackoverflow.com/questions/73716068/pyspark-sentence-transformers-udf-cannot-pickle-thread-rlock-object
- [ ] https://stackoverflow.com/questions/58792423/error-pythonudfrunner-python-worker-exited-unexpectedly-crashed
- [ ] https://community.databricks.com/t5/data-engineering/i-created-a-data-frame-but-was-not-able-to-see-the-data/td-p/14720
- [ ]


```python
import os
import pickle
import traceback
from typing import List
import numpy as np

from pprint import pprint
from qdrant_client import models, QdrantClient
from pyspark.sql import Row, column
from pyspark.sql.types import ArrayType, FloatType, StringType, DoubleType
from pyspark.sql.functions import col, concat, udf, pandas_udf

import pandas as pd

from embed import create_session
from config import *

# import os

# os.environ['PYSPARK_PYTHON'] = "./environment/bin/python"

documents = [
    {
        "name": "The Time Machine",
        "description": "A man travels through time and witnesses the evolution of humanity.",
        "author": "H.G. Wells",
        "year": 1895,
    },
    {
        "name": "Ender's Game",
        "description": "A young boy is trained to become a military leader in a war against an alien race.",
        "author": "Orson Scott Card",
        "year": 1985,
    },
    {
        "name": "Brave New World",
        "description": "A dystopian society where people are genetically engineered and conditioned to conform to a strict social hierarchy.",
        "author": "Aldous Huxley",
        "year": 1932,
    },
    {
        "name": "The Hitchhiker's Guide to the Galaxy",
        "description": "A comedic science fiction series following the misadventures of an unwitting human and his alien friend.",
        "author": "Douglas Adams",
        "year": 1979,
    },
    {
        "name": "Dune",
        "description": "A desert planet is the site of political intrigue and power struggles.",
        "author": "Frank Herbert",
        "year": 1965,
    },
    {
        "name": "Foundation",
        "description": "A mathematician develops a science to predict the future of humanity and works to save civilization from collapse.",
        "author": "Isaac Asimov",
        "year": 1951,
    },
    {
        "name": "Snow Crash",
        "description": "A futuristic world where the internet has evolved into a virtual reality metaverse.",
        "author": "Neal Stephenson",
        "year": 1992,
    },
    {
        "name": "Neuromancer",
        "description": "A hacker is hired to pull off a near-impossible hack and gets pulled into a web of intrigue.",
        "author": "William Gibson",
        "year": 1984,
    },
    {
        "name": "The War of the Worlds",
        "description": "A Martian invasion of Earth throws humanity into chaos.",
        "author": "H.G. Wells",
        "year": 1898,
    },
    {
        "name": "The Hunger Games",
        "description": "A dystopian society where teenagers are forced to fight to the death in a televised spectacle.",
        "author": "Suzanne Collins",
        "year": 2008,
    },
    {
        "name": "The Andromeda Strain",
        "description": "A deadly virus from outer space threatens to wipe out humanity.",
        "author": "Michael Crichton",
        "year": 1969,
    },
    {
        "name": "The Left Hand of Darkness",
        "description": "A human ambassador is sent to a planet where the inhabitants are genderless and can change gender at will.",
        "author": "Ursula K. Le Guin",
        "year": 1969,
    },
    {
        "name": "The Three-Body Problem",
        "description": "Humans encounter an alien civilization that lives in a dying system.",
        "author": "Liu Cixin",
        "year": 2008,
    },
]

# qdrant = QdrantClient(":memory:")
qdrant = QdrantClient(QDRANT_URL)

# All data in Qdrant is organized by collections - initialize collection if not already present
if not qdrant.collection_exists("books"):
    qdrant.delete_collection("books")
    books = qdrant.create_collection(
        collection_name="books",
        vectors_config=models.VectorParams(
            size=encoder.get_sentence_embedding_dimension(),
            distance=models.Distance.COSINE
        )
    )

spark = create_session()
# import os
from sentence_transformers import SentenceTransformer

model = SentenceTransformer("all-MiniLM-L6-v2")
model_serialized = pickle.dumps(model)
# model_broadcast = spark.sparkContext.broadcast(model)
# encode_broadcast = spark.sparkContext.broadcast(model.encode)
# encode_broadcast.value("sadads")
# print(model_broadcast.value.encode("asdasdas").tolist())
encode_broadcast = spark.sparkContext.broadcast(model_serialized)

spark.sparkContext.setLogLevel("DEBUG")

# spark.sparkContext.addPyFile("./zipped.zip")
df = spark.createDataFrame([
    Row(**doc) for doc in documents
])

print(df.show())

# Computer the vectors corresponding to each record


# def concat_cols(col_names: List[str]) -> column.Column:
# cols = [col(cname) for cname in col_names]
# new_col = concat(*cols)
# for i in new_col:
#     print(i)
# return new_col


# my_udf = udf(lambda x: embed_text(concat_cols(x)), ArrayType(FloatType()))

print(type(df.name))


# df.withColumn("text", concat_cols([df.name, df.description]))
def custom_concat(*vals):
    vals = [str(val) for val in vals]
    print(f"cols: {len(vals), type(vals), vals}")
    res = str('_'.join(vals))
    print(res)
    return res


my_udf = udf(custom_concat, StringType())
# df = df.withColumn("text", concat(*df.columns))  # non-mutating, creates new
df = df.withColumn("text", my_udf(*df.columns))  # non-mutating, creates new

print(df.show())

#
# def embed_text(val):
#     print(f"val: {val}")
#     return encoder.encode(val).tolist()
#
#
# f_udf = udf(embed_text, ArrayType(FloatType()))
#
# print(type(df.text))
# df = df.withColumn("vector", f_udf(df['text']))
#
# model = SentenceTransformer("all-MiniLM-L6-v2")
# bc_model = spark.sparkContext.broadcast(model)

def f(text):
    # print(f"SentenceTransformer: {SentenceTransformer('all-MiniLM-L6-v2')}")
    try:
        print(f"kkkkkkk: {os.environ['PYTHONPATH']}")
        x = encode_broadcast.value
        print(".........heythere.......")
        # print(x)
        # print(pickle.loads(x))
        print(model)
    except BaseException as e:
        print(f"XXX: {e}")
    # print(f"SentenceTransformer: {encode_broadcast.value('aaaa')}")

    # encoder = SentenceTransformer("all-MiniLM-L6-v2")
    # model_broadcast.value.encode("asdsa")
    # print(f"model_broadcast.value: {model_broadcast.value}")
    # print(f"model_broadcast.value.encode: {model_broadcast.value.encode}")
    # print(f"xxxx: {model}")
    # encode_broadcast.value("sadads")
    # model.encode("saddasas")
    # bc_model.value.encode("asdas")
    # pprint('asdnjasdhasidjaisdgaisdj')
    # Replace this with your actual transformation logic
    # print(f"text: {text, type(text)}")
    # np.linspace(0, 2, 9)
    return [float(ord(char)) for char in text]


# Define a UDF to encode sentences using the model
# def f(sentence):
#     if not hasattr(f, "model"):
#         f.model = SentenceTransformer("all-MiniLM-L6-v2")
#     return f.model.encode(sentence).tolist()


# create a pandas udf that will encode the text and return an array of doubles
# @pandas_udf(returnType=ArrayType(DoubleType()))
# def encode(x: pd.Series) -> pd.Series:
#     # x = pd.Series(model.encode("asd").tolist())
#     try:
#         x = encode_broadcast.value
#     except Exception as e:
#         print(f"XXX: {e}")
#     return [12.3, 43.2]


# Register the UDF
f_udf = udf(f, ArrayType(FloatType()))
# f_udf = udf(lambda x: model_broadcast.value.encode("asdasdas").tolist(), ArrayType(ArrayType(FloatType())))

# f_udf = udf(encode, ArrayType(FloatType()))
# Apply the UDF to the DataFrame
df = df.withColumn("transformed", f_udf(df["text"]))
print("OOOOOOOOOO")
print(df.text)
print(df.columns)
print(df.text)
print(df.transformed)
try:
    print(df.show())
except BaseException as e:
    print(f"ssssssss: {e}")
    traceback.print_exc()
    print("aaaa")
print(type(df))
# for row in df:
#     print(row)
# df.write \
#    .format("io.qdrant.spark.Qdrant") \
#    .option("qdrant_url",QDRANT_URL) \
#    .option("collection_name", "books") \
#    .option("schema", df.schema.json()) \
#    .mode("append") \
#    .save()


# .option("embedding_field", <EMBEDDING_FIELD_NAME>) \ # Expected to be a field of type ArrayType(FloatType)
("/Users/mimischly/Desktop/bluebird/jun03/IceQdrantDemo/venv/lib/python3.11/site-packages/pyspark/python/lib/pyspark.zip:"
 "/Users/mimischly/Desktop/bluebird/jun03/IceQdrantDemo/venv/lib/python3.11/site-packages/pyspark/python/lib/py4j-0.10.9.7-src.zip:"
 "/Users/mimischly/Desktop/bluebird/jun03/IceQdrantDemo/venv/lib/python3.11/site-packages/pyspark/jars/spark-core_2.12-3.5.1.jar:"
 "/Users/mimischly/Desktop/bluebird/jun03/IceQdrantDemo:"
 "/Users/mimischly/Applications/PyCharm Professional Edition.app/Contents/plugins/python/helpers/pycharm_matplotlib_backend:"
 "/Users/mimischly/Applications/PyCharm Professional Edition.app/Contents/plugins/python/helpers/pycharm_display)")

```
