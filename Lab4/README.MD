# Lab 4

## YAML Files erstellen

Zuerst müssen `mysql-deployment.yaml` und `wordpress-deployment.yaml` erstellt werden.

## Login
Um sich bei einzuloggen `az login`.

## Resource Group erstellen

Um eine Gruppe zu erstellen muss folgender Command getätigt werden `az group create -n ramajgroup --location eastus​`.

## Kubernetes-Dienst erstellen
Durch folgenden Befehl wird ein Kubernetes-Dienst erstellt `az aks create -g ramajgroup -n myaks --node-count 1`.

## Installieren von K8s CLI

Durch den Befehl wird es installiert `az aks install-cli`.


az aks get-credentials --resource-group myresourcegroup --name myaks

## Passwort setzen und YAML Files hochladen

### Verbindung erstellen
Man wählt den Kubernetes-Dienst aus, danach muss man auf `Cloud Shell` klicken. Dann klickt man auf `Verbinden`. Dadruch werden einem 2 Befehle angezeigt, mit denen man sich verbinden kann.
`az account set --subscription ID`
`az aks get-credentials --resource-group ramajgroup --name myaks`
die Befehle gibt man in der Cloud Shell ein.


### Passwort setzen für MySQL DB
Durch den Befehl `kubectl create secret generic mysql-pass –from-literal=password=YOURPASSWORDHERE` wird ein Passwort gesetzt für die Datenbank.

### Hochladen der YAML Files

Dann müssen bei der Bash unter Upload, die YAML Files ausgewählt werden und hochgeladen werden.
Mittels `ls` kann kontrolliert werden ob diese Files vorhanden sind.

### Erstellen von MySQL und Wordpress Service

Dann müssen folgende Commands eingebenen werden:
`kubectl apply -f /home/ramaj/mysql-deployment.yaml`
`kubectl apply -f /home/ramaj/wordpress-deployment.yaml` 

Mit `kubectl get pvc` kann kontrolliert werden ob diese vorhanden sind.

### Wordpress im Browser besuchen

Mittels `kubectl get services` sieht man alles vorhandenen Services und mittels `kubectl get services wordpress` sieht man die Wordpress Services.
Wenn die Wordpress Services sieht, dann ist der Wordpress Service unter der external IP erreichbar.
IP: http://40.114.177.43