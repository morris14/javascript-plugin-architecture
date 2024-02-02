class AppPolling {
  constructor(appClass) {
    this.app = appClass;

    this.startPolling = this.startPolling.bind(this);
    this.stopPolling = this.stopPolling.bind(this);
  }

  setup() {
    console.log("    |---- PLUGIN: APP POLLING: plugin setup");

    this.app.registerLoginActions(this.startPolling);
    this.app.registerLogoutActions(this.stopPolling);
  }

  teardown() {
    console.log("    |---- PLUGIN: APP POLLING: plugin teardown");
  }

  startPolling() {
    console.log("    |---- PLUGIN: APP POLLING: simulate polling");
  }

  stopPolling() {
    console.log("    |---- PLUGIN: APP POLLING: simulate stopped polling");
  }
}

export default AppPolling;
