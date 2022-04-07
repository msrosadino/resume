'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "34baeb3f9e7f67415cf05c5d7e6ced02",
"index.html": "ded98e8dbdacc6397f4a11403d9fc9f1",
"/": "ded98e8dbdacc6397f4a11403d9fc9f1",
"main.dart.js": "caf356f6e4c6bc3270983cd01ccc393d",
"favicon.png": "08e7fd61cd81e0ce527b1d991953bca2",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "b932e21a920bea1e9b39d3e543217140",
"assets/AssetManifest.json": "e1aceaf1adf9b0a699c06924dd2f5667",
"assets/NOTICES": "5b7609f875f73622937bf24c34ebe272",
"assets/FontManifest.json": "7932cb4e177cfbfe9f50f89ababb2732",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/assets/images/flutter_logo.png": "4282554fe7a617d7fc4974724ba3e5b7",
"assets/assets/images/trainings/card_apple.png": "f750efb33b8887d9f9be31fe9f67a0dc",
"assets/assets/images/trainings/card_tup.png": "690ea5d6b0bcf2d2e9a8902304271ec0",
"assets/assets/images/trainings/card_ibm.png": "3a5565a9c51cb9b01f532e6b2d97661a",
"assets/assets/images/profile_blue.png": "5a88ede234be57f0436c8f80299dedae",
"assets/assets/images/logos/sunlife.png": "0372b7076f7c2a0b1f5f3a21cbc657c9",
"assets/assets/images/logos/yondu.png": "986be31aecd0ec8f47c1d310a708927c",
"assets/assets/images/logos/ctc.png": "901c936f59ddc6cf697901496b1de960",
"assets/assets/images/logos/kumu.png": "235a84f379dd607834709f23f2f3cfb6",
"assets/assets/images/logos/novare.png": "2080b41621701f3a631438f2a3470f69",
"assets/assets/images/logos/flexisource.png": "cc2aec7adfb32feb2710ce3c0b52f4f5",
"assets/assets/images/logos/stratpoint.png": "0282089c97b3294a8383c3fe253694b7",
"assets/assets/images/logos/simplyhired.png": "676a47f4c1bd705510d6eac1c1ba1886",
"assets/assets/images/languages/jira.png": "5bbae04baadf4bd4c9dc20cbc7b50871",
"assets/assets/images/languages/oracledb.png": "97196b25cecbd53e6734f5bfb9634cd8",
"assets/assets/images/languages/subversion.png": "0b4f7ed53a76a8e354da670eff1243a8",
"assets/assets/images/languages/git.png": "02d6cd1414213e5d86d9eecf0ac03eb5",
"assets/assets/images/languages/vs_net.png": "ae3d5dda1da45e6d14a21ab2a5abf684",
"assets/assets/images/languages/python.png": "6b54c26b923275ec2a4eefd084fdcc30",
"assets/assets/images/languages/miniprogram.png": "bac40917c668b204fb8507cca2373e0b",
"assets/assets/images/languages/flutter.png": "27a265b675d72c6d222da3fca20db621",
"assets/assets/images/languages/dimensions.png": "f4306fbb5ab6b3f3a2c284d2a71cf685",
"assets/assets/images/languages/mockito.png": "a39650d45a288f9e8e74de02bffab2e0",
"assets/assets/images/languages/firebase.png": "3b2bece6aa9984cf8a7bd59b2bc96e53",
"assets/assets/images/languages/java.png": "072f64b7cb3de6428edf2a06456e8bf2",
"assets/assets/images/languages/aws.png": "510a590e83d25b7aa62b55bad34ddfd7",
"assets/assets/images/languages/android.png": "bbae4ca78eb984ba8ac70105c6c16346",
"assets/assets/images/languages/xml.png": "1afe02703a9ae71923d28599d0261e0b",
"assets/assets/images/languages/javascript.png": "4b32602bba800fe665af50604debea9e",
"assets/assets/images/languages/espresso.png": "04c6c4946c49c103af604712d04eafb5",
"assets/assets/images/languages/ms_azure.png": "76803ce66e2210f360f79e4f7a320a64",
"assets/assets/images/languages/foxpro9.png": "1bbae7a5f352319d2791c3c5ca65aac8",
"assets/assets/images/languages/postgreSql.png": "9245b37be5dcc615743b464cdf6240b6",
"assets/assets/images/languages/ionic.png": "6203379c77ec7854956ac87f53c9782e",
"assets/assets/images/languages/citrix.png": "b237af0214e98b7ee27ceb2e1eb4248f",
"assets/assets/images/languages/vb6.png": "e8fe9e72988305b749f3420556391217",
"assets/assets/images/languages/MySql.png": "6b89ca349accdb75ff2c71db4dd39ee9",
"assets/assets/images/languages/html.png": "6d934321d1c1e1cb9f3a72cf2f4a2212",
"assets/assets/images/languages/c_sharp_net.png": "c7a95894028dcfe837a320bf6859f92b",
"assets/assets/images/languages/MSSql.png": "564a149eaa63d2b45b94f114af3101b5",
"assets/assets/images/languages/vs_sourcesafe.png": "62014c5ec73893d4117d6dc363ed933d",
"assets/assets/images/languages/ms_app_center.png": "8935aa580e4dd9cb0e80d345d4d0560c",
"assets/assets/images/languages/jenkins.png": "68ece48ee3e92628712ed65a05393435",
"assets/assets/images/languages/php_codeigniter.png": "f19c7ddc7ba26a4bebb51717ced4016a",
"assets/assets/images/languages/php.png": "88e1d47d4371ea96047a42bc909f40d7",
"assets/assets/images/languages/redmine.png": "ada983326fe36bc4fce49b4b34adbe79",
"assets/assets/images/languages/css.png": "7d97a649bbfb40c447c9a82dc187085d",
"assets/assets/images/languages/junit.png": "970ee2fb25b62f108a0cde290f7282e3",
"assets/assets/images/languages/vb_net.png": "5590ee929168985d4637496a00e63a9f",
"assets/assets/images/languages/mongoDB.png": "87d57cd2fc592fb9b106ec0f4e3f01cc",
"assets/assets/images/languages/angularjs.png": "1208eae4ad1705c965ecab37f31b31af",
"assets/assets/images/languages/kotlin.png": "013808b2bf40074d925479ad3ccd26e1",
"assets/assets/images/languages/cordova.png": "6f64dfa053e7b84629ef53050866d840",
"assets/assets/images/languages/ibm_mobilefirst.png": "b478c70c4c3cda5bcb0ab099fc9c1c6a",
"assets/assets/images/biri.jpg": "7458d9944848984d8283f0328f32036a",
"assets/assets/fonts/Merriweather-Regular.ttf": "c97a9fc29652bb4afcdac68020e5d0f7"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
