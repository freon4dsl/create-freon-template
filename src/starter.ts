import { FreonLayout, WebappConfigurator, setDevelopment } from "@freon4dsl/webapp-lib";
import { configureExternals } from "./configure/externals.js";
import { LanguageEnvironment } from "./frecode/index.js";
import { configureLoggers } from "./configure/loggers.js";
import { ServerCommunication} from "@freon4dsl/core";
// import { LionWebRepositoryCommunication } from "@freon4dsl/core"

/**
 * Initialize everything
 */
WebappConfigurator.getInstance().setEditorEnvironment(LanguageEnvironment.getInstance());
WebappConfigurator.getInstance().setServerCommunication(ServerCommunication.getInstance());
setDevelopment(true)
configureExternals()
configureLoggers()

/**
 * Now start the app ...
 */
const app = new FreonLayout({
    target: document.body,
});
export default app;
