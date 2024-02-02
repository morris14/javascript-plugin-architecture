class App {
  constructor() {
    this.pluginsArray = [];
    this.loginActions = [];
    this.logoutActions = [];
    this.appReloadActions = [];
  }

  /**
   * Allow plugins to be registered
   * @param {Array<Function>} plugins
   * @returns {App}
   */
  plugins = (plugins = []) => {
    this.pluginsArray = plugins.map((plugin) => new plugin(this));

    return this;
  };

  /**
   * Allow plugins to register actions to be executed on login
   * @param {Function|Array<Function>} action
   * @returns {App}
   */
  registerLoginActions = (action) => {
    if (Array.isArray(action)) {
      action.forEach((a) => this.loginActions.push(a));
    } else {
      this.loginActions.push(action);
    }

    return this;
  };

  /**
   * Allow plugins to register actions to be executed on logout
   * @param {Function|Array<Function>} action
   * @returns {App}
   */
  registerLogoutActions = (action) => {
    if (Array.isArray(action)) {
      action.forEach((a) => this.logoutActions.push(a));
    } else {
      this.logoutActions.push(action);
    }

    return this;
  };

  /**
   * Allow plugins to register actions to be executed on app reload
   * @param {Function|Array<Function>} action
   * @returns {App}
   */
  registerAppReloadActions = (action) => {
    if (Array.isArray(action)) {
      action.forEach((a) => this.appReloadActions.push(a));
    } else {
      this.appReloadActions.push(action);
    }

    return this;
  };

  /**
   * Setup the app and run the setup method of each plugin
   * @returns {App}
   */
  setup = () => {
    console.log("APP - STARTED");
    this.pluginsArray.forEach((plugin) => plugin.setup && plugin.setup());

    return this;
  };

  /**
   * Teardown the app and run the teardown method of each plugin
   * @returns {App}
   */
  teardown = () => {
    console.log("");
    console.log("APP - ENDED");
    this.pluginsArray.forEach((plugin) => plugin.teardown && plugin.teardown());

    return this;
  };

  /**
   * Handle the login process and run the login actions
   */
  handleLogin = () => {
    console.log("");
    console.log("APP - SIMULATE LOGIN");
    this.loginActions.forEach((action) => action());
  };

  /**
   * Handle the logout process and run the logout actions
   */
  handleLogout = () => {
    console.log("");
    console.log("APP - SIMULATE LOGOUT");
    this.logoutActions.forEach((action) => action());
  };

  /**
   * Handle the app reload process and run the app reload actions
   */
  handleAppReload = () => {
    console.log("");
    console.log("APP - SIMULATE RELOAD");
    this.appReloadActions.forEach((action) => action());
  };

  /**
   * Start the app
   */
  start = () => {
    this.setup();

    // Simulate a user logging in after 2 seconds
    setTimeout(() => this.handleLogin(), 2000);

    // Simulate the app being reloaded after 4 seconds
    setTimeout(() => this.handleAppReload(), 4000);

    // Simulate a user logging out after 6 seconds
    setTimeout(() => this.handleLogout(), 6000);

    // Simulate the app being torn down after 8 seconds
    setTimeout(() => this.teardown(), 8000);
  };
}

export default App;
