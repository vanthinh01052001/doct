import {
  IconAppointment,
  IconBlog,
  IconDashboard,
  IconMessage,
  IconPayment,
  IconSchedule,
  IconSetting,
} from "@/components/icons";
import IconPatient from "@/components/icons/sidebar/IconPatient";
import { TSidebarLink } from "@/types/general.sidebar";

export const sidebarLinks: TSidebarLink[] = [
  {
    key: 1,
    title: "Overview",
    icon: <IconDashboard />,
    path: "/",
  },
  {
    key: 2,
    title: "Appointment",
    icon: <IconAppointment />,
    path: "/appointment",
  },
  {
    key: 3,
    title: "My Patinet",
    icon: <IconPatient />,
    path: "/my_patinet",
  },
  {
    key: 4,
    title: "Schedule Timings",
    icon: <IconSchedule />,
    path: "/schedule_timings",
  },
  {
    key: 5,
    title: "Payments",
    icon: <IconPayment />,
    path: "/payments",
  },
  {
    key: 6,
    title: "Message",
    icon: <IconMessage />,
    path: "/message",
  },
  {
    key: 7,
    title: "Blog",
    icon: <IconBlog />,
    path: "/blog",
  },
  {
    key: 8,
    title: "Settings",
    icon: <IconSetting />,
    path: "/settings",
  },
];
