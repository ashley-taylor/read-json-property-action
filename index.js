const fs = require('fs');
const core = require('@actions/core');

(async () => {
    try {
        const path = core.getInput('path');
        const property = core.getInput('property');
        const jsonData = core.getInput('json');
        let json;
        if(path) {
            const data = await fs.promises.readFile(path);
             json = JSON.parse(data);
        }else {
            json = JSON.parse(jsonData);
        }
        const parts = property.split('.');

        let toReturn = json;
        for(const part of parts) {
            toReturn = toReturn[part];
        }
        if(toReturn === undefined) {
            core.setFailed(`'${property}' does not exist in the provided JSON structure.`);
        } else {
            core.setOutput("value", toReturn);
        }

    } catch (error) {
        core.setFailed(error.message);
    }
})();
