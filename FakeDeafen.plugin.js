 /**

 * @name FakeDeafen
 * @author r83
 * @version 1.0.0
 * @description 
 */


module.exports = class FakeDeafen {

    start() {
        const MediaEngine = BdApi.Webpack.getByKeys("setDeaf", "isDeaf");

        if (!MediaEngine) {
            BdApi.UI.showToast("Error: Discord Audio Pod Could Not Be Found!", { type: "error" });
            return;

        }
        BdApi.Patcher.instead("FakeDeafenHook", MediaEngine, "setDeaf", (thisObject, args, originalFunction) => {

            if (args[1] === true) {

                return; 

            }
            return originalFunction.apply(thisObject, args);

        });
        BdApi.UI.showToast("FakeDeafen Activated!", { type: "success" });

    }


    stop() {
        BdApi.Patcher.unpatchAll("FakeDeafenHook");
        BdApi.UI.showToast("FakeDeafen Disable", { type: "info" });

    }

}; 
