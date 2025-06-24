// iOS App Icon Generator for Illustrator
// Make sure your artwork is on a 1024x1024 artboard

var iconSizes = [
  { name: "Icon-App-20x20@1x", size: 20 },
  { name: "Icon-App-20x20@2x", size: 40 },
  { name: "Icon-App-20x20@3x", size: 60 },
  { name: "Icon-App-29x29@1x", size: 29 },
  { name: "Icon-App-29x29@2x", size: 58 },
  { name: "Icon-App-29x29@3x", size: 87 },
  { name: "Icon-App-40x40@1x", size: 40 },
  { name: "Icon-App-40x40@2x", size: 80 },
  { name: "Icon-App-40x40@3x", size: 120 },
  { name: "Icon-App-60x60@2x", size: 120 },
  { name: "Icon-App-60x60@3x", size: 180 },
  { name: "Icon-App-76x76@1x", size: 76 },
  { name: "Icon-App-76x76@2x", size: 152 },
  { name: "Icon-App-83.5x83.5@2x", size: 167 },
  { name: "Icon-App-1024x1024@1x", size: 1024 }
];

if (app.documents.length === 0) {
  alert("No document open.");
} else {
  var doc = app.activeDocument;
  var baseFolder = Folder.selectDialog("Select a folder to save AppIcon.appiconset");
  if (baseFolder === null) {
    alert("Cancelled.");
  } else {
    var exportFolder = new Folder(baseFolder.fsName + "/AppIcon.appiconset");
    if (!exportFolder.exists) exportFolder.create();

    for (var i = 0; i < iconSizes.length; i++) {
      var icon = iconSizes[i];
      var options = new ExportOptionsPNG24();
      options.artBoardClipping = true;
      options.transparency = true;
      options.antiAliasing = true;
      options.horizontalScale = icon.size / 1024 * 100;
      options.verticalScale = icon.size / 1024 * 100;

      var file = new File(exportFolder.fsName + "/" + icon.name + ".png");
      doc.exportFile(file, ExportType.PNG24, options);
    }

    alert("Export complete to: " + exportFolder.fsName);
  }
}
