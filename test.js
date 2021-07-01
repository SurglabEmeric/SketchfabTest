<head>
    <script type="text/javascript" src="https://static.sketchfab.com/api/sketchfab-viewer-1.5.1.js"></script>
   <script type="text/javascript" src="https://cdn.jsdelivr.net/gh/shaderbytes/Sketchfab-Viewer-API-Utility@v3.0.0.2/SketchfabAPIUtility.js"></script>
   
</head>

<body>
  <div class="center-div">
    <iframe id="api-frame" width="80%" height="400"  allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
  </div>
  
  <script>
      function onSketchfabUtilityReady(){
         sketchfabAPIUtilityInstance.removeEventListener(sketchfabAPIUtilityInstance.EVENT_INITIALIZED, onSketchfabUtilityReady);
         //some code here..
      };
      var sketchfabAPIUtilityInstance = new SketchfabAPIUtility("f2cf34d770f54569a9a59df02c23ad73", document.getElementById("api-frame"), {"autostart": 1 });
      sketchfabAPIUtilityInstance.addEventListener(sketchfabAPIUtilityInstance.EVENT_INITIALIZED, onSketchfabUtilityReady);
      sketchfabAPIUtilityInstance.create();
   </script>
  
</body>
