// CreateLaunchImages.jsx
// Generates artboards for iOS splash screens in columns from top-left of pasteboard

if (app.documents.length === 0) {
    alert("Please open a document first.");
} else {
    var doc = app.activeDocument;

    var splashSizes = [
        { width: 1024, height: 1366 }, { width: 834, height: 1194 },
        { width: 820, height: 1180 }, { width: 744, height: 1133 },
        { width: 834, height: 1112 }, { width: 810, height: 1080 },
        { width: 768, height: 1024 }, { width: 440, height: 956 },
        { width: 430, height: 932 },  { width: 428, height: 926 },
        { width: 414, height: 896 },  { width: 402, height: 874 },
        { width: 393, height: 852 },  { width: 390, height: 844 },
        { width: 375, height: 812 },  { width: 414, height: 736 },
        { width: 375, height: 667 },  { width: 320, height: 568 }
    ];

    // Additional deduped splash sizes to cover all devices
    var additionalSizes = [
        { width: 375, height: 812 }, { width: 414, height: 896 },
        { width: 428, height: 926 }, { width: 390, height: 844 },
        { width: 320, height: 568 }
    ];

    for (var i = 0; i < additionalSizes.length; i++) {
        var size = additionalSizes[i];
        var duplicate = false;
        for (var j = 0; j < splashSizes.length; j++) {
            if (splashSizes[j].width === size.width && splashSizes[j].height === size.height) {
                duplicate = true;
                break;
            }
        }
        if (!duplicate) splashSizes.push(size);
    }

    splashSizes.sort(function(a, b) {
        return b.height - a.height || b.width - a.width;
    });

    var padding = 100;
    var pasteboardBottomY = -6967.5;

    var startX = -7600;
    var startY = 0;

    var colX = startX;
    var colY = startY;
    var colWidth = 0;
    var created = 0;

    for (var i = 0; i < splashSizes.length; i++) {
        var splash = splashSizes[i];
        var w = Math.round(splash.width);
        var h = Math.round(splash.height);

        var left = colX;
        var top = colY;
        var right = colX + w;
        var bottom = top - h;

        if (bottom < pasteboardBottomY) {
            colX += colWidth + padding;
            colY = startY;
            colWidth = 0;

            left = colX;
            top = colY;
            right = colX + w;
            bottom = top - h;
        }

        try {
            var ab = doc.artboards.add([left, top, right, bottom]);
            ab.name = "LaunchImage-" + w + "x" + h;
            created++;
        } catch (e) {
            alert("❌ Error creating LaunchImage-" + w + "x" + h + ": " + e);
            break;
        }

        colY = bottom - padding;
        if (w > colWidth) colWidth = w;
    }

    alert("✅ Created " + created + " LaunchImage artboards.");
}
