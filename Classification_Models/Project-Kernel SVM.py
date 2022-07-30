# Kernel SVM Classification

import numpy as np
import matplotlib.pyplot as plt
import pandas as pd

dataset = pd.read_csv("Project-CropDataset.csv")
X = dataset.iloc[:, 0:-1 ].values
y = dataset.iloc[:, -1 ].values

from sklearn.preprocessing import StandardScaler
sc = StandardScaler()
X = sc.fit_transform(X)

from sklearn.model_selection import train_test_split
X_train,X_test,y_train,y_test=train_test_split(X,y,test_size=0.25,random_state=0)


from sklearn.svm import SVC
classifier = SVC(kernel = 'rbf', random_state = 0)
classifier.fit(X_train, y_train)

y_pred = classifier.predict(X_test)

#var = [[1,0,42,0.370025]]
#y_pred1 = classifier.predict(var)
#print(y_pred1)


from sklearn.metrics import plot_confusion_matrix
plot_confusion_matrix(classifier, X_test, y_test)  
plt.show()

from sklearn.metrics import confusion_matrix
cm = confusion_matrix(y_test, y_pred)
print(cm)

from sklearn.metrics import accuracy_score
Acc_score = accuracy_score(y_test, y_pred)
print(Acc_score)

from sklearn.metrics import recall_score
Rscore = recall_score(y_test, y_pred, average='macro')
print(Rscore)

from sklearn.metrics import precision_score
Pscore = precision_score(y_test, y_pred, average='macro')
print(Pscore)

from sklearn.metrics import f1_score
Fscore = f1_score(y_test, y_pred, average='macro')
print(Fscore)