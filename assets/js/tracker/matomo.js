  var _paq = window._paq || [];
  /*
  * tracker methods like "setCustomDimension" should be called before "trackPageView",
  * "setVisitorCookieTimeout" - set expiration time for _pk_id cookie in seconds, currently 90 days.
  */
  _paq.push(['trackPageView']);
  _paq.push(['enableLinkTracking']);
  (function() {
    var u="https://matomo.turku.fi/";
    _paq.push(['setTrackerUrl', u+'matomo.php']);
    _paq.push(['setSiteId', '6']);
    _paq.push(['setVisitorCookieTimeout', '7776000']);
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
  })();
