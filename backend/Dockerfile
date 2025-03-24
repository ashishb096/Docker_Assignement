FROM python:3.9
WORKDIR /app
COPY requirements.txt ./
Run pip install -r requirements.txt
COPY . .
EXPOSE 5000
CMD["python", "app/main.py"]