class DashboardCards {
  constructor(appClass) {
    this.app = appClass;
  }

  setup = () => {
    console.log("    |---- PLUGIN: DASHBOARD CARDS: plugin setup");

    this.app.registerAppReloadActions(this.fireActionsForDashboardCards);
  };

  teardown = () => {
    console.log("    |---- PLUGIN: DASHBOARD CARDS: plugin teardown");
  };

  fireActionsForDashboardCards = () => {
    console.log(
      "    |---- PLUGIN: DASHBOARD CARDS: fire actions for dashboard cards"
    );
  };
}

export default DashboardCards;
