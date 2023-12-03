YouTube Ad Skipper README
Overview
YouTube Ad Skipper is a userscript designed to enhance your YouTube viewing experience by automatically skipping ads. This script detects when a YouTube ad is present and automatically clicks the 'Skip Ad' button as soon as it becomes available.

Features
Automatic Ad Skipping: Automatically clicks the 'Skip Ad' button on YouTube ads.
Targeted DOM Observation: Observes specific elements in the YouTube page structure for efficiency.
Debug Mode: Includes a toggleable debug mode for console logs, aiding in troubleshooting and development.
Improved Error Handling: Enhanced error handling for greater script resilience.
Refined Logic: The ad skipping logic has been refined to be more robust and efficient.
Latest Changes in Version 2.1
Refined ad skipping logic for improved efficiency.
Targeted observation of a specific DOM element to reduce load and increase efficiency.
Introduction of a debug logging mechanism, toggleable for easier debugging.
Enhanced error handling for increased resilience of the script.
Code refactoring for improved readability and maintainability.
Added detailed comments for a better understanding of the script's functionality.
Installation
This script is intended for use with Tampermonkey or similar userscript managers in web browsers.

Steps to Install:
Click the Tampermonkey extension icon in your browser.
Choose "Create a new script...".
Delete any content that might be pre-populated in the new script template.
Copy and paste the entire block of code from this README into the script editor.
Save the script by clicking File -> Save or by pressing Ctrl+S or Cmd+S.
Navigate to www.youtube.com to see the script in action.
Usage
Once installed, the script runs automatically on YouTube pages. It will attempt to click the 'Skip Ad' button as soon as it appears on an ad. The script operates quietly in the background, requiring no manual intervention.

Debug Mode
To enable debug mode for console logs:

Set this.debugMode = true in the constructor of the YouTubeAdSkipper class.
Debug logs will appear in the browser's console, providing insights into the script's operations and any issues encountered.
Author
Shawn
License
This script is distributed under the MIT License. See LICENSE for more information.

For any issues, suggestions, or contributions, please open an issue or pull request in the script's repository. Your feedback is greatly appreciated!
