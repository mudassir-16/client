from PIL import Image
import os

images = [
    'extracted_pdf_0_0_X8.png',
    'extracted_pdf_0_1_X10.jpg',
    'extracted_pdf_0_2_X11.jpg'
]

for name in images:
    path = os.path.join('public', 'images', name)
    im = Image.open(path)
    print(name, im.size, im.format)
