from fastapi import Depends, FastAPI
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles
import os
import uvicorn

app = FastAPI()

app.mount("/app", StaticFiles(directory="app"), name="app")
app.mount("/images", StaticFiles(directory="images"), name="images")

@app.get("/")
def read_root():
    return FileResponse("app/main.html")

@app.get("/filenames")
async def get_files():
    files = os.listdir('./images')
    files.remove('.DS_Store')
    return files

if __name__ == "__main__":
    uvicorn.run(app, host="localhost", port=8000)