az deployment group create --name webappramaj --resource-group ramajgroup --template-file azuredeploy.json --parameters "azuredeploy.paramters.json"

az deployment group create --name storageramaj --resource-group ramajgroup --template-file azuredeploy.json --parameters "azuredeploy.paramters.json"

az group create --name ramajgroup --location "West Europe"