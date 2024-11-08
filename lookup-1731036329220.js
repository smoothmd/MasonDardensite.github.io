(function(window, undefined) {
  var dictionary = {
    "5939c39d-82ed-4e6a-b3f0-cfd873825120": "Screen 3",
    "75c60ab7-55c6-4cb8-a4d8-17b408fde6f7": "Screen 6",
    "51067ff8-a114-4658-b7a4-460298442469": "Screen 2",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Screen 1",
    "1ca64394-7ce9-4183-a0f5-ae27c4a04e4c": "Screen 4",
    "c6a9cf21-068b-4a09-9db3-a46da134093d": "Settings",
    "7fddd8a2-fa8c-4cd7-a3b4-42e1f34ccad3": "Screen 5",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "Board 1"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);