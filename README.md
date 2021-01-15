# openui5_walkthrough

This project implements the openui5 walkthrough tutorial at https://sapui5.hana.ondemand.com/#/topic/3da5f4be63264db99f2e5b04c5e853db utilizing the ui5 tooling

The project organizes the steps of the openui5 walkthrough with git tags so you find step 01 with tag step_001. 

The following prerequisites must be meet to use ui5 tooling
1. Install Node.js
2. Install ui5 tooling with npm install --global @ui5/cli (This is the global installation)

In order to use ui5 tooling the initial setup differs a little bit from the offical tutorial. Step 01 (tag: step_001) stays the same as it prepares only a pure html page.
Step 02 (step_002) was produced from Step 01 with the following modifications:

1. To enable ui5 tooling you must setup an initial node project. To do that perform _npm init_. 
2. Create a ./webapp folder with a minimal manifest.json:
`{
    "sap.app": {
        "id": "openui5_walkthrough",
        "type": "application",
        "title": "Open UI5 Walkthough",
        "applicationVersion": { "version": "1.0.0" }

    }
}`
3. initialize ui5 tooling with `npm init`
4. Set the framework to use with `ui5 use openui5@latest`
5. Add the required libraries with `ui5 add sap.ui.core sap.m`
6. The tooling then takes care of the dependencies and offers the libraries at the resource path _./resources/..._ e.g. _/resources/sap-ui-core.js_. You need to care about correct paths at bootstripping ui5

As you've applied also the advanced index.html and the first implementation of of index.js from Step 02 of the openui5 walkthrough you can `ui5 serv -o index.html` to start a local server to test your application.





