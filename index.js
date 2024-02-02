import App from "./App.js";
import AppPolling from "./plugins/AppPolling.js";
import DashboardCards from "./plugins/DashboardCards.js";
import OneSignalNotifications from "./plugins/OneSignalNotifications.js";

new App().plugins([DashboardCards, AppPolling, OneSignalNotifications]).start();
