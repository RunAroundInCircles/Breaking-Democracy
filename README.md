Breaking Democracy
=
A web game

Instructions
=

Please install node JS at https://nodejs.org/en/download/
Then run the powershell script called INSTALL.ps1


To start the server run the command `npm start` in the application directory.
The server will then start on localhost:3000

Please check the [Wiki tab](https://github.com/catiel/Breaking-Democracy/wiki) above for additional information.

Current Implementation
=
Once the page loads an introduction video plays to give a quick overview of the game. Once the video is over the application renders the mainpage so that the game can begin.
![Intro](/UsercaseImages/introVideo.png)

In mainpage you can switch between different modules by clicking on the red buttons at the top of the screen:
* **An email module**: The email module allows users to see emails in the left side panel and then when an email is clicked the full email will be displayed in the main panel.
![Inbox](/UsercaseImages/StartingInbox.PNG)
![EmailSelected](/UsercaseImages/SelectedEmail.PNG)

* **A map module**: The map modules allows users to click different territories in the map and then a zoomed in map of the territory will be shown.

![Map](/UsercaseImages/initialMap.PNG)
![SelectedDistrict](/UsercaseImages/selected.png)
![District1](/UsercaseImages/districtOne.PNG)

* **A calendar module**: The calendar module allows users to see different events that the user can participate in for the game. Once correctly implemented the user can click the event and a mini game will start. One example minigame is hacking.
![Calendar](/UsercaseImages/calendar.PNG)
![CalendarEvent](/UsercaseImages/calendarEvent.PNG)
* **An asteroids clone**: The only minigame implemented currently is an asteroids clone, move with arrow keys and shoot with space bar. Destroy as many asteroids as you can before you die.
![HackingGame](/UsercaseImages/HackingGame.png)

* **Echo module**: The Echo module allows users to see social media posts about events in the game.
![Echo](/UsercaseImages/initialEchos.PNG)

* **A timeline module**: The timeline module allows users to see previous events the user has accompolished in this game session.
![Timeline](/UsercaseImages/InitialTimeline.PNG)


Editor Application
==
For ease of changing in and out data we have created an editor application to allow developers to change JSON files in the game.
![Editor Application](https://github.com/catiel/Breaking-Democracy/blob/master/Screenshots/EditorApplication.png)


Testing
=
* **Snapshots**: For each component above, including the Main Page component, we have created snapshot tests which will check to see if the components stay consistent with any updates.
* **Unit Testing**: For the editor application we have created Unit tests to check if the files needed for the application to run exist.
* **UI Testing**: For the editor application we have created a [UI Testing Manual](https://github.com/catiel/Breaking-Democracy/blob/master/Editor%20Application%20UI%20Tests.docx)

Thank You to the following people
=
* moodydev for inspiration on creating the react calendar: https://github.com/moodydev
* chriz001 for creating the shooter minigame: https://github.com/chriz001/Reacteroids
* Sterling Oliver for creating all music and video in the project.

Developed By
=
* Aidan Javier
* Caleb Logan
* Gavin Neises
* Nickalas Porsch

