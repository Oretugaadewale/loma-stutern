import { useState, useEffect } from "react";
import "./Settings.css";
import NotificationSettings from "./NotificationSettings";
import SecurityAndPrivacySettings from "./SecurityAndPrivacySettings";

export default function Settings() {
  const [Notification, setNotification] = useState(false);
  const [securityAndPrivacy, setSecurityAndPrivacy] = useState(false);

  useEffect(() => {
    setNotification(true);
  }, []);

  const handleNotificationClick = () => {
    setSecurityAndPrivacy(false);
    setNotification(true);
  };

  const handleSecurityAndPrivacyClick = () => {
    setNotification(false);
    setSecurityAndPrivacy(true);
  };
  return (
    <>
      <div>
        <nav className="Settings-Navigation">
          <ul className="Settings-Navigation_flex-container">
            <li
              onClick={handleNotificationClick}
              className={
                Notification
                  ? "Settings-Navigation_flex-item active"
                  : "Settings-Navigation_flex-item"
              }
            >
              Notification
            </li>
            <li
              onClick={handleSecurityAndPrivacyClick}
              className={
                securityAndPrivacy
                  ? "Settings-Navigation_flex-item active"
                  : "Settings-Navigation_flex-item"
              }
            >
              Security & Privacy
            </li>
          </ul>
        </nav>
        <section>
          {Notification ? (
            <NotificationSettings />
          ) : securityAndPrivacy ? (
            <SecurityAndPrivacySettings />
          ) : null}
        </section>
      </div>
    </>
  );
}
