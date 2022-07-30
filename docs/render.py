import os
import glob

srcDir="."
templateFileName="_template.html"
templateText=""


with open(os.path.abspath(os.path.join(srcDir, templateFileName)), 'r') as templateFile:
	templateText = templateFile.read().replace('\n', '')


for fileName in glob.glob("*.html"):
	if (fileName == templateFileName):
		continue
	fullFilePath=os.path.abspath(os.path.join(srcDir, fileName))
	fileContent=""
	with open(fullFilePath, 'r') as file:
		fileContent = file.read().replace('\n', '')
	print(templateText.replace("<placeholder></placeholder>", fileContent))