# Teil1
Das Erstellen der `docker-compose.yml` Datei. Danach muss man den Befehl `docker-compose up -d` ausführen, im Pfad der Datei. Danach ist die Website unter `localhost:8000` aufrufbar.

# Teil2

## MySQL

### Dockerfile
Der Command `ENV` erstell Environment Variablen, die man dann setzen kann und dann verwenden kann.
Der Command `RUN DEBIAN_FRONTEND=noninteractive apt-get install -y mysql-server` installiert den mysql-server. Mittels `DEBIAN_FRONTEND=noninteractive` wird der Command ohne User Interkation durchgeführt. Durch die `Copy` Befehle kopieren wir Dateien oder Verzeichnisse zum Datensystem des Kontainers.
Mittels `Expose` kann man den Container sagen, dass er auf einen gewissen Port hören soll.

### docker-entrypoint.sh
Durch das Script werden die Datenbanken Einstellungen geändert, dafür werden die Variablen DB_NAME, DB_USER und DB_PASSWORD gewählt.

### init.sql

Dadruch erstellen eine Datenbank damit Wordpress die kontrollieren kann.

## Wordpress

### Dockerfile

Der Command `RUN apt-get install wordpress -y` installiert Wordpress, Apache und PHP. Mittels `-y` wird dem Command gesagt, dass jener Command bei einenr Abfrage mit Ja beantworten soll.

### docker-entrypoint.sh

Durch das Script werden die Eintellungen vom `config-localhist.php` geändert, dafür werden die Variablen DB_NAME, DB_USER, DB_PASSWORD und DB_HOST gewählt.

## docker-compose.yml

### Datenbank Konfiguration
Unter `Image` wird das Image gewählt welches durch den Befehl `docker build -t ramajflo/mysql .` gebildet wird. Unter dem Punkt `ports` wird jene Zahl gewählt welche im Datenbank Dockerfile unter `Expose` gewählt worden ist.

### Wordpress Konfiguration
Um das Wordpress Image zu erstellen wird folgender Befehl `docker build -t ramajflo/wp .` getätigt. Wie bei der Datenbank Konfiguration werden jene Ports gewählt die beim jeweiligen Dockerfile unter `Expose` gewählt worden ist.

### Wordpress starten

Um Wordpress zu starten müssen beide Images erstellt werden. Wenn jene Images erstell werden muss im Pfad des `docker-compose.yml` Files folgender Command ausgeführt werden: `docker-compose up -d`, mittels `-d` werden die Kompositionen der zwei Container im Hintergrund läuft.
Nachdem Befehl muss die Website unter `localhost:80` aufrufbar sein.



