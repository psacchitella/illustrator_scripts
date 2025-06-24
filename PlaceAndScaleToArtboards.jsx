// PlaceAndScaleToArtboards.jsx
// Duplicates and scales selected group to match Y dimension of each artboard

if (app.documents.length === 0) {
    alert("Open a document with at least one artboard and a grouped object selected.");
} else {
    var doc = app.activeDocument;

    if (doc.selection.length === 0 || !(doc.selection[0] instanceof GroupItem)) {
        alert("Please select a grouped object before running the script.");
    } else {
        var originalGroup = doc.selection[0];

        for (var i = 0; i < doc.artboards.length; i++) {
            var ab = doc.artboards[i];
            var abRect = ab.artboardRect; // [left, top, right, bottom]
            var abWidth = abRect[2] - abRect[0];
            var abHeight = abRect[1] - abRect[3];

            // Duplicate the group
            var instance = originalGroup.duplicate();

            // Calculate current size of the group
            var bounds = instance.visibleBounds; // [x1, y1, x2, y2]
            var groupWidth = bounds[2] - bounds[0];
            var groupHeight = bounds[1] - bounds[3];

            var scaleFactor = (abHeight / groupHeight) * 100;

            instance.resize(scaleFactor, scaleFactor);

            // Recalculate bounds after resize
            bounds = instance.visibleBounds;
            groupWidth = bounds[2] - bounds[0];
            groupHeight = bounds[1] - bounds[3];

            // Calculate center position
            var targetLeft = abRect[0] + (abWidth - groupWidth) / 2;
            var targetTop = abRect[1] - (abHeight - groupHeight) / 2;

            // Move the object
            var deltaX = targetLeft - bounds[0];
            var deltaY = targetTop - bounds[1];

            instance.translate(deltaX, deltaY);
        }

        alert("✅ Group placed and scaled on all artboards.");
    }
}
