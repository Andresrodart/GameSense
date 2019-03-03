import pandas
from pandas.plotting import scatter_matrix
import matplotlib.pyplot as plt
from sklearn import model_selection
from sklearn.metrics import classification_report
from sklearn.metrics import confusion_matrix
from sklearn.metrics import accuracy_score
from sklearn.linear_model import LogisticRegression
from sklearn.tree import DecisionTreeClassifier
from sklearn.neighbors import KNeighborsClassifier
from sklearn.discriminant_analysis import LinearDiscriminantAnalysis
from sklearn.naive_bayes import GaussianNB
from sklearn.svm import SVC
import json
import numpy as np
import csv


with open('./result.json') as json_file:  
    data = json.load(json_file)
with open("result.csv", "w+") as fp:
    f = csv.writer(fp)
    # Write CSV Header, If you dont need that, remove this line
    f.writerow(["Sample", "Channel 1", "Channel 2", "Channel 3"])
    for x in data['data']:
        meetup = data['data'][x]
        meetup.insert(0,int(x))
        f.writerow(np.asarray(meetup))

dataset = pandas.read_csv('./result.csv')
print(dataset.describe())
dataset.hist()
plt.show()