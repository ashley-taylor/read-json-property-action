const fs = require('fs');
(async () => {
    try {
        const path = core.getInput('path');
        const property = core.getInput('property');
        const jsonData = core.getInput('json');
        if(path) {
            const data = await fs.promises.readFile(path);
            const json = JSON.parse(data);
            core.setOutput("value", json[property]);
        }else {
            const json = JSON.parse(jsonData);
            core.setOutput("value", json[property]);
        }
    } catch (error) {
   		core.setFailed(error.message);
    }
})();
