import re

with open(r"c:\Users\akshit\Desktop\om\css\style.css", "r", encoding="utf-8") as f:
    content = f.read()

variables = re.findall(r"--[a-zA-Z0-9_-]+:\s*[^;]+;", content)
print("Found variables:")
for var in sorted(list(set(variables)))[:30]:
    print(var)
