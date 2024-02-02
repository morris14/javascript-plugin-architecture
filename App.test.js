import App from "./App.js";

const mockPluginSetup = jest.fn();
const mockPluginSetup2 = jest.fn();
const mockPluginTeardown = jest.fn();
const mockPluginTeardown2 = jest.fn();

const mockPlugin = jest.fn().mockImplementation(() => {
  return {
    setup: mockPluginSetup,
    teardown: mockPluginTeardown,
  };
});

const mockPlugin2 = jest.fn().mockImplementation(() => {
  return {
    setup: mockPluginSetup2,
    teardown: mockPluginTeardown2,
  };
});

const mockLoginAction = jest.fn();
const mockLogoutAction = jest.fn();

class MockPluginWithLoginHook {
  constructor(appClass) {
    this.app = appClass;
  }

  setup() {
    this.app.registerLoginActions(this.toDoOnLogin.bind(this));
  }

  toDoOnLogin() {
    mockLoginAction();
  }
}

class MockPluginWithLogoutHook {
  constructor(appClass) {
    this.app = appClass;
  }

  setup() {
    this.app.registerLogoutActions(this.toDoOnLogout.bind(this));
  }

  toDoOnLogout() {
    mockLogoutAction();
  }
}

test("App registers plugins", () => {
  const app = new App();

  app.plugins([MockPluginWithLoginHook, MockPluginWithLogoutHook]);

  expect(app.pluginsArray[0]).toBeInstanceOf(MockPluginWithLoginHook);
  expect(app.pluginsArray[1]).toBeInstanceOf(MockPluginWithLogoutHook);
});

test("App runs setup for all plugins", () => {
  const app = new App();

  app.plugins([mockPlugin, mockPlugin2]).setup();

  expect(mockPluginSetup).toHaveBeenCalled();
  expect(mockPluginSetup2).toHaveBeenCalled();
});

test("App runs teardown for all plugins", () => {
  const app = new App();

  app.plugins([mockPlugin, mockPlugin2]).teardown();

  expect(mockPluginTeardown).toHaveBeenCalled();
  expect(mockPluginTeardown2).toHaveBeenCalled();
});

test("App allows plugins to hook into the login event", () => {
  const app = new App();

  app.plugins([MockPluginWithLoginHook]).setup().handleLogin();

  expect(mockLoginAction).toHaveBeenCalled();
});

test("App allows plugins to hook into the logout event", () => {
  const app = new App();

  app.plugins([MockPluginWithLogoutHook]).setup().handleLogout();

  expect(mockLogoutAction).toHaveBeenCalled();
});
