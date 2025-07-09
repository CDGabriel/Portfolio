from rembg import remove
from PIL import Image


input_path =  r'C:\Users\gabri\OneDrive\Desktop\Python\popsandsoftime.png'
output_path = r'C:\Users\gabri\OneDrive\Desktop\Python\popsandsoftimeoutput.png'

input = Image.open(input_path)
output = remove(input)
output.save(output_path)