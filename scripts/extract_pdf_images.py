import os
import sys

# Try pypdf or PyPDF2
try:
    import pypdf
    reader = pypdf.PdfReader('maya_profile.pdf')
    count = 0
    for page_idx, page in enumerate(reader.pages):
        for img_idx, img in enumerate(page.images):
            out_name = f'public/images/extracted_pdf_{page_idx}_{img_idx}_{img.name}'
            with open(out_name, 'wb') as f:
                f.write(img.data)
            print(f'Saved {out_name}')
            count += 1
    print(f'Total images extracted: {count}')
    sys.exit(0)
except ImportError:
    pass

try:
    import fitz # PyMuPDF
    doc = fitz.open('maya_profile.pdf')
    count = 0
    for page_idx, page in enumerate(doc):
        image_list = page.get_images(full=True)
        for img_idx, img in enumerate(image_list):
            xref = img[0]
            base_image = doc.extract_image(xref)
            image_bytes = base_image["image"]
            image_ext = base_image["ext"]
            out_name = f'public/images/extracted_pdf_{page_idx}_{img_idx}.{image_ext}'
            with open(out_name, 'wb') as f:
                f.write(image_bytes)
            print(f'Saved {out_name}')
            count += 1
    print(f'Total PyMuPDF images extracted: {count}')
    sys.exit(0)
except ImportError:
    pass

print('Neither pypdf nor fitz is installed.')
