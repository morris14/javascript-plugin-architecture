class OneSignalNotifications {
  constructor(appClass) {
    this.app = appClass;
  }

  setup = () => {
    console.log("    |---- PLUGIN: ONE SIGNAL NOTIFICATIONS: plugin setup");

    this.app.registerLoginActions(this.registerOneSignal);
    this.app.registerLogoutActions(this.unregisterOneSignal);
  };

  teardown = () => {
    console.log("    |---- PLUGIN: ONE SIGNAL NOTIFICATIONS: plugin teardown");
  };

  registerOneSignal = () => {
    console.log(
      "    |---- PLUGIN: ONE SIGNAL NOTIFICATIONS: registering OneSignal after login"
    );
  };

  unregisterOneSignal = () => {
    console.log(
      "    |---- PLUGIN: ONE SIGNAL NOTIFICATIONS: unregistering OneSignal after logout"
    );
  };
}

export default OneSignalNotifications;
