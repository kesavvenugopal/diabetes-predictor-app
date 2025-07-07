from waitress import serve
from app import app
import multiprocessing

if __name__ == "__main__":
    cpu_count=multiprocessing.cpu_count()
    
    threads_per_worker= max(1, cpu_count-1)
    
    print("Thread count:", threads_per_worker)
    print("Server up!")
    
    serve(
        app=app,
        host='0.0.0.0',
        port=8080,
        threads=threads_per_worker
    )
    