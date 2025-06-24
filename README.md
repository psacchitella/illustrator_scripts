# illustrator_scripts
Scripts for automated illustrator tasks

Since I need scripts to perform Illustrator tasks like globally creating ArtBoards or duplicating art across many ArtBoards. I decided to publish this because I am sick and tired of doing silly code tests.


### Files

**iconGenerator.jsx**

Exports the iOS icon .png files and puts them in a folder. Takes the 1024x1024 artboard and creates all of the various sizes needed.

**PlaceAndScaleToArtboards.jsx**

Places selected artwork on all the artboards in a document and scales them so they match the top and bottom of the artboard.

**Export_iOS_SplashScreens.jsx**

Exports the splash screens required for iOS apps. 

**CreateSplashArtboards.jsx**

Generates all of the artboards needed to create splash screens for iOS apps. You then use the **PlaceAndScaleToArtboards.jsx** file to copy an artwork group to each artboard.

**xcodeAssets.py** Takes all of the exported .png files and copies them to a **Assets.xcassets** directory(for the Icons) and the **LaunchImage.launchimage** for the splash screens and creates the **Contents.json** file for each set. Then you can import it into an xCode project.