import sys
import os
sys.path.append(r'C:\Users\akshit\.gemini\antigravity-ide\brain\df7914bb-ad54-4dd5-a23a-55df7a6ad8af\scratch')
from read_docx import docx_to_text

dataset_dir = r'c:\Users\akshit\Desktop\om\scratch\dataset\[PUB] India_runs_data_and_ai_challenge\India_runs_data_and_ai_challenge'
scratch_dir = r'c:\Users\akshit\Desktop\om\scratch'

files_to_convert = [
    'job_description.docx',
    'submission_spec.docx',
    'redrob_signals_doc.docx'
]

for filename in files_to_convert:
    src = os.path.join(dataset_dir, filename)
    dest = os.path.join(scratch_dir, filename.replace('.docx', '.txt'))
    print(f"Converting {src} to {dest}...")
    txt = docx_to_text(src)
    with open(dest, 'w', encoding='utf-8') as f:
        f.write(txt)
print("Done!")
