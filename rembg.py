from rembg import remove
from PIL import Image


input_path =  r':\PathToImage'
output_path = r':\OutputPathToImage'

input = Image.open(input_path)
output = remove(input)
output.save(output_path)
