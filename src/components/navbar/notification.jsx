import React from "react";
import { FaBell } from "react-icons/fa";

import readAllNotification from "../../hook/user/useReadUserNotification";
import UserNotification from "../../hook/user/useUserNotification";

export default function Notification({ className }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const { notification } = UserNotification();
  const { readAll } = readAllNotification();

  const unreadNotif = notification?.data?.rows?.filter(
    (notif) => notif.isRead === false
  );

  function handleNotif() {
    setIsOpen(!isOpen);
    if (unreadNotif.length > 0) {
      readAll();
    }
  }

  return (
    <>
      <button className={className} onClick={() => handleNotif()}>
        <div className="relative">
          {notification?.data?.unreadCount > 0 && (
            <p className="absolute -top-3 -right-2 rounded-full p-1 w-4 h-4 flex items-center justify-center text-xs bg-red-900">
              {notification?.data?.unreadCount}
            </p>
          )}
          <FaBell size={20} />
        </div>
      </button>
      {isOpen && (
        <div className="absolute top-14 right-2 z-10">
          <div className="bg-white shadow-lg rounded-lg p-4">
            <h2 className="text-lg text-black font-bold mb-2">Notification</h2>
            <ul className="flex gap-1 flex-col">
              {notification?.data?.rows?.map((item, index) => (
                <li className="w-56 rounded-box bg-base-200 p-2" key={index}>
                  <div className="flex flex-col justify-start items-start">
                    <p>Laporan terverifikasi</p>
                    <p>{item.lapor.keterangan.substring(0, 20) + "..."}</p>
                    <p className="text-xs mt-2 text-gray-300">
                      {item.createdAt.substring(0, 10)}
                    </p>
                  </div>
                </li>
              )) || "No new notification"}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
