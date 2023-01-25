import fs from 'node:fs/promises';

import * as core from '@actions/core';

(async () => {
    try {
        const path = core.getInput('path');
        const property = core.getInput('property');
        const jsonData = core.getInput('json');
        let json;
        if (path) {
            const data = await fs.readFile(path);
            json = JSON.parse(Buffer.isBuffer(data) ? data.toString() : data);
        } else {
            json = JSON.parse(jsonData);
        }
        const parts = property.split('.');

        let toReturn = json;
        for(const part of parts) {
            toReturn = toReturn[part];
        }
        core.setOutput("value", toReturn);

    } catch (error) {
        core.error(error.message)
        core.setFailed(error.message);
    }
})();
