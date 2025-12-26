interface SidebarItem {
  name: string;
  link: string;
  icon: string;
}

const sidebarItem: SidebarItem[] = [
  {
    name: "Home",
    link: "#home",
    icon: "ri:home-5-line",
  },
  {
    name: "About",
    link: "#about",
    icon: "ri:user-5-line",
  },
  {
    name: "Skills",
    link: "#skills",
    icon: "ri:tools-line",
  },
  {
    name: "Education",
    link: "#education",
    icon: "ri:book-read-line",
  },
  {
    name: "Certifications",
    link: "#certifications",
    icon: "ri:award-line",
  },
  {
    name: "Projects",
    link: "#projects",
    icon: "ri:code-s-slash-line",
  },
  {
    name: "Activities",
    link: "#activities",
    icon: "ri:calendar-event-line",
  },
  {
    name: "Blogs",
    link: "#blogs",
    icon: "ri:article-line",
  },
  {
    name: "Contact",
    link: "#contact",
    icon: "ri:mail-send-line",
  },
];

export default sidebarItem;
