# Changes for Meteor Toys 3.0

In addition to bug fixes, compatibility improvements and UI tweaks:

## Mongol
- Added ability to reset the private Meteor Toys collection
- Added ability to reset Meteor collections and localStorage as a substitute for `meteor reset` (all collections refer to collections detected by Mongol. 
    - To add a collection to the list, use: “Package[“msavin:mongol”].Mongol.showCollection(‘collectionName’)’
    - To remove a collection, use: “Package[“msavin:mongol”].Mongol.hideCollection(‘collectionName’)’

## Blueprint
- Added template name to header
- Safely folded in `gwendall:body` to reduce an external dependency

## Authentication
- Automatically detects accounts in the database on startup
- Added ability to search for accounts in the database via _id, username or email entry 
- Displays one green dot if the account is authenticated, and two green dots is the account is being impersonated
- "End Session" button now ends the impersonation session. If user was previously authenticated, it will go back to being that user

## Method and Pub
- Added ability to record inputted values (shipped in a MT2.X release)

## Shell
- Recording entry for easier changes

## Method, Shell and Result 
- Added ability to record parameters entered into Method and Shell into result

## Meteor Toys Mobile 
- Add with `meteor add meteortoys:mobile`
- Mobile-optimized interface for Meteor Toys on Cordova and Mobile Safari
- Provides easy access to reload, hot reload, account impersonation and connection management

## Meteor Toys Toggle
- Add with `meteor add meteortoys:toggle`
- Hover over it Meteor Toys 
- Alt/shift-hover on desktop or swipe on mobile to hide during the session
- Serves as alternative to Ctrl + M, which may not always be available when using Cordova, etc 

## Status toy
- Added ‘failed’ and ‘waiting’ to display full spectrum of connection states

## Throttle
 - Enabled two modes of throttling to suit your preference
 - Alt/Shift + click to disable 

## Overall Improvements
- Added MeteorToys.clear(); clears localStorage but preserve Meteor Toys keys
- Added MeteorToys.remove(); removes Meteor Toys keys from app and the browser
- Added MeteorToys.open(); to open Meteor Toys. This can added to your app startup so they would always be open
- Added MeteorToys.close(); to close MEteor Toys
- Improved back-up of authentication key to prevent having to re-authenticate on application resets
- Embedding font via file to avoid browser policy issues 
- Add "METEORTOYS_DISABLE_LOGGING" to stop them from logging things like Method calls, Subscriptions, Mongol document removes, etc.
- Right clicking on a toy closes, right clicking on a closed toy re-opens it

## Other Notes
- JetSetter requires Reactive-Dicts to be in the global namespace to work. For development purposes, JetSetter will include Session into the global namespace if it is in use but not already available. 

# Known Issues
 - In some cases, Blueprint has a bug when hovering over templates with Meteor 1.3 (I believe related to modules). I am seeing if it can be resolved, but I cannot guarantee it.
 - Firefox and Safari seem to have an issue when using a combination of the pre tag and content-editable. Currently, editing in Mongol and JetSetter works most reliably in Chrome. I am looking to see if this is something that can be resolved.