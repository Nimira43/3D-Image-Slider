import cv2
import numpy as np

image = cv2.imread('test_image.jpg')
lane_image = np.copy(image)
gray = cv2.cvtColor(lane_image, cv2.COLOR_RGB2GRAY) # converts photo to grayscale
blur = cv2.GaussianBlur(gray, (5, 5), 0)   # reduces noise of grayscale photo
canny = cv2.Canny(blur, 50, 150) # works out the strongest image gradients 
# cv2.imshow('result', image)
# cv2.imshow('result', gray)
# cv2.imshow('result', blur)
cv2.imshow('result', canny)
cv2.waitKey(0)
