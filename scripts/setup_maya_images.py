import shutil
import os

shutil.copyfile('public/images/extracted_pdf_0_0_X8.png', 'public/images/maya_portrait.png')
shutil.copyfile('public/images/extracted_pdf_0_1_X10.jpg', 'public/images/office_1.jpg')
shutil.copyfile('public/images/extracted_pdf_0_2_X11.jpg', 'public/images/office_2.jpg')

print("Copied images:")
for f in ['maya_portrait.png', 'office_1.jpg', 'office_2.jpg']:
    p = os.path.join('public', 'images', f)
    print(f, os.path.exists(p), os.path.getsize(p))
