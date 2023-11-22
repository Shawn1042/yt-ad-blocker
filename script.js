// ==UserScript==
// @name         youtube Ad Skipper
// @namespace    youtube-ad-skipper
<<<<<<< HEAD
// @version      2.1
// @description  Skips YouTube ads automatically when they appear in the DOM.
=======
// @version      2.0
// @description   skips YouTube ads when skip ad btn pops up in DOM Tree
>>>>>>> 8d31e450b8b50563ef2643d7b529f228ad5497da
// @author       Shawn
// @match        *://www.youtube.com/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    class YouTubeAdSkipper {
        constructor() {
            this.debugMode = false; // Set to true for console logs
            this.init();
        }

        log(message) {
            if (this.debugMode) {
                console.log(`YouTube Ad Skipper: ${message}`);
            }
        }

        init() {
            this.startObserving();
        }

        startObserving() {
            const targetNode = document.getElementById('page-manager'); // Targeting a more specific element

            if (!targetNode) {
                this.log('Target node not found. Retrying in 3 seconds.');
                setTimeout(() => this.init(), 3000);
                return;
            }

            const observer = new MutationObserver(mutations => {
                mutations.forEach(mutation => {
                    if (mutation.addedNodes.length) {
                        this.checkAndSkipAd();
                    }
                });
            });

            const config = { childList: true, subtree: true };
            observer.observe(targetNode, config);
            this.log('Observing for ads...');
        }

        checkAndSkipAd() {
            try {
                const skipButton = document.querySelector('.ytp-ad-text.ytp-ad-skip-button-text');
                
                if (skipButton && !skipButton.disabled) {
                    skipButton.click();
                    this.log('Ad skipped');
                }
            } catch (error) {
                console.error('Error in YouTube Ad Skipper:', error);
            }
        }
    }

    new YouTubeAdSkipper();
})();
