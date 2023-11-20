// ==UserScript==
// @name         youtube Ad Skipper
// @namespace    youtube-ad-skipper
// @version      2.0
// @description   skips YouTube ads when skip ad btn pops up in DOM Tree
// @author       Shawn
// @match        *://www.youtube.com/*
// @grant        none
// ==/UserScript==


(function () {
    'use strict';

    class YouTubeAdSkipper {
        constructor() {
            this.init();
        }

        init() {

            this.startObserving();
        }

        startObserving() {
            const observer = new MutationObserver(mutations => {
                mutations.forEach(mutation => {
                    if (mutation.addedNodes.length) {
                        this.checkAndSkipAd();
                    }
                });
            });

            const config = { childList: true, subtree: true };
            observer.observe(document.body, config);
        }

        checkAndSkipAd() {
            try {
                const skipButton = document.querySelector('.ytp-ad-text.ytp-ad-skip-button-text');
                
                if (skipButton && !skipButton.disabled) {
                    skipButton.click();
                    
                    console.log("Ad skipped by YouTube Ad Skipper");
                }
            } catch (error) {
              
                console.error("Error in YouTube Ad Skipper:", error);
            }
        }
    }
   
    new YouTubeAdSkipper();
})();

// /* 
// Instructions for use in Tampermonkey:
// 1. Click the Tampermonkey extension icon in your browser.
// 2. Choose "Create a new script...".
// 3. Delete any content that might be pre-populated in the new script template.
// 4. Copy and paste the entire block of code above into the script editor.
// 5. Save the script by clicking File -> Save or by pressing Ctrl+S or Cmd+S.
// 6. Navigate to www.youtube.com to see the script in action. The script will automatically attempt to click the 'Skip Ad' button on YouTube ads.
// */

