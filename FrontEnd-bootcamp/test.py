from time import sleep

model = ["⚬", "⚭", "⚮", "⚯", "⚮", "⚭", "⚬"]

while True :
    for i in model:
        print(f" Loading {i}", end="\r")
        sleep(0.2)