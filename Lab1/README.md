




# ARM Template (Florian Ramaj)

Die Aufgabe war ein ARM Template zu erstellen welches folgende Elemente erstellt: 

* Azure Storage Account
* Azure Web-App (node.js)
  
Für diese Erstellungen sollen **Parameters** verwendet werden.

## Login

```
az login
```
Durch den Befehl meldet man sich bei der Azure CLI an.


## Resourcen-Gruppe erstellen

```
az group create --name ramajgroup --location "West Europe"
```
Mittels diesen Befehl wird eine neue Resourcen Gruppe erstellt. Durch den Parameter `--locatian "West Europe` wurde festgelegt, dass sich die Resourcen Gruppe in West Europa befinden soll.

## Storage Account erstellen

```

az deployment group create --name storageramaj --resource-group ramajgroup --template-file azuredeploy.json --parameters azuredeploy.paramters.json
```

Der Befehl erstell einen Storage Account in der Resource Gruppe "ramajgroup". Des Weiteren werden im `azuredeploy.json` gewisse Einstellungen für diesen Storage Account festgelegt. Zusätzlich wird im `azuredeploy.paramters.json` durch den Parameter `storageAccountName` der Name des Storge Account festgelegt.

## Web-App erstellen
```
az deployment group create --name webappramaj --resource-group ramajgroup --template-file azuredeploy.json --parameters "azuredeploy.paramters.json"
```
Dieser Befehl erstellt die Web-App. Diese Web-App wird durch die `azuredeploy.json` und die `azuredeploy.paramters.json` eingestellt.
 Nach dem erstellen ist die Web-App erreichbar unter folgendem Link: https://webappramaj.azurewebsites.net/
