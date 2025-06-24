if (app.documents.length > 0) {
    var doc = app.activeDocument;
    var destFolder = Folder.selectDialog("Choose a folder to export splash screen PNGs");

    if (destFolder != null) {
        var splashSizes = [
            { name: "LaunchImage-640x1136", width: 640, height: 1136 },
            { name: "LaunchImage-750x1334", width: 750, height: 1334 },
            { name: "LaunchImage-828x1792", width: 828, height: 1792 },
            { name: "LaunchImage-1125x2436", width: 1125, height: 2436 },
            { name: "LaunchImage-1170x2532", width: 1170, height: 2532 },
            { name: "LaunchImage-1242x2208", width: 1242, height: 2208 },
            { name: "LaunchImage-1242x2688", width: 1242, height: 2688 },
            { name: "LaunchImage-1284x2778", width: 1284, height: 2778 },
            { name: "LaunchImage-1290x2796", width: 1290, height: 2796 },
            { name: "LaunchImage-1536x2048", width: 1536, height: 2048 },
            { name: "LaunchImage-1668x2224", width: 1668, height: 2224 },
            { name: "LaunchImage-1668x2388", width: 1668, height: 2388 },
            { name: "LaunchImage-2048x2732", width: 2048, height: 2732 }
        ];

        // Conversion: 1 pixel = 0.75 points
        var PX_TO_PT = 0.75;

        var originalArtboard = doc.artboards[doc.artboards.getActiveArtboardIndex()];
        var originalRect = originalArtboard.artboardRect;

        for (var i = 0; i < splashSizes.length; i++) {
            var splash = splashSizes[i];
            var width = splash.width * PX_TO_PT;
            var height = splash.height * PX_TO_PT;

            var centerX = (originalRect[0] + originalRect[2]) / 2;
            var centerY = (originalRect[1] + originalRect[3]) / 2;

            var left = centerX - (width / 2);
            var top = centerY + (height / 2);
            var right = centerX + (width / 2);
            var bottom = centerY - (height / 2);

            doc.artboards[0].artboardRect = [left, top, right, bottom];

            var options = new ExportOptionsPNG24();
            options.antiAliasing = true;
            options.transparency = true;
            options.artBoardClipping = true;
            options.horizontalScale = 100;
            options.verticalScale = 100;

            var file = new File(destFolder.fsName + "/" + splash.name + ".png");
            doc.exportFile(file, ExportType.PNG24, options);
        }

        // Restore original artboard
        doc.artboards[0].artboardRect = originalRect;

        alert("All splash screens exported successfully.");
    } else {
        alert("Export canceled.");
    }
} else {
    alert("No open document.");
}
