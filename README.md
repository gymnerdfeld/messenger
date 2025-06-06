# Messenger / Chat

Das Back-End (`messenger_api.py`) ist (praktisch) fertig. Das Front-End (`messenger_client.html`) existiert erst lückenhaft.

In dieser Aufgabe vervollständigst du eine Chat-App.  Für alle ausser der letzen Aufgabe
musst du nur das Front-End bearbeiten.

* Verbinde das Feld zur Eingabe des Benutzernamens und den Button zum Betreten in den Chat
mit den entsprechenden Werten im JS-Code (`FIXME 1`).

* Blende die Eingabeaufforderung für den Benutzername aus, sobald die Benutzerin dem Chat
beigetreten ist. Umgekehrt, zeige den Inhalt des Chats und die Eingabeaufforderung für eine 
neue Nachricht erst an, wenn die Benutzerin dem Chat beigetreten ist (`FIXME 2`). 
Verwende dazu die Variable `state.page`.

* Lade die Liste der Nachrichten vom Back-End (`FIXME 3`).
Betrachte dazu auch die Datei `messenger_api.py`.

* Zeige die Liste der eingegangenen Nachrichten mit Absender und Inhalt der Nachricht an. 
Betrachte dazu auch das Beispiel beim `FIXME 4`.

* Bearbeite die Funktion `send_message`, so dass eine Nachricht über das
Back-End versendet werden kann (`FIXME 5`).  
Betrachte dazu auch die Datei `messenger_api.py`.
Verhindere, dass leere Nachrichten versendet werden
können, und vergiss nicht am Schluss die Eingabeaufforderung für die Nachricht
zurück zu setzen. _Bonus:_ Versenden der Nachricht mit der Enter-Taste.

* Baue einen Knopf ein, mit dem der User den Chat wieder verlassen kann (`FIXME 6.1` und `FIXME 6.2`)

* Teste die Chat-App gleichzeitig in mehreren Browserfenstern nebeneinander.  
Aktiviere die Codezeile nach dem `FIXME 7`.  Was bewirkt der Code `setInterval(get_messages, 3000)`?

* Schreibe die Chat-App so um, dass wenn eine neue Person zum Chat dazu stösst die Meldung 
_"User ... joined the chat."_ und wenn eine Person den Chat verlässt
die Meldung _"User ... left the chat."_ in der Liste der Chatnachrichten
angezeigt wird.  Bearbeite dazu das Front-End _und_ Back-End.
