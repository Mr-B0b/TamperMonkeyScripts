// ==UserScript==
// @name         VSCode
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Add button to Github pages to open repositories in VSCode with Github1s
// @author       Mr-B0b
// @match        https://github.com/*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    console.log("[Tamper] Loading tampermonkey filters");
    var sleeping_time = 1000;
    console.log("[Tamper] Waiting " + sleeping_time + "ms before launching...");
    setTimeout(function() {
        console.log("[Tamper] Launching...");
        function openVSCode() {
            console.log("[Tamper] Open github1s.com website");
            window.open(location.href.replace('github.com', 'github1s.com'), '_self');
        }
        window.openVSCode = openVSCode;
        var d1 = document.getElementsByClassName("file-navigation");
        d1[0].insertAdjacentHTML('beforeend', '<button id="VSCode" onclick="window.openVSCode()" class="btn ml-2 btn-outline"><svg class="octicon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M1.75 2.5h12.5a.25.25 0 01.25.25v7.5a.25.25 0 01-.25.25H1.75a.25.25 0 01-.25-.25v-7.5a.25.25 0 01.25-.25zM14.25 1H1.75A1.75 1.75 0 000 2.75v7.5C0 11.216.784 12 1.75 12h3.727c-.1 1.041-.52 1.872-1.292 2.757A.75.75 0 004.75 16h6.5a.75.75 0 00.565-1.243c-.772-.885-1.193-1.716-1.292-2.757h3.727A1.75 1.75 0 0016 10.25v-7.5A1.75 1.75 0 0014.25 1zM9.018 12H6.982a5.72 5.72 0 01-.765 2.5h3.566a5.72 5.72 0 01-.765-2.5z"></path></svg><span>Open with VSCode</span></button>');
        document.getElementById("VSCode").addEventListener("click", openVSCode);
        console.log("[Tamper] Tampermonkey filters loaded!");
    }, sleeping_time);
})();
